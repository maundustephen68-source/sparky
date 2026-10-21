"use client";
import { useMemo, useState } from "react";
import { HOSTELS, SERVICES, SLOTS, waLink } from "@/lib/data";

export default function BookingForm() {
  const [f, setF] = useState({ name: "", phone: "", hostel: HOSTELS[0], room: "", service: SERVICES[0].id as string, qty: 5, slot: SLOTS[0], notes: "" });
  const [err, setErr] = useState("");
  const set = (k: string, v: string | number) => setF((p) => ({ ...p, [k]: v }));
  const svc = SERVICES.find((s) => s.id === f.service)!;
  const total = useMemo(() => svc.price * (Number(f.qty) || 0), [svc, f.qty]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name.trim() || !/^(\+?254|0)\d{9}$/.test(f.phone.replace(/\s/g, ""))) {
      setErr("Please enter your name and a valid Kenyan phone number.");
      return;
    }
    setErr("");
    const msg = `Hello Bubble Busters! New pickup request:\n*Name:* ${f.name}\n*Phone:* ${f.phone}\n*Hostel:* ${f.hostel}, Room ${f.room || "-"}\n*Service:* ${svc.name}\n*Qty:* ${f.qty} ${svc.unit}\n*Pickup:* ${f.slot}\n*Estimate:* KES ${total}\n*Notes:* ${f.notes || "-"}`;
    window.open(waLink(msg), "_blank");
  }

  return (
    <form onSubmit={submit} className="mx-auto grid max-w-3xl gap-4 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2">
      <label className="text-sm font-medium">Full name<input className="field mt-1" value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Jane Wanjiru" /></label>
      <label className="text-sm font-medium">Phone (WhatsApp)<input className="field mt-1" inputMode="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} placeholder="07XX XXX XXX" /></label>
      <label className="text-sm font-medium">Hostel<select className="field mt-1" value={f.hostel} onChange={(e) => set("hostel", e.target.value)}>{HOSTELS.map((h) => <option key={h}>{h}</option>)}</select></label>
      <label className="text-sm font-medium">Room / block<input className="field mt-1" value={f.room} onChange={(e) => set("room", e.target.value)} placeholder="e.g. Block B, Room 12" /></label>
      <label className="text-sm font-medium">Service<select className="field mt-1" value={f.service} onChange={(e) => set("service", e.target.value)}>{SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
      <label className="text-sm font-medium">Estimated {svc.unit === "kg" ? "weight (kg)" : svc.unit === "pc" ? "pieces" : "bags"}<input type="number" min={1} className="field mt-1" value={f.qty} onChange={(e) => set("qty", Number(e.target.value))} /></label>
      <label className="text-sm font-medium sm:col-span-2">Pickup time<select className="field mt-1" value={f.slot} onChange={(e) => set("slot", e.target.value)}>{SLOTS.map((s) => <option key={s}>{s}</option>)}</select></label>
      <label className="text-sm font-medium sm:col-span-2">Special instructions (optional)<textarea className="field mt-1" rows={2} value={f.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Delicates, stains, gate code…" /></label>
      <div className="flex items-center justify-between rounded-xl bg-mint p-4 sm:col-span-2">
        <span className="text-sm text-slate-600">Estimated total<br /><small>Pay after delivery</small></span>
        <span className="text-3xl font-extrabold text-navy">KES {total.toLocaleString()}</span>
      </div>
      {err && <p role="alert" className="text-sm text-red-600 sm:col-span-2">{err}</p>}
      <button className="btn bg-wa text-white sm:col-span-2" type="submit">Send Order on WhatsApp</button>
    </form>
  );
}
