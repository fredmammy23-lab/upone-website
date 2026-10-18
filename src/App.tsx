import { AppBelt } from "./components/AppBelt";
import { Cloud, TornPaper } from "./components/Decor";
import { Phone, SaySoScreen, SpotCueScreen } from "./components/Phone";
import { useReveal } from "./useReveal";

const EMAIL = "hello@uponesoftware.com";
const COMPANY = "upONE Software LLC";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif tracking-tight ${className}`}>
      up<span className="italic">ONE</span>
      <span className="ml-1.5 font-sans text-[0.55em] font-medium tracking-normal text-muted">Software</span>
    </span>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border border-white/70 bg-white/75 py-2 pr-2 pl-5 shadow-[0_10px_30px_-18px_rgba(31,29,27,0.35)] backdrop-blur-xl"
      >
        <a href="#top" className="flex min-h-11 items-center text-2xl" aria-label={`${COMPANY} home`}>
          <Wordmark />
        </a>
        <div className="flex items-center gap-1">
          <a href="#apps" className="hidden min-h-11 items-center rounded-full px-4 text-sm text-muted hover:text-ink sm:inline-flex">Apps</a>
          <a href="#about" className="hidden min-h-11 items-center rounded-full px-4 text-sm text-muted hover:text-ink sm:inline-flex">About</a>
          <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-white hover:bg-black">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-b from-sky-top to-sky-bottom sm:rounded-[2.5rem]">
        <Cloud className="animate-drift absolute top-20 -left-14 w-36 opacity-90 sm:top-24 sm:-left-10 sm:w-80" />
        <Cloud className="animate-drift-slow absolute top-[50%] -right-12 w-40 opacity-80 sm:top-40 sm:-right-16 sm:w-96" />
        <Cloud className="animate-drift absolute top-[46%] left-[38%] hidden w-40 opacity-60 md:block" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-36 text-center sm:pt-44">
          <h1 className="animate-fade-up font-serif text-[2.9rem] leading-[1.02] tracking-tight text-balance sm:text-7xl">
            Thoughtful apps for <span className="italic">everyday</span> life.
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg text-ink/70 text-pretty [animation-delay:120ms]">
            {COMPANY} is an independent studio designing simple, beautiful apps for iPhone.
          </p>
          <div className="animate-fade-up mt-9 flex flex-col justify-center gap-3 sm:flex-row [animation-delay:220ms]">
            <a href="#apps" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 font-medium text-white hover:bg-black">
              Explore our apps
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/80 px-7 font-medium text-ink backdrop-blur hover:bg-white">
              Say hello
            </a>
          </div>
        </div>

        <div className="relative mt-10 h-[26rem] sm:mt-20 sm:h-[30rem]">
          <TornPaper color="#bcb1f1" seed={11} className="animate-bob absolute bottom-[38%] -left-[5%] h-48 w-[55%] [animation-delay:-2s]" />
          <TornPaper color="#f6d673" seed={23} lines className="animate-bob absolute right-[-4%] bottom-[30%] h-56 w-[48%] -rotate-3 [animation-delay:-4s]" />
          <TornPaper color="#f19a80" seed={37} className="absolute bottom-[18%] left-[18%] h-40 w-[40%] rotate-2" />
          <TornPaper color="#8ab9ee" seed={51} className="absolute -bottom-2 left-[-2%] h-44 w-[104%]" />

          <div className="absolute inset-x-0 bottom-[-3rem] z-10 flex items-end justify-center gap-4 sm:bottom-[-6rem] sm:gap-8">
            <Phone className="animate-rise w-40 -rotate-6 sm:w-56 [animation-delay:250ms]">
              <SpotCueScreen />
            </Phone>
            <Phone className="animate-rise mb-10 w-44 rotate-3 sm:w-60 [animation-delay:400ms]">
              <SaySoScreen />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}

const apps = [
  {
    name: "SpotCue",
    tagline: "The right cue, right on time.",
    body: "A calm, focused companion that keeps what matters in view, so nothing slips through the cracks.",
    status: "Coming soon to iPhone",
    tint: "from-[#fff1e6] to-[#fde3d6]",
    icon: "from-coral to-butter",
    Screen: SpotCueScreen,
  },
  {
    name: "SaySo",
    tagline: "Learn a language by speaking it.",
    body: "Short, friendly speaking practice that builds real confidence, a few minutes at a time.",
    status: "In development",
    tint: "from-[#f2efff] to-[#e6e1fd]",
    icon: "from-lilac to-cornflower",
    Screen: SaySoScreen,
  },
];

function Apps() {
  return (
    <section id="apps" className="mx-auto max-w-6xl px-5 pt-40 pb-16 sm:pt-48">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-muted uppercase">Our apps</p>
        <h2 className="mt-3 font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          Made with care, one app at a time.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {apps.map(({ name, tagline, body, status, tint, icon, Screen }, i) => (
          <article
            key={name}
            className={`reveal group relative flex flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br ${tint} p-8 sm:p-10`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="flex items-center gap-3">
              <span className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${icon} font-serif text-2xl text-white shadow-sm`}>
                {name[0]}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm text-muted">{status}</p>
              </div>
            </div>
            <p className="mt-6 font-serif text-3xl leading-tight">{tagline}</p>
            <p className="mt-3 max-w-md text-ink/70">{body}</p>
            <div className="relative mt-10 -mb-28 flex justify-center sm:-mb-36">
              <Phone className="w-52 transition-transform duration-700 ease-out group-hover:-translate-y-3 sm:w-60">
                <Screen />
              </Phone>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Workshop() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="workshop-heading">
      <div className="reveal mx-auto max-w-2xl px-5 text-center">
        <h2 id="workshop-heading" className="font-serif text-4xl tracking-tight sm:text-5xl">
          More ideas in the workshop
        </h2>
        <p className="mt-3 text-muted">Early concepts we're exploring. Names are placeholders.</p>
      </div>
      <div className="reveal mt-10">
        <AppBelt />
      </div>
    </section>
  );
}

