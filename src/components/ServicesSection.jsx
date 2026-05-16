import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Corporate Law",
    desc: "Professional legal solutions for startups and enterprises.",
  },

  {
    number: "02",
    title: "Family Law",
    desc: "Trusted guidance for sensitive family legal matters.",
  },

  {
    number: "03",
    title: "Property Law",
    desc: "Secure legal support for property and real estate matters.",
  },

  {
    number: "04",
    title: "Criminal Defense",
    desc: "Strong legal representation and defense strategies.",
  },
];

/* ===================================== */
/* ANIMATION VARIANTS */
/* ===================================== */

const container = {

  hidden: {},

  show: {

    transition: {
      staggerChildren: 0.15,
    },

  },

};

const item = {

  hidden: {
    opacity: 0,
    y: 80,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },

};

export default function ServicesSection() {
  return (

    <section id="services" className="bg-black text-white px-6 md:px-12 py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* LABEL */}
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
            amount: 0.3,
          }}

          className="uppercase tracking-[4px] text-white/40 text-sm mb-8"
        >

          Services

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
            amount: 0.3,
          }}

          className="
          text-5xl
          md:text-7xl

          font-semibold
          tracking-[-4px]
          leading-[0.95]

          max-w-5xl
          mb-20
        "
        >

          Premium Legal Services Designed For Modern Clients.

        </motion.h2>

        {/* ANIMATED GRID */}
        <motion.div

          variants={container}

          initial="hidden"

          whileInView="show"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >

          {services.map((service, index) => (

            <motion.div

              key={index}

              variants={item}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              className="
              border border-white/10
              bg-white/5
              backdrop-blur-xl

              rounded-[32px]

              p-8

              transition-all
              duration-300
            "
            >

              {/* NUMBER */}
              <div className="text-6xl font-semibold text-white/20 mb-10">

                {service.number}

              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-semibold tracking-[-2px] mb-5">

                {service.title}

              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/60 leading-relaxed">

                {service.desc}

              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );
}