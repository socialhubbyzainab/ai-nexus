function Dashboard() {
  return (
    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <p className="uppercase tracking-[8px] text-purple-400 mb-4">
          Dashboard
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          YOUR AI COMMAND
          <br />
          CENTER
        </h2>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black/30 rounded-3xl p-8">
              <p className="text-zinc-400 mb-2">
                Productivity
              </p>

              <h3 className="text-5xl font-black text-green-400 hover:scale-110 transition duration-500">
  +124%
</h3>
            </div>

            <div className="bg-black/30 rounded-3xl p-8">
              <p className="text-zinc-400 mb-2">
                Automation
              </p>

              <h3 className="text-5xl font-black text-purple-400">
                87%
              </h3>
            </div>

            <div className="bg-black/30 rounded-3xl p-8">
              <p className="text-zinc-400 mb-2">
                Active Users
              </p>

              <h3 className="text-5xl font-black">
                50K+
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;