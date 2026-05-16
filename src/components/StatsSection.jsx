import CountUp from "react-countup";

export default function StatsSection() {

  const stats = [
    {
      number: 520,
      suffix: "+",
      label: "Cases Solved",
    },

    {
      number: 98,
      suffix: "%",
      label: "Success Rate",
    },

    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
    },

    {
      number: 240,
      suffix: "+",
      label: "Trusted Clients",
    },
  ];

  return (

    <section className="bg-white text-black px-6 md:px-12 py-32">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-black/40 text-sm mb-8">

          Achievements

        </p>

        <h2 className="text-5xl md:text-7xl font-semibold tracking-[-4px] leading-[0.95] max-w-5xl mb-24">

          Results That Build Trust And Confidence.

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-[#f5f1ea] rounded-[32px] p-10 shadow-xl"
            >

              <h3 className="text-6xl md:text-7xl font-semibold tracking-[-4px] mb-5">

                <CountUp
                  end={stat.number}
                  duration={3}
                />

                {stat.suffix}

              </h3>

              <p className="text-black/60 text-lg">

                {stat.label}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}