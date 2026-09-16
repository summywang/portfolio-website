# 從內容案例到專案網站

本文件是網站 AI 的實作入口。內容的唯一編輯來源仍是 `portfolio-content/projects/<project>/案例.md`；事實、素材來源與可主張界線在同目錄的 `專案筆記.md`。網站資料檔只是對外內容的呈現映射，不在網站另寫一份案例草稿。

## 接手順序

1. 讀兩個 repositories 的 AGENTS、內容庫 README 與 Git 規範，檢查各自 Git 狀態後同步 main。兩庫保持 Private。
2. 讀內容庫的 `案例章節架構.md`、目標 `案例.md` 及筆記中的狀態、事實／來源、素材與缺口。內容未完稿時只能製作標明用途的預覽；不能把待辦或虛構情節發布成真實經歷。
3. 讀本站 `src/data/schema.ts`、`src/components/CaseStudy.tsx` 和相關元件。把確認好的內容映射到 schema；不要要求內容作者另做 JSON，也不要先複製 Pixel 的事實。
4. 在 `src/data/cases/<slug>.ts` 建立一份 `CaseStudyData`，並在 `src/data/registry.ts` 註冊。入口卡片與 `#/<slug>` 路由會自動產生。未知路由顯示找不到案例，不回退成 Pixel。
5. 將授權且已確認的網頁素材放 `public/assets/projects/<slug>/`，在既有 `docs/asset-manifest.json` 登記來源、原內容路徑、使用章節與授權／確認狀態。原始大檔留在內容庫的素材工作流程，不為網站搬入所有素材。缺檔時回報，不能沿用 Pixel 檔案冒充。
6. 執行 typecheck、test:content、build、test:sites，開啟本機預覽；確認桌機／手機、明暗模式、媒體與鍵盤操作。檢查差異與來源，commit、push。公開發布或部署另依使用者授權處理。

## 八章映射

| 內容章節 | Schema 欄位 | 呈現 |
|---|---|---|
| Hero | `hero` | 固定標題、副標、選配產品狀態與主媒體 |
| Fast Context | `snapshot` | 固定摘要與 Product／My role／Timeline／Focus／Team；之後按需加 context |
| Problem Framing | `problem` | 引言＋pain points |
| Strategic Direction | `strategy` | insight 如何形成解題原則與優先順序 |
| Key Decisions | `decisions` | 可重複的決策模組，各自說清 tension、choice、reasoning、tradeoff |
| Real Product Experience | `experience` | 有順序的步驟／狀態；不重述決策理由 |
| Impact | `impact` | 證據類型、來源、限制；意圖不當成成果 |
| Reflection | `reflection` | 作者確認的學習、未解問題、取捨 |

Hero／Snapshot 的版式固定，後續篇幅、決策數量、圖片／影片配置可隨內容調整。Section label 交代職責，title 寫該專案的 action title。Focus 用 2–5 個可支持的領域／能力短 tag；自動柔色配色固定由標籤文字決定，避免重繪時閃動。

三個中段的重點與反例以內容庫 `案例章節架構.md` 為準，不在這裡複製第二套寫作規則。方向章可很短；決策章承載推理；體驗章承載操作序列。

## Schema 使用方式

每個第三至八章欄位都必須明確提供其中一種：

```ts
strategy: { content: { title: '...', paragraphs: ['...'] } },
// 或：省略原因是內部實作資料，不渲染在讀者頁面
reflection: { omitted: '作者尚未確認反思；目前只供預覽' },
```

這是處理缺漏的能力，不代表可以任意刪除八章功能。判斷是否可省略、是否完成仍依內容工作流程。Snapshot 欄位未知時不填，不寫假時程／團隊；固定欄位位置不等於必須有值。媒體與 links 是選配，空陣列不會留下空框。舊 `?lang=en` 不是翻譯功能；語言來自案例的 `language`，不要生成未授權的雙語副本。

每個 Decision 必須有獨立 id、title、tension、choice、reasoning；alternatives、tradeoff、evidence 與 media 按來源選用。不存在的 alternatives 或研究不補寫。Evidence 的 kind：

- `design-intent`：設計意圖，不能聲稱已驗證。
- `observation`／`feedback`：觀察與質性回饋，標明範圍。
- `shipped`：落地資訊，不等於成效或個人歸因。
- `measured`：有依據的量化成效；正文須保留樣本、期間、口徑等必要界線。

`source` 是可公開的來源說明，不能放內部筆記、研究者個資或秘密資料。詳細來源映射留在內容庫筆記。模擬或參考案例須使用對應 `provenance.kind` 並提供可見 notice。正式案例的角色與結果必須重新從該專案來源填入。

## 媒體

```ts
{ type: 'image', src: '/assets/projects/my-project/flow.webp', alt: '有意義的畫面描述', caption: '圖說' }
{ type: 'video', src: '/assets/projects/my-project/interaction.mp4', alt: '操作與狀態描述', poster: '/assets/projects/my-project/poster.webp', caption: '圖說' }
{ type: 'youtube', id: '已確認的影片 ID', alt: '影片名稱', start: 0, caption: '用途' }
```

- 本機圖片／影片路徑必須對到 `public/`；不用私人雲端檔案路徑。外部連結必須可存取並有使用權。
- 以 `fit: 'contain'` 為預設，避免裁掉 UI。必要時指定 `cover` 或 scale 並檢查小螢幕。裁切不能隱去理解所需狀態。
- 短影片繼續隨網站保存。大型、長影片依 Git 規範先評估；不自動換 Vimeo。
- 影片可設 poster、文字圖說與替代敘述。現有 ManagedVideo 適用靜音 UI 循環；需要旁白／字幕的影片須先擴充有聲播放器與 caption track，不直接套用靜音展示元件。
- StepCarousel 接收任何步驟數量，含無媒體文字步驟。每步的 media caption 由輪播在畫面下呈現；不要把唯一的重要資訊寫在圖片裡。
- 原 `scripts/import-source-assets.mjs` 是參考來源的一次性匯入腳本，含舊資產 ID；新增專案不要執行它。

## 驗收與交付

只提供 `案例.md` 的文字還不足以產生有素材的完整網站：接手 AI 需要相對路徑可用的 assets、讀取筆記的權限，以及此網站 repository。素材不齊可做無素材預覽，但須回報缺口。

交付時列出來源案例、新增路由、修改檔案、缺漏與檢查結果。用另一組內容數量或測試 fixture 驗證模板，不把測試假資料註冊成公開作品。不要更改八章敘事來配合舊模板，缺呈現能力時擴充共用元件。

目前 Pixel 範例使用內容庫已標示的模擬情節，與網站既有的第三方參考媒體一起示範八章。素材來源記在 manifest，但來源紀錄不代表已取得公開再使用授權；正式發布前需確認。它不代表真實案例已完成 Discovery。
