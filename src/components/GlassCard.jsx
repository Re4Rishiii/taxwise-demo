export default function GlassCard() {
  return (
    <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[36px] p-5 w-[380px] md:w-[450px] shadow-2xl">

      {/* TOP BAR */}
      <div className="w-[120px] h-[12px] rounded-full bg-white/20 mx-auto mb-5"></div>

      {/* MAIN CTA */}
      <div className="bg-white rounded-full p-4 flex items-center justify-between mb-4">

        <div className="flex items-center gap-3">

          <div className="bg-black text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <span className="font-medium">
            Emergency Consultation
          </span>

        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>

      </div>

      {/* SECOND BUTTON */}
      <div className="bg-white/10 rounded-full p-4 text-white/40 mb-4 flex justify-between">

        <span>Instant Legal Support</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>

      </div>

      {/* INPUT */}
      <div className="bg-black/40 border border-white/10 rounded-full p-4 flex items-center justify-between text-white">

        <span className="text-white/70">
          Ask anything
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M12 1a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V4a3 3 0 0 1 3-3z" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <path d="M12 19v4" />
          <path d="M8 23h8" />
        </svg>

      </div>

    </div>
  );
}