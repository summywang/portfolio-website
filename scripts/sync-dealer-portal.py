"""Map the Chinese source into the real website; never hand-edit generated copy."""
import argparse, json, re, shutil, hashlib
from pathlib import Path
parser=argparse.ArgumentParser()
parser.add_argument('--content-root', type=Path, required=True)
args=parser.parse_args()
web=Path(__file__).resolve().parents[1]
project=args.content_root.resolve()/'projects/dealer-portal'
source=project/'案例.md'
text=source.read_text()
sections=re.split(r'^## \d+\. .+$',text,flags=re.M)[1:]
assert len(sections)==8, 'Expected all eight chapters'
assets={}
def clean(s): return s.strip().replace('**','')
def media(line):
    fields=line.strip().strip('［］').split('｜')
    path=fields[2]; original=project/path
    assert original.is_file(), original
    target='/assets/projects/dealer-portal/'+original.name
    assets[target]=original
    return dict(type='image',src=target,alt=fields[5],caption=fields[4],fit='contain')
def blocks(s):
    result=[]
    for chunk in re.split(r'\n\s*\n',s.strip()):
        if chunk.startswith('［Media plan'): result.append(dict(type='media',media=media(chunk)))
        elif chunk.startswith('- '): result.append(dict(type='list',items=[clean(x[2:]) for x in chunk.splitlines()]))
        elif chunk and not chunk.startswith('#'): result.append(dict(type='text',paragraphs=[clean(chunk)]))
    return result
def chapter(s):
    title=re.search(r'^### (.+)$',s,re.M).group(1)
    bs=blocks(re.sub(r'^### .+$','',s,flags=re.M))
    return dict(title=title,paragraphs=[p for b in bs if b['type']=='text' for p in b['paragraphs']],media=[b['media'] for b in bs if b['type']=='media'])
hero=dict(title='E-Bike Service Tool',subtitle=re.search(r'^### (.+)$',sections[0],re.M).group(1),status='2025 年 3 月上線',media=next(b['media'] for b in blocks(sections[0]) if b['type']=='media'))
context=blocks(sections[1]); facts={}
for b in context:
    if b['type']=='list':
        for row in b['items']:
            key,value=row.split('：',1); facts[key]=value
snapshot=dict(summary=[p for b in context if b['type']=='text' for p in b['paragraphs']],product=facts['產品'],role=facts['我的角色'],timeline=facts['時程'],team=facts['協作團隊'],focus=facts['設計重點'].split('、'))
painparts=re.split(r'^#### (.+)$',sections[2],flags=re.M)
problem=chapter(painparts[0]); problem['pains']=[]
for i in range(1,len(painparts),2):
    bs=blocks(painparts[i+1]); problem['pains'].append(dict(title=painparts[i],body='\n\n'.join(p for b in bs if b['type']=='text' for p in b['paragraphs']),media=[b['media'] for b in bs if b['type']=='media']))
dec=[]
parts=re.split(r'^### (.+)$',sections[4],flags=re.M)
for i in range(1,len(parts),2):
    label,title=parts[i].split(' — ',1)
    dec.append(dict(id='decision-'+str(i),label=label,title=title,blocks=blocks(parts[i+1])))
stepsparts=re.split(r'^### \d+\. (.+)$',sections[5],flags=re.M)
experience=chapter(stepsparts[0]); experience['steps']=[]
for i in range(1,len(stepsparts),2):
    bs=blocks(stepsparts[i+1]); ms=[b['media'] for b in bs if b['type']=='media']
    step=dict(id='step-'+str((i+1)//2),title=stepsparts[i],text='\n\n'.join(p for b in bs if b['type']=='text' for p in b['paragraphs']))
    if ms: step['media']=ms[0]
    experience['steps'].append(step)
impact=chapter(sections[6]); impact['closingParagraphs']=[impact['paragraphs'].pop()]; impact['evidence']=[]
for b in blocks(sections[6]):
    if b['type']=='list':
        impact['evidence'] += [dict(kind='measured',text=t,source='作者提供的上線首年平台統計') for t in b['items']]
data=dict(slug='dealer-portal',entryType='case-study',language='zh-Hant',provenance=dict(kind='original'),hero=hero,snapshot=snapshot,problem=dict(content=problem),strategy=dict(content=chapter(sections[3])),decisions=dict(content=dict(items=dec)),experience=dict(content=experience),impact=dict(content=impact),reflection=dict(content=chapter(sections[7])))
output=web/'src/data/cases/dealer-portal.ts'
output.write_text('// Generated from projects/dealer-portal/案例.md by scripts/sync-dealer-portal.py.\nimport type { CaseStudyData } from "../schema";\nexport const dealerPortal: CaseStudyData = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n')
manifest_path=web/'docs/asset-manifest.json'
manifest=[x for x in json.loads(manifest_path.read_text()) if not x.get('file','').startswith('/assets/projects/dealer-portal/')]
for target,original in assets.items():
    destination=web/'public'/target.lstrip('/'); destination.parent.mkdir(parents=True,exist_ok=True); shutil.copyfile(original,destination)
    manifest.append(dict(file=target,source='portfolio-content/projects/dealer-portal/'+str(original.relative_to(project)),kind='image',usage='Chinese case review in production template',status='Author supplied; external publication scope remains in project notes'))
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(f'Synchronized eight chapters and {len(assets)} assets. Source SHA256: {hashlib.sha256(source.read_bytes()).hexdigest()}')
