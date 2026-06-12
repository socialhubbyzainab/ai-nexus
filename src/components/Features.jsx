import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      title: "AI Assistant",
      desc: "Generate content, answer questions and automate tasks instantly.",
      icon: "🤖",
    },
    {
      title: "Smart Analytics",
      desc: "Track performance with powerful AI-driven insights.",
      icon: "📊",
    },
    {
      title: "Workflow Automation",
      desc: "Connect tools and eliminate repetitive work.",
      icon: "⚡",
    },
    {
      title: "Document Intelligence",
      desc: "Upload files and let AI extract key information.",
      icon: "📄",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-purple-400 mb-4">
          Features
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          EVERYTHING YOU
          <br />
          NEED IN ONE PLACE
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10"
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-zinc-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;