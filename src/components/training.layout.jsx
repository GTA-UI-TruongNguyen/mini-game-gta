import { Banknote, Coins, CreditCard } from "lucide-react";

export default function Training() {
  const trainingPrograms = [
    {
      id: 1,
      emoji: "🗾",
      faculty: "Faculty of Foreign Languages",
      direction: "Tiếng Nhật",
      cost: "$1,200,000",
    },
    {
      id: 2,
      emoji: "🇷🇺",
      faculty: "Faculty of Foreign Languages",
      direction: "Tiếng Nga",
      cost: "$600,000",
    },
    {
      id: 3,
      emoji: "🇮🇹",
      faculty: "Faculty of Foreign Languages",
      direction: "Tiếng Ý",
      cost: "$400,000",
    },
    {
      id: 3,
      emoji: "🇮🇹",
      faculty: "Faculty of Foreign Languages",
      direction: "Tiếng Ý",
      cost: "$400,000",
    },
    {
      id: 3,
      emoji: "🇮🇹",
      faculty: "Faculty of Foreign Languages",
      direction: "Tiếng Ý",
      cost: "$400,000",
    },
    {
      id: 3,
      emoji: "🇮🇹",
      faculty: "Faculty of Foreign Languages",
      direction: "Tiếng Ý",
      cost: "$400,000",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center bg-blue-200 p-[3vh]">
      <div className="bg-white rounded-t-[2vh] w-[100vh] mx-auto">
        {/* Header */}
        <div className="flex items-center bg-[#ecf2fe] rounded-t-[1vh] px-[3vh] py-[2vh]">
          {/* Logo */}
          <div className="w-[8vh] h-[8vh] rounded-full flex items-center justify-center mr-[2vh]">
            <div className="text-white text-[2vh] font-bold">ULS</div>
          </div>

          {/* Tên Trường Đại học */}
          <div>
            <h1 className="text-[1.5vh] font-semibold text-[#4159b7]">
              ĐẠI HỌC LOS SANTOS, SAN ANDREAS
            </h1>
            <p className="text-[1.5vh] font-bold text-[#4a68ac]">
              CÁC CHƯƠNG TRÌNH ĐÀO TẠO CÓ SẴN
            </p>
          </div>
        </div>

        {/* Training Programs */}
        <div className="h-[47vh] overflow-y-auto px-[2vh] py-[2vh]">
          <div className="grid grid-cols-2 gap-[1vh]">
            {trainingPrograms.map((program) => (
              <div
                key={program.id}
                className="border border-[#dbdada] rounded-[1vh] p-[2vh]"
              >
                <div className="flex items-center mb-[2vh]">
                  {/* Logo */}
                  <div className="text-[2vh] p-[1vh] mr-[1vh]">{program.emoji}</div>
                  <div>
                    <h3 className="text-[1.3vh] font-bold text-[#1e293b]">
                      {program.faculty}
                    </h3>
                    <p className="text-[1.3vh] text-[#b3b3b3]">
                      Hệ đào tạo:
                      <span className="font-semibold ml-[.5vh] text-[#000]">
                        {program.direction}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mb-[.5vh] flex items-center justify-between">
                  <p className="text-[1.3vh] text-[#b3b3b3] mb-[0.5vh]">
                    Phí đào tạo
                  </p>
                  <p className="text-[1.5vh] font-bold text-[#4060b2]">
                    {program.cost}
                  </p>
                </div>

                <div className="mb-[1vh] flex items-center justify-between">
                  <p className="text-[1.3vh] text-[#b3b3b3] mb-[0.5vh]">
                    Các kỹ năng cần có
                  </p>
                  <p className="text-[1.3vh] text-[#b3b3b3] flex items-center">
                    Xem thêm <span className="ml-[0.5vh]">{">"}</span>
                  </p>
                </div>

                <div className="flex gap-[1vh]">
                  <button className="flex-1 bg-[#405abb] text-white py-[1vh] px-[2vh] rounded text-[1.3vh] flex items-center justify-center">
                    <Banknote className="w-[1.5vh] h-[1.5vh] mr-[0.5vh]" />
                    Tiền mặt
                  </button>
                  <button className="flex-1 bg-[#405abb] text-white py-[1vh] px-[2vh] rounded text-[1.3vh] flex items-center justify-center">
                    <CreditCard className="w-[1.5vh] h-[1.5vh] mr-[0.5vh]" />
                    Thẻ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
