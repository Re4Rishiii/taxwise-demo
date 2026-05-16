import { motion } from "framer-motion";

export default function AboutSection() {
  return (

    <section id="about" className="bg-[#0d0d0d] text-white px-6 md:px-12 py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* SMALL LABEL */}
        <motion.p

          initial={{
            opacity: 0,
            y: 40,
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

          className="uppercase tracking-[4px] text-white/40 text-sm mb-8"
        >

          About

        </motion.p>

        {/* MAIN HEADING */}
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
        "
        >

          We simplify legal processes with modern technology and trusted legal expertise.

        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p

          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
            duration: 1,
          }}

          viewport={{
            once: true,
          }}

          className="text-white/60 text-lg md:text-xl leading-relaxed mt-12 max-w-3xl"
        >

          Our legal team combines years of expertise with modern communication
          and transparent workflows to deliver exceptional legal services
          for individuals, startups and enterprises.

        </motion.p>

      </div>

    </section>

  );
}