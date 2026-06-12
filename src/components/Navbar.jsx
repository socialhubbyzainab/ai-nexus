function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          AI NEXUS
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          <li className="hover:text-purple-400 transition">Features</li>
          <li className="hover:text-purple-400 transition">Pricing</li>
          <li className="hover:text-purple-400 transition">Contact</li>
        </ul>

        <button className="bg-purple-600 px-5 py-2 rounded-full text-white hover:scale-105 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;