import { Eye, Fish, Info, Trophy } from "lucide-react";

export default function Fishing() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#121212] text-[#fff] rounded-[1vh] w-[330px] p-[3vh]">
        {/* Title */}
        <h2 className="mb-[2vh] text-[1.5vh] font-semibold">BẠN ĐÃ BẮT ĐƯỢC CÁ</h2>

        {/* Fish Card */}
        <div className="bg-[#212121] rounded-[1vh] p-[2vh]">
          {/* Header */}
          <div className="flex items-center mb-[4vh]">
            <span className="flex items-center gap-[1vh] px-[1vh] py-[.7vh] text-[1.3vh] text-[#fff] bg-[#8e1b34] rounded-[1vh]">
              Kỷ lục bắt <Fish className="w-[1.5vh] h-[1.5vh]" />
            </span>
            <span className="ml-2 text-[1.3vh] text-yellow-400">+1 🙂</span>
            <Info className="w-[2vh] h-[2vh] ml-auto text-gray-400 cursor-pointer" />
          </div>

          {/* Fish Image */}
          <div className="flex justify-center mb-[4vh]">
            <img
              src="https://cdn.majestic-files.com/public/master/static/img/inventory/items/1003.png"
              alt="Redfish"
              className="h-[60px] object-contain"
            />
          </div>

          {/* Fish Info */}
          <div className="flex items-center justify-between">
            <p className="text-[1.3vh] font-semibold">Redfish</p>
            <p className="text-[1.3vh]">
              0.40 <span className="text-[1.2vh] py-[.4vh] px-[.3vh] bg-[#3b3b3b]">KG</span>
            </p>
          </div>
        </div>

        {/* Level Progress */}
        <div className="my-[3vh]">
          <div className="flex justify-between mb-[.5vh] text-[1.2vh] text-[#767c83]">
            <span>Level 1</span>
            <p className="mt-[.5vh] text-center text-[#767c83]">0 / 196</p>
            <span>Level 2</span>
          </div>
          <div className="relative w-full h-[.5vh] bg-[#767c83] rounded">
            <div className="absolute top-0 left-0 h-[.5vh] w-[20%] bg-yellow-400 rounded"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-[1vh]">
          <button className="flex-1 text-[1.3vh] text-[#828c8c] bg-[#2a2a2a] hover:bg-[#333] py-[1vh] rounded-[.5vh] font-medium">
            Lấy cho bản thân
          </button>
          <button className="flex-1 text-[1.3vh] text-[#828c8c] bg-[#2a2a2a] hover:bg-[#333] py-[1vh] rounded-[.5vh] font-medium flex items-center justify-center gap-[.5vh]">
            Tiếp tục <span className="text-[#fff]">+1 🙂</span>
          </button>
        </div>
      </div>
    </div>
  );
}
