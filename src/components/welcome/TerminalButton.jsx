import { Icon } from "../Icon.jsx";

export function TerminalButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 cinematic-load">
      <button aria-label="Abrir Terminal" className="size-14 bg-[#121212] border border-[#8a0012]/50 flex items-center justify-center hover:bg-[#ff3d4d] group transition-all neon-glow">
        <Icon name="terminal" className="text-[#ff3d4d] group-hover:text-white transition-colors text-2xl" />
      </button>
    </div>
  );
}
