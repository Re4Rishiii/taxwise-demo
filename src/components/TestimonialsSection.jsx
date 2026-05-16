const testimonials = [
  {
    name: "Sarah Johnson",
    review: "The legal team handled my case professionally and made the process stress-free.",
  },
  {
    name: "Michael Brown",
    review: "Fast response times and excellent communication throughout the case.",
  },
  {
    name: "Emily Davis",
    review: "Highly professional and extremely knowledgeable attorneys.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#111111] text-white px-6 md:px-16 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[4px] text-white/50 mb-6">
            Testimonials
          </p>
          <h2 className="text-5xl md:text-7xl tracking-[-4px] leading-[0.95] font-semibold max-w-4xl">
            Trusted By Hundreds Of Clients Nationwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl"
            >
              <p className="text-white/70 leading-relaxed text-lg mb-10">
                “{item.review}”
              </p>
              <h4 className="text-2xl font-semibold tracking-[-1px]">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
