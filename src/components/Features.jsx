function Feature({ title, text, badge }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="inline-flex items-center gap-2 mb-3">
        {badge && (
          <span className="text-[10px] uppercase tracking-wide rounded-full bg-emerald-500/20 text-emerald-300 px-2 py-1 ring-1 ring-emerald-400/30">
            {badge}
          </span>
        )}
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-white/70 text-sm mt-2">{text}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="shop" className="relative bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose your shade</h2>
          <p className="mt-3 text-white/70">From subtle privacy to full stealth mode. All shades are removable and reusable.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature title="70% (Light)" badge="Street-Legal" text="Blocks glare and UV while keeping a near-stock look. Best for front windows in strict regions." />
          <Feature title="35% (Medium)" text="Balanced privacy and visibility. Our most popular daily driver shade." />
          <Feature title="20% (Dark)" text="Stealthy and cool with strong heat rejection. Great for rear windows." />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">
            Add to Cart
          </button>
          <p className="text-white/60 text-sm">30-day easy returns • 2-year warranty</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
