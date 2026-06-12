function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "This platform completely changed how our team works.",
    },
    {
      name: "Michael Chen",
      text: "We automated 70% of our workflows in weeks.",
    },
    {
      name: "Emma Williams",
      text: "The best AI product we've ever used.",
    },
  ];

  return (
    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-purple-400 mb-4">
          Testimonials
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          LOVED BY
          <br />
          THOUSANDS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="text-yellow-400 mb-4">
                ★★★★★
              </div>

              <p className="text-zinc-300 mb-6">
                "{review.text}"
              </p>

              <p className="font-bold">
                {review.name}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;