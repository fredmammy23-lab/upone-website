// Craft-style hero ambience: soft clouds and torn-paper strips.

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

// A strip of paper whose top edge is torn (jagged), filling to the bottom of its box.
function tornPath(width: number, height: number, seed: number, roughness = 14) {
  const rand = seeded(seed);
  const points: string[] = [`M0 ${height}`, `L0 ${roughness}`];
  for (let x = 0; x <= width; x += 9 + rand() * 10) {
    points.push(`L${x.toFixed(1)} ${(rand() * roughness).toFixed(1)}`);
  }
  points.push(`L${width} ${roughness / 2}`, `L${width} ${height}`, "Z");
  return points.join(" ");
}

export function TornPaper({
  color,
  seed,
  className = "",
  lines = false,
}: {
  color: string;
  seed: number;
  className?: string;
  lines?: boolean;
}) {
  const w = 600;
  const h = 260;
  const id = `lines-${seed}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className} aria-hidden="true">
      {lines && (
        <defs>
          <pattern id={id} width="600" height="22" patternUnits="userSpaceOnUse">
            <line x1="0" y1="21" x2="600" y2="21" stroke="rgba(31,29,27,0.12)" strokeWidth="1.2" />
          </pattern>
        </defs>
      )}
      <path d={tornPath(w, h, seed)} fill={color} />
      {lines && <path d={tornPath(w, h, seed)} fill={`url(#${id})`} />}
    </svg>
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 130" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cloud-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#edf4fc" />
        </linearGradient>
      </defs>
      <g fill="url(#cloud-shade)">
        <circle cx="62" cy="80" r="34" />
        <circle cx="108" cy="56" r="44" />
        <circle cx="160" cy="68" r="38" />
        <circle cx="196" cy="88" r="26" />
        <rect x="30" y="78" width="190" height="40" rx="20" />
      </g>
    </svg>
  );
}
