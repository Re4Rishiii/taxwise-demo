import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "We understand your legal situation and define the best strategy.",
  },

  {
    number: "02",
    title: "Case Analysis",
    desc: "Our legal experts deeply analyze every detail and evidence.",
  },

  {
    number: "03",
    title: "Legal Execution",
    desc: "We execute a strong and transparent legal process for clients.",
  },
];

export default function ProcessSection() {
  return (

    <section className="bg-[#f4f1ea] text-black px-6 md:px-12 py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* LABEL */}
        <motion.p

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="uppercase tracking-[4px] text-black/40 text-sm mb-8"
        >

          Our Process

        </motion.p>

        {/* TITLE */}
        <motion.h2

          initial={{
            opacity: 0,
            y: 100,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{
            once: true,
          }}

          className="
          text-5xl
          md:text-7xl

          font-semibold
          tracking-[-4px]
          leading-[0.95]

          max-w-5xl
          mb-24
        "
        >

          A Clear And Modern Approach To Legal Solutions.

        </motion.h2>

        {/* PROCESS CARDS */}
        <div className="space-y-8">

          {steps.map((step, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                scale: 1.01,
              }}

              className="
              bg-white
              rounded-[36px]

              p-8 md:p-12

              flex flex-col md:flex-row
              gap-10

              justify-between
              items-start md:items-center

              shadow-xl
            "
            >

              {/* LEFT */}
              <div className="flex items-start gap-8">

                {/* NUMBER */}
                <div className="text-6xl md:text-7xl font-semibold text-black/10">

                  {step.number}

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-3xl md:text-4xl font-semibold tracking-[-2px] mb-4">

                    {step.title}

                  </h3>

                  <p className="text-black/60 text-lg leading-relaxed max-w-2xl">

                    {step.desc}

                  </p>

                </div>

              </div>

              {/* ARROW */}
              <div className="text-3xl">
                ↗
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}