const values = [
  { title: "Made for iPhone", body: "Native, fast and at home on Apple devices.", color: "bg-cornflower" },
  { title: "Respectful by design", body: "We ask only for what an app truly needs.", color: "bg-coral" },
  { title: "Crafted with care", body: "Small teams, small details, done properly.", color: "bg-butter" },
];

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div className="reveal">
          <p className="text-sm font-medium tracking-wide text-muted uppercase">About us</p>
          <h2 className="mt-3 font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
            A small studio with a simple idea.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-ink/70">
            {COMPANY} designs and builds mobile apps that make everyday things a little easier and a lot more
            pleasant. Every app we ship is focused, thoughtfully made and built to last.
          </p>
        </div>
        <ul className="space-y-4">
          {values.map((v, i) => (
            <li key={v.title} className="reveal flex gap-4 rounded-3xl border border-line bg-white p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className={`mt-1 size-3 shrink-0 rounded-full ${v.color}`} />
              <div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-1 text-muted">{v.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-b from-sky-bottom to-sky-top px-6 py-20 text-center sm:rounded-[2.5rem] sm:py-28">
        <Cloud className="animate-drift absolute -top-6 left-[8%] w-48 opacity-80" />
        <Cloud className="animate-drift-slow absolute right-[6%] bottom-6 w-60 opacity-70" />
        <h2 className="relative font-serif text-5xl tracking-tight sm:text-6xl">Let's talk.</h2>
        <p className="relative mx-auto mt-4 max-w-md text-lg text-ink/70">
          Questions, feedback or partnership ideas — we'd love to hear from you.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="relative mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-7 font-medium text-white hover:bg-black"
        >
          {EMAIL}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <Wordmark className="text-2xl text-ink" />
      <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
      <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center hover:text-ink">
        {EMAIL}
      </a>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Apps />
        <Workshop />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
