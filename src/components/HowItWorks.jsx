function Step({ index, title, text }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white font-bold shadow shadow-emerald-500/30">
          {index}
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-white/70 text-sm mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-white/70">
            Installs in minutes. Removes without residue. Designed for daily driving and weekend track days.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step index={1} title="Measure & Clean" text="Wipe glass with the included prep wipe. Use our size guide to select your fit." />
          <Step index={2} title="Peel & Place" text="Line up the tint film and smooth with the squeegee—no water, no soap, no bubbles." />
          <Step index={3} title="Peel Off Anytime" text="Need to remove? Lift a corner and peel—no residue, no damage to glass or defrosters." />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
