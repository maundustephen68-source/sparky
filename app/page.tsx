import BookingForm from "@/components/BookingForm";
import Faq from "@/components/Faq";
import Image from "next/image";
import { BRAND, HERO_IMAGE, HOSTELS, REVIEWS, SERVICES, STEPS, WHY, waLink } from "@/lib/data";

const Heading = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <div className="mb-10 text-center"><p className="eyebrow">{eyebrow}</p><h2 className="mt-2 text-3xl font-extrabold text-navy">{title}</h2>{sub && <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">{sub}</p>}</div>
);

export default function Home() {
  const hello = waLink("Hello Bubble Busters, I'd like to book a pickup.");
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="text-lg font-extrabold text-navy">🫧 {BRAND.name}</a>
          <div className="hidden gap-6 text-sm font-medium md:flex">
            {[["How it works", "#how"], ["Rates", "#rates"], ["Coverage", "#coverage"], ["FAQ", "#faq"]].map(([l, h]) => <a key={h} href={h} className="hover:text-navy">{l}</a>)}
          </div>
          <a href="#book" className="btn bg-sun text-navy">Book Pickup</a>
        </nav>
      </header>

      <main>
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Comrade, skip the washing. <span className="text-sun">We come to your hostel.</span></h1>
              <p className="mt-4 max-w-md text-slate-200">Professional washing, drying, folding and ironing, picked up and delivered at your hostel door. Pay only after delivery.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                
                <a href="#book" className="btn bg-sun text-navy">Book a pickup</a>
                <a
                 href={hello}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn border border-white/40 text-white hover:border-wa hover:bg-wa hover:text-white"
>
                 Chat on WhatsApp
               </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-4 text-xs text-slate-200"><li>✓ Pay on delivery</li><li>✓ Overnight option</li><li>✓ Student prices</li></ul>
            </div>

            {HERO_IMAGE.src ? (
  <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-2xl">
    <Image src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} fill priority unoptimized
      sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
  </div>
) : (
  <div className="rounded-2xl bg-white/10 p-8 text-center text-7xl shadow-2xl">🧺<p className="mt-3 text-sm text-slate-200">Clean clothes, zero effort</p></div>
)}
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-4 py-16">
          <Heading eyebrow="Simple process" title="How It Works in 4 Steps" sub="No queues, no carrying heavy bags." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (<div key={s.n} className="rounded-2xl border bg-white p-5 shadow-sm"><span className="text-3xl font-extrabold text-sky-200">{s.n}</span><h3 className="mt-2 font-bold text-navy">{s.t}</h3><p className="mt-1 text-sm text-slate-500">{s.d}</p></div>))}
          </div>
        </section>

        <section id="rates" className="bg-mint py-16">
          <div className="mx-auto max-w-6xl px-4">
            <Heading eyebrow="Transparent pricing" title="Services & Comrade Rates" sub="Prices are estimates; the final amount is confirmed at pickup." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <div key={s.id} className="flex flex-col rounded-2xl border bg-white p-5 shadow-sm">
                  <span className="w-fit rounded-full bg-sun/30 px-2 py-0.5 text-[10px] font-bold uppercase text-navy">{s.badge}</span>
                  <h3 className="mt-3 font-bold text-navy">{s.name}</h3>
                  <p className="mt-1 text-3xl font-extrabold text-navy">{s.priceLabel}<span className="ml-1 text-xs font-medium text-slate-500">{s.sub}</span></p>
                  <ul className="my-4 flex-1 space-y-1 text-sm text-slate-600">{s.perks.map((p) => <li key={p}>✓ {p}</li>)}</ul>
                  <a href="#book" className="btn border border-navy text-navy">{s.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="bg-navy py-16">
          <div className="px-4"><div className="mb-8 text-center text-white"><p className="eyebrow !text-sun">Ready when you are</p><h2 className="mt-2 text-3xl font-extrabold">Book Your Hostel Pickup</h2><p className="mt-2 text-sm text-slate-200">It takes under a minute. Your order opens straight in WhatsApp.</p></div><BookingForm /></div>
        </section>

        <section id="coverage" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Where we pick up</p><h2 className="mt-2 text-3xl font-extrabold text-navy">Hostel Coverage in Meru &amp; Nchiru</h2>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">{HOSTELS.slice(0, 5).map((h) => <li key={h} className="rounded-lg border bg-white p-3">📍 {h}</li>)}</ul>
            <p className="mt-3 text-xs text-slate-500">Don&apos;t see yours? Message us and we&apos;ll confirm.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="font-bold text-navy">Operating Hours</h3>
            <dl className="mt-4 divide-y text-sm">{[["Monday – Friday", "7:00 AM – 8:00 PM"], ["Saturday", "8:00 AM – 6:00 PM"], ["Sunday", "10:00 AM – 4:00 PM"]].map(([d, t]) => <div key={d} className="flex justify-between py-2"><dt>{d}</dt><dd className="font-semibold text-navy">{t}</dd></div>)}</dl>
            <a href={hello} className="btn mt-4 w-full bg-wa text-white">Chat on WhatsApp</a>
          </div>
        </section>

        <section className="bg-mint py-16"><div className="mx-auto max-w-6xl px-4">
          <Heading eyebrow="Why comrades choose us" title="Why Comrades Choose Us" />
          <div className="grid gap-4 sm:grid-cols-2">{WHY.map((w) => <div key={w.t} className="rounded-2xl border bg-white p-5"><h3 className="font-bold text-navy">{w.t}</h3><p className="mt-1 text-sm text-slate-500">{w.d}</p></div>)}</div>
        </div></section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <Heading eyebrow="Word on campus" title="What Fellow Students Say" />
          <div className="grid gap-4 md:grid-cols-3">{REVIEWS.map((r) => <figure key={r.name} className="rounded-2xl border bg-white p-5 shadow-sm"><div className="text-sun">★★★★★</div><blockquote className="mt-2 text-sm text-slate-600">&ldquo;{r.text}&rdquo;</blockquote><figcaption className="mt-3 text-xs font-bold text-navy">{r.name}, {r.hostel}</figcaption></figure>)}</div>
        </section>

        <section id="faq" className="bg-mint px-4 py-16"><Heading eyebrow="Got questions?" title="Frequently Asked Questions" /><Faq /></section>
      </main>

      <footer className="bg-[#082B57] text-sm text-slate-200">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div><p className="text-lg font-extrabold text-white">🫧 {BRAND.name}</p><p className="mt-2 text-xs">Hostel laundry pickup and delivery for students.</p></div>
          <div><p className="font-bold text-sun">Quick Links</p><ul className="mt-2 space-y-1"><li><a href="#how">How it works</a></li><li><a href="#rates">Rates</a></li><li><a href="#faq">FAQ</a></li></ul></div>
          <div><p className="font-bold text-sun">Contact</p><p className="mt-2">{BRAND.phone}<br />{BRAND.email}</p></div>
        </div>
        <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
      </footer>

      <a
  href={hello}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-wa p-3.5 text-white shadow-lg transition hover:scale-105 sm:px-5 sm:py-3"
  style={{ marginBottom: "env(safe-area-inset-bottom)" }}
>
  <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-wa opacity-40" />
  <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
    <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.4.7 4.6 1.9 6.5L3 29l7.2-1.9c1.8 1 3.800 1.500 5.800 1.500 7 0 12.700-5.600 12.700-12.500S23 3 16 3zm0 22.800c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-4.300 1.100 1.200-4.100-.3-.4a10.200 10.200 0 0 1-1.600-5.400C5.500 9.900 10.200 5.300 16 5.300s10.500 4.600 10.500 10.200S21.800 25.800 16 25.800zm5.700-7.600c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200-.2.300-.8 1-1 1.200-.2.200-.4.200-.7.100-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.200-.2-.3 0-.5.100-.7l.5-.5c.2-.2.200-.3.300-.5.100-.2.100-.4 0-.5-.1-.2-.7-1.700-1-2.300-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.2.200 2.100 3.300 5.200 4.500 3 1.200 3 .8 3.600.8.600-.1 1.900-.8 2.200-1.500.3-.7.3-1.400.2-1.500-.1-.2-.3-.2-.6-.4z"/>
  </svg>
  <span className="hidden text-sm font-bold sm:inline">Chat with us</span>

   </a>
   
</>
  );
}
