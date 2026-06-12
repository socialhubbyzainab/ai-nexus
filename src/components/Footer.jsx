function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl md:text-7xl font-black mb-10">
          AI NEXUS
        </h2>

        <p className="text-zinc-400 max-w-xl mb-16">
          Transforming productivity with the power of artificial intelligence.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-bold mb-4">
              Product
            </h3>

            <p className="text-zinc-400">Features</p>
            <p className="text-zinc-400">Pricing</p>
            <p className="text-zinc-400">API</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Company
            </h3>

            <p className="text-zinc-400">About</p>
            <p className="text-zinc-400">Careers</p>
            <p className="text-zinc-400">Contact</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Social
            </h3>

            <p className="text-zinc-400">LinkedIn</p>
            <p className="text-zinc-400">Twitter</p>
            <p className="text-zinc-400">YouTube</p>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-zinc-500">
          © 2026 AI NEXUS. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;