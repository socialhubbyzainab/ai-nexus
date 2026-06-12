function Pricing() {
  return (
    <section className="bg-zinc-950 text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-purple-400 mb-4">
          Pricing
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          SIMPLE
          <br />
          PRICING
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-white/10 p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">
              Starter
            </h3>

            <p className="text-5xl font-black mb-6">
              $19
            </p>

            <p className="text-zinc-400">
              Perfect for individuals.
            </p>
          </div>

          <div className="bg-purple-600 rounded-3xl p-10 scale-105">
            <h3 className="text-3xl font-bold mb-4">
              Pro
            </h3>

            <p className="text-5xl font-black mb-6">
              $49
            </p>

            <p>
              Best for growing teams.
            </p>
          </div>

          <div className="border border-white/10 p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">
              Enterprise
            </h3>

            <p className="text-5xl font-black mb-6">
              Custom
            </p>

            <p className="text-zinc-400">
              Tailored AI solutions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Pricing;