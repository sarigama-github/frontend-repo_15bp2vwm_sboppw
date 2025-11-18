function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-10 text-center backdrop-blur">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Drive cooler. Look sharper. Stay legal.</h3>
          <p className="mt-3 text-white/80">Removable tint you can install yourself today and peel off tomorrow—no shop visit required.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-black font-medium hover:bg-white/90 transition">
              Get Yours Now
            </a>
            <a href="#faq" className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-white/90 ring-1 ring-white/20 hover:bg-white/10 transition">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
