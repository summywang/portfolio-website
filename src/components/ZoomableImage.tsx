import { useRef, useState, type PointerEvent } from 'react';

type Point = { x: number; y: number };
type View = Point & { scale: number };

/** Pointer capture keeps pinch and pan continuous when fingers leave the image. */
export function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [view, setView] = useState<View>({ x: 0, y: 0, scale: 1 });
  const current = useRef(view);
  const pointers = useRef(new Map<number, Point>());
  const viewport = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const apply = (next: View) => {
    const box = viewport.current;
    const img = image.current;
    if (!box || !img) return;
    const maxX = Math.max(0, (img.offsetWidth * next.scale - box.clientWidth + 40) / 2);
    const maxY = Math.max(0, (img.offsetHeight * next.scale - box.clientHeight) / 2);
    next.x = Math.max(-maxX, Math.min(maxX, next.x));
    next.y = Math.max(-maxY, Math.min(maxY, next.y));
    current.current = next;
    setView(next);
  };
  const down = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    const previous = pointers.current.get(event.pointerId);
    if (!previous) return;
    const before = [...pointers.current.values()];
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const after = [...pointers.current.values()];
    const v = current.current;
    if (before.length >= 2) {
      const distance = (p: Point[]) => Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      const middle = (p: Point[]) => ({ x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 });
      const oldMid = middle(before), newMid = middle(after);
      const scale = Math.max(1, Math.min(6, v.scale * distance(after) / Math.max(1, distance(before))));
      const factor = scale / v.scale;
      const bounds = event.currentTarget.getBoundingClientRect();
      apply({ scale,
        x: newMid.x - bounds.left - bounds.width / 2 - (oldMid.x - bounds.left - bounds.width / 2 - v.x) * factor,
        y: newMid.y - bounds.top - bounds.height / 2 - (oldMid.y - bounds.top - bounds.height / 2 - v.y) * factor });
    } else apply({ ...v, x: v.x + event.clientX - previous.x, y: v.y + event.clientY - previous.y });
  };
  const end = (event: PointerEvent<HTMLDivElement>) => { pointers.current.delete(event.pointerId); };
  return <div ref={viewport} className="image-viewport" onPointerDown={down} onPointerMove={move}
    onPointerUp={end} onPointerCancel={end} onLostPointerCapture={end}
    onDoubleClick={() => apply({ x: 0, y: 0, scale: current.current.scale === 1 ? 2 : 1 })}>
    <img ref={image} src={src} alt={alt} draggable={false}
      style={{ transform: `translateY(-50%) translate(${view.x}px, ${view.y}px) scale(${view.scale})` }} />
  </div>;
}
