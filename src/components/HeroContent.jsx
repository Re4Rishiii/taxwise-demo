import { motion } from "framer-motion";

export default function HeroContent() {
  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 80,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

    >

      <h1
        className="
        text-white
        font-semibold
        leading-[0.9]
        tracking-[-2px]
        md:tracking-[-6px]

        text-[3.8rem]
        sm:text-[5rem]
        md:text-[6.5rem]
        lg:text-[7.5rem]
        xl:text-[8rem]

        max-w-[800px]
      "
      >

        Modern Taxation &
        <br />
       Business 
        <br />
        Solutions
        <br />
      </h1>

    </motion.div>

  );
}