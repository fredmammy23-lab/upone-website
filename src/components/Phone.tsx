import type { ReactNode } from "react";

export function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19.5] rounded-[2.6rem] bg-[#151413] p-[0.55rem] shadow-[0_40px_80px_-30px_rgba(31,29,27,0.45)] ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[2.1rem] bg-white">
        <div className="absolute top-2.5 left-1/2 z-10 h-[1.35rem] w-[34%] -translate-x-1/2 rounded-full bg-[#151413]" />
        {children}
      </div>
    </div>
  );
}

// SaySo: a speaking-practice screen for the language learning app.
export function SaySoScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#f4f0ff] to-white px-4 pt-12 pb-5 text-ink">
      <div className="flex items-center justify-between text-[0.6rem] font-semibold text-muted">
        <span>SaySo</span>
        <span className="rounded-full bg-white px-2 py-0.5 shadow-sm">Day 12</span>
      </div>
      <p className="mt-5 text-[0.62rem] font-semibold tracking-wide text-[#7a6be0] uppercase">Say it out loud</p>
      <div className="mt-2 rounded-2xl bg-white p-3 shadow-[0_8px_24px_-12px_rgba(122,107,224,0.45)]">
        <p className="font-serif text-[1.15rem] leading-tight">¿Dónde está la estación?</p>
        <p className="mt-1.5 text-[0.6rem] text-muted">Where is the station?</p>
      </div>
      <div className="mt-3 flex gap-1">
        {[1, 1, 1, 0.35, 0.35].map((o, i) => (
          <span key={i} className="h-1 flex-1 rounded-full bg-[#7a6be0]" style={{ opacity: o }} />
        ))}
      </div>
      <div className="mt-auto flex flex-col items-center">
        <span className="grid size-14 place-items-center rounded-full bg-coral shadow-[0_10px_24px_-8px_rgba(241,154,128,0.9)]">
          <svg viewBox="0 0 24 24" className="size-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
          </svg>
        </span>
        <span className="mt-2 text-[0.58rem] text-muted">Tap and speak</span>
      </div>
    </div>
  );
}

// SpotCue: kept abstract until its real screens are ready.
export function SpotCueScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#fff4ec] to-white px-4 pt-12 pb-5">
      <div className="flex items-center justify-between text-[0.6rem] font-semibold text-muted">
        <span>SpotCue</span>
        <span className="size-5 rounded-full bg-peach" />
      </div>
      <p className="mt-5 font-serif text-[1.15rem] leading-tight text-ink">Good morning</p>
      <div className="mt-3 space-y-2">
        {["bg-coral", "bg-butter", "bg-cornflower"].map((c, i) => (
          <div key={c} className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-[0_6px_18px_-10px_rgba(31,29,27,0.35)]">
            <span className={`size-7 shrink-0 rounded-lg ${c}`} />
            <span className="flex-1 space-y-1">
              <span className="block h-1.5 w-[70%] rounded-full bg-ink/80" />
              <span className="block h-1.5 rounded-full bg-ink/15" style={{ width: `${55 - i * 10}%` }} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto h-20 rounded-2xl bg-gradient-to-br from-butter/70 to-peach/70" />
    </div>
  );
}
