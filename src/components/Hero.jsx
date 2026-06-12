import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/30 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[8px] text-purple-400 mb-6"
        >
          AI Powered Productivity
        </motion.p>

        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-black leading-none bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent"
        >
          THE FUTURE
          <br />
          OF WORK
        </motion.h1>

        <p className="text-zinc-400 mt-8 max-w-xl text-lg">
          Automate workflows, generate insights and
          supercharge productivity with AI.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-purple-600 px-8 py-4 rounded-full">
            Start Free
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full">
            Demo
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;