import { motion } from "framer-motion";

export default function Navbar() {
  return (

    <motion.div

      initial={{
        opacity: 0,
        y: -50,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 backdrop-blur-xl bg-black/10"
    >

      <div className="max-w-[1700px] mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-white"></div>

          <h1 className="text-white text-2xl font-semibold tracking-[-1px]">

            Tax Wise

          </h1>

        </div>

        {/* NAV */}
        <div className="hidden md:flex items-center gap-8 px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-2xl">

          <a href="#about" className="text-white/80 text-sm hover:text-white transition-all">
            About
          </a>

          <a href="#services" className="text-white/80 text-sm hover:text-white transition-all">
            Services
          </a>

          <a href="#stats" className="text-white/80 text-sm hover:text-white transition-all">
            Stats
          </a>

        </div>

        {/* BUTTON */}
        <button className="bg-white text-black px-6 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300">

          Book a call 

        </button>

      </div>

    </motion.div>

  );
}