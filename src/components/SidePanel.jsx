export default function SidePanel() {
  return (
    <div className="bg-white rounded-[40px] overflow-hidden h-[96vh] flex flex-col">

      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600"
        alt=""
        className="h-[320px] object-cover w-full"
      />

      {/* CONTENT */}
      <div className="p-8 flex flex-col justify-between flex-1">

        <div>

          <h2 className="text-[3rem] leading-[0.95] tracking-[-3px] font-semibold">

            Trusted by Clients Across
            the Nation for Proven
            Legal Support

          </h2>

          <p className="text-gray-500 mt-6 leading-relaxed">

            Experience modern legal care delivered with comfort,
            precision and attention to detail.

          </p>

        </div>

        <button className="mt-8 w-fit bg-black text-white px-6 py-4 rounded-full hover:scale-105 transition-all">

          Get Consultation

        </button>

      </div>

    </div>
  );
}