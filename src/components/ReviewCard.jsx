import { motion } from "framer-motion";

export default function ReviewCard() {
  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 50,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        delay: 0.8,
        duration: 1,
      }}

      className="
      text-white

      max-w-[280px]

      backdrop-blur-2xl
      bg-white/5

      border border-white/10

      rounded-[28px]

      p-5

      shadow-2xl
    "
    >

      {/* TOP */}
      <div className="flex items-center gap-3 mb-5">

        {/* USERS */}
        <div className="flex -space-x-3">

          <img
            src="https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=612x612&w=0&k=20&c=5N_IVGYsXoyj-H9vEiZUCLqbmmineaemQsKt2NTXGms="
            alt=""
            className="w-11 h-11 rounded-full border-2 border-black object-cover"
          />

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-11 h-11 rounded-full border-2 border-black object-cover"
          />

          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt=""
            className="w-11 h-11 rounded-full border-2 border-black object-cover"
          />

        </div>

        {/* RATING */}
        <div className="font-semibold text-lg">

          2.5k+ <span className="text-white/60">(4.8)</span>

        </div>

      </div>

      {/* REVIEW */}
      <p className="text-sm text-white/70 leading-relaxed">

        “Excellent service! The team handled my case smoothly and kept me updated.”

      </p>

    </motion.div>

  );
}