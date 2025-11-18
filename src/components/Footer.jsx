function Footer() {
  return (
    <footer id="faq" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-white font-semibold">RemoTint</h4>
          <p className="text-white/60 text-sm mt-2">Peel-and-stick window tint engineered for removability and clarity.</p>
        </div>
        <div>
          <h5 className="text-white/90 font-medium">FAQ</h5>
          <ul className="mt-2 space-y-2 text-sm text-white/60">
            <li>Is it legal? Check local laws—70% and 50% are typically compliant.</li>
            <li>Will it bubble? Our dry-apply adhesive is bubble-resistant.</li>
            <li>Can I reuse it? Yes, store on the liner and reapply.</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/90 font-medium">Support</h5>
          <ul className="mt-2 space-y-2 text-sm text-white/60">
            <li>Email: support@remotint.co</li>
            <li>Shipping & Returns</li>
            <li>Warranty</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} RemoTint. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
