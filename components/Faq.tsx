import { FAQS } from "@/lib/data";
export default function Faq() {
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {FAQS.map((x) => (
        <details key={x.q} className="group rounded-xl border border-slate-200 bg-white p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
            {x.q}<span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="mt-2 text-sm text-slate-600">{x.a}</p>
        </details>
      ))}
    </div>
  );
}
