// src/pages/LandingPage.jsx
import ProcessSection from "../components/ProcessSection";
import { motion } from "framer-motion";
import ServicesSection from "../components/ServicesSection";
import Navbar from "../components/Navbar";
import HeroContent from "../components/HeroContent";
import AboutSection from "../components/AboutSection";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
export default function LandingPage() {
  return (

    <>

      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen overflow-hidden bg-black">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* GLOW EFFECT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full"></div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 min-h-screen flex flex-col">

          {/* NAVBAR */}
          <Navbar />

          {/* HERO */}
          <div className="flex-1 flex items-center px-6 md:px-12 pt-32 pb-16">

            <div className="w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* ===================================== */}
              {/* LEFT CONTENT */}
              {/* ===================================== */}

              <div>

                <HeroContent />

                {/* DESCRIPTION */}
                <motion.p

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.3,
                    duration: 1,
                  }}

                  className="text-white/70 text-base md:text-xl leading-relaxed max-w-[520px] mt-8"
                >

                  Professional taxation, accounting, GST and business registration services designed for startups, enterprises and growing businesses.

                </motion.p>

                {/* BUTTONS */}
                <motion.div

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.5,
                    duration: 1,
                  }}

                  className="flex flex-wrap gap-4 mt-10 mb-40"
                >

                  <button className="bg-white text-black px-8 py-5 rounded-full font-medium hover:scale-105 transition-all duration-300">

                    Get Consultation

                  </button>

                  <button className="border border-white/20 text-white px-8 py-5 rounded-full backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300">

                    Learn More

                  </button>

                </motion.div>

              </div>

              {/* ===================================== */}
              {/* GLASS CARD */}
              {/* ===================================== */}
                  
              <motion.div

                initial={{
                  opacity: 0,
                  x: 100,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  delay: 0.4,
                  duration: 1.2,
                }}

                className="w-full flex justify-center lg:justify-end pr-0 lg:pr-10"
              >

                <div
                  className="
                  w-full
                  max-w-[420px]

                  backdrop-blur-2xl
                  bg-black/30
                  border border-white/10

                  rounded-[36px]

                  p-4 md:p-5

                  shadow-2xl
                "
                >

                  {/* TOP BAR */}
                  <div className="w-[120px] h-[10px] rounded-full bg-white/20 mx-auto mb-5"></div>

                  {/* PRIMARY BUTTON */}
                  <div className="bg-white rounded-full p-4 flex items-center justify-between mb-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-black"></div>

                      <span className="font-medium text-black text-sm md:text-base">

                        Emergency Consultation

                      </span>

                    </div>

                    <span className="text-black text-xl">
                      ↗
                    </span>

                  </div>

                  {/* SECONDARY BUTTON */}
                  <div className="bg-white/10 rounded-full p-4 text-white/40 mb-4 flex justify-between text-sm md:text-base">

                    <span>Instant Legal Support</span>

                    <span>↗</span>

                  </div>

                  {/* INPUT */}
                  <div className="bg-black/40 border border-white/10 rounded-full p-4 flex items-center justify-between text-white">

                    <span className="text-white/70 text-sm md:text-base">

                      Ask anything

                    </span>

                    <span>🎤</span>

                  </div>

                </div>

              </motion.div>
                {/* REVIEW CARD */}

               
            </div>

          </div>

        </div>

      </div>

      {/* ABOUT SECTION */}
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <Footer />
    </>

  );
}