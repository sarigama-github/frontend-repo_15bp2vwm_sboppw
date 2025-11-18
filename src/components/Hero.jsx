import Spline from '@splinetool/react-spline';

function Hero({ onScrollToHow }) {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-black">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex min-h-[85vh] items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            In-stock • Free shipping over $50
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Removable Car Window Tint
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            Peel-and-stick tint that installs in minutes, peels off clean, and keeps your ride cool and private. No tools, no mess, 100% removable.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">
              Shop Now
            </a>
            <button onClick={onScrollToHow} className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white/90 ring-1 ring-white/20 hover:bg-white/10 transition">
              See How It Works
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <div>UV Block: up to 99%</div>
            <div>Heat Rejection: up to 60%</div>
            <div>Street Legal Options</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
