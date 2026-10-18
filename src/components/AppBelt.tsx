// Placeholder concepts only: invented names, not real or planned products.
const concepts = [
  { name: "Quillow", glyph: "Q", from: "#f6d673", to: "#f19a80" },
  { name: "Nimbrel", glyph: "N", from: "#bcb1f1", to: "#8ab9ee" },
  { name: "Pebblio", glyph: "P", from: "#f8c9a9", to: "#f3b5c8" },
  { name: "Lumaro", glyph: "L", from: "#8ab9ee", to: "#bcb1f1" },
  { name: "Ferrowly", glyph: "F", from: "#f19a80", to: "#f3b5c8" },
  { name: "Odelio", glyph: "O", from: "#f6d673", to: "#f8c9a9" },
  { name: "Tindrel", glyph: "T", from: "#f3b5c8", to: "#bcb1f1" },
  { name: "Murmio", glyph: "M", from: "#8ab9ee", to: "#f6d673" },
  { name: "Plumora", glyph: "P", from: "#bcb1f1", to: "#f19a80" },
  { name: "Brivolo", glyph: "B", from: "#f8c9a9", to: "#8ab9ee" },
  { name: "Kestrova", glyph: "K", from: "#f19a80", to: "#f6d673" },
  { name: "Sundlet", glyph: "S", from: "#f3b5c8", to: "#f8c9a9" },
];

function Row({ items, reverse = false }: { items: typeof concepts; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="belt-mask overflow-hidden">
      <ul className={`flex w-max gap-4 py-2 ${reverse ? "animate-belt-reverse" : "animate-belt"}`}>
        {loop.map((c, i) => (
          <li
            key={`${c.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 rounded-2xl border border-line bg-white py-2.5 pr-5 pl-2.5 shadow-[0_8px_24px_-18px_rgba(31,29,27,0.4)]"
          >
            <span
              className="grid size-11 place-items-center rounded-xl font-serif text-xl text-white"
              style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}
            >
              {c.glyph}
            </span>
            <span className="text-sm font-medium whitespace-nowrap">{c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AppBelt() {
  return (
    <div className="belt space-y-3">
      <Row items={concepts.slice(0, 6)} />
      <Row items={concepts.slice(6)} reverse />
    </div>
  );
}
