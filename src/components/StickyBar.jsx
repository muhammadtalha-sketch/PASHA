import { stickyBar } from "../data/content";

export default function StickyBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-ink px-4 py-2 text-center text-[12.5px] text-paper/80">
      <span className="font-medium text-paper">{stickyBar.polling}</span>
      <span className="hidden text-paper/30 sm:inline">·</span>
      <span>{stickyBar.requirement}</span>
    </div>
  );
}
