export default function Wounded() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main diagonal dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000a1",
          clipPath: "polygon(0px 24vh, 100% 26vh, 100% 73%, 0px 77%)",
        }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="w-[60vh] text-center">
          <h1 className="text-[4vh] italic font-extrabold text-[#fff] mb-[1.5vh] tracking-wide">
            BẠN ĐÃ BỊ THƯƠNG
          </h1>

          {/* red underline accent */}
          <div className="mx-auto w-[40vh] h-[0.5vh] bg-[#c44d41] mb-[3vh] rounded" />

          <p className="text-[1.5vh] text-gray-300 leading-relaxed">
            Bạn đã bị thương nghiệm trọng, cơ thể bạn đang
          </p>
          <p className="text-[1.5vh] text-gray-300 leading-relaxed mb-[4vh]">
            đấu tranh đến hơi thở cuối cùng.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-[3vh]">
            <button
              type="button"
              className="bg-[#1b1c1b] hover:bg-[#282828] text-[#fff] px-[4vh] py-[1.6vh] rounded text-[1.5vh] font-medium "
            >
              Gọi cho bác sĩ
            </button>

            <button
              type="button"
              className="bg-[#1b1c1b] hover:bg-[#282828] text-[#fff] px-[4vh] py-[1.6vh] rounded text-[1.5vh] font-medium"
            >
              Mất nhận thức
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
