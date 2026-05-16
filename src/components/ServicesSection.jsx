import { motion } from "framer-motion";

const services = [

  {
    number: "01",
    title: "GST Registration",
    desc: "Complete GST registration assistance for businesses and startups.",
  },

  {
    number: "02",
    title: "ITR Filing",
    desc: "Accurate and hassle-free income tax return filing services.",
  },

  {
    number: "03",
    title: "Accounting",
    desc: "Professional accounting solutions for businesses and individuals.",
  },

  {
    number: "04",
    title: "Company Registration",
    desc: "Fast and reliable company incorporation and registration services.",
  },

  {
    number: "05",
    title: "Income Tax Compliance",
    desc: "Ensure full compliance with taxation and financial regulations.",
  },

  {
    number: "06",
    title: "Firm Registration",
    desc: "Registration services for partnership firms and business entities.",
  },

  {
    number: "07",
    title: "GST Filing",
    desc: "Monthly and annual GST return filing handled professionally.",
  },

  {
    number: "08",
    title: "Pvt. Ltd Registration",
    desc: "Private limited company registration with complete documentation.",
  },

  {
    number: "09",
    title: "LLP Registration",
    desc: "Limited Liability Partnership registration made simple and quick.",
  },

  {
    number: "10",
    title: "Trade Mark Registration",
    desc: "Protect your brand identity with trademark registration services.",
  },

  {
    number: "11",
    title: "IPO Planning",
    desc: "Strategic IPO planning and financial advisory for growing businesses.",
  },

  {
    number: "12",
    title: "Business Growth Consulting",
    desc: "Expert consulting to help scale and grow your business efficiently.",
  },

  {
    number: "13",
    title: "Business Startup Services",
    desc: "Complete startup guidance from registration to financial planning.",
  },

  {
    number: "14",
    title: "Business Tax Planning",
    desc: "Smart tax planning strategies to optimize business finances.",
  },

  {
    number: "15",
    title: "Financial Advising",
    desc: "Professional financial guidance for businesses and individuals.",
  },

  {
    number: "16",
    title: "Individual Tax Planning",
    desc: "Personalized tax planning solutions for individuals and professionals.",
  },

  {
    number: "17",
    title: "Tax Resolution Services",
    desc: "Representation and resolution support for tax authority matters.",
  },

  {
    number: "18",
    title: "Payroll Accounting",
    desc: "Efficient payroll management and accounting services for companies.",
  },

  {
    number: "19",
    title: "Trusts & Estates Accounting",
    desc: "Accounting and financial management for trusts and estates.",
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

          Premium Services Designed For Modern Clients.

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