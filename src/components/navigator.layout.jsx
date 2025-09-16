import {
  Briefcase,
  Star,
  CreditCard,
  Car,
  Wrench,
  ShoppingBag,
  CheckSquare,
  AlertTriangle,
  LogOut,
  Search,
  Grid,
  Heart,
} from "lucide-react";

export default function Navigator() {
  const menuItems = [
    { icon: CheckSquare, label: "Công việc", color: "#0ea5e9" },
    { icon: AlertTriangle, label: "Quan trọng", color: "#f59e0b" },
    { icon: CreditCard, label: "ATMs", color: "#10b981" },
    { icon: Car, label: "Môi giới xe hơi", color: "#8b5cf6" },
    { icon: Wrench, label: "Tuning salons", color: "#ef4444" },
    { icon: ShoppingBag, label: "Goods Stores", color: "#06b6d4" },
    { icon: ShoppingBag, label: "Goods Stores", color: "#06b6d4" },
    { icon: ShoppingBag, label: "Goods Stores", color: "#06b6d4" },
    { icon: ShoppingBag, label: "Goods Stores", color: "#06b6d4" },
    { icon: ShoppingBag, label: "Goods Stores", color: "#06b6d4" },
    { icon: ShoppingBag, label: "Goods Stores", color: "#06b6d4" },
  ];

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#dbeafe]">
      <div className="bg-[#2a2a2a] rounded-[1.5vh] w-[50vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-[2vh] h-[10vh] rounded-t-[2vh]">
          <div className="flex items-center gap-[1vh]">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 32 32"
            >
              <path
                fill="#0d8bed"
                d="M26.277 3.138c1.618-.622 3.207.967 2.585 2.585l-8.46 21.994c-.696 1.812-3.306 1.668-3.8-.209l-2.375-9.023a1 1 0 0 0-.712-.712l-9.023-2.375c-1.877-.494-2.02-3.104-.209-3.8l21.995-8.46Z"
              />
            </svg>
            <div className="text-[1.5vh] font-bold text-[#fff]">
              Điều hướng của bạn
            </div>
          </div>
          <button className="flex items-center text-[1.3vh] text-[#fff] px-[1.5vh] py-[0.8vh] rounded">
            <span className="mr-[0.5vh] font-semibold">Đăng xuất</span>
            <span className="ml-[0.5vh] bg-[#fff] px-[1vh] py-[.3vh] rounded text-[1.5vh] font-semibold text-[#000]">
              ESC
            </span>
          </button>
        </div>

        <div className="bg-[#111111] rounded-[2vh]">
          {/* Navigation Bar */}
          <div className="flex items-center gap-[1.5vh] p-[2vh]">
            <div className="flex gap-[.7vh] w-full">
              {/* Grid button - active */}
              <button className="flex items-center justify-center w-[6vh] h-[5vh] text-[#fff] bg-blue-500 rounded-[1vh]">
                <Grid size={15} />
              </button>

              {/* Heart button - inactive */}
              <button className="flex items-center justify-center w-[6vh] h-[5vh] text-gray-400 rounded-[1vh] bg-[#1a1a1a]">
                <Heart size={15} />
              </button>
              <div className="bg-[#1a1a1a] rounded flex items-center px-[1.5vh] py-[1vh] w-full">
                <Search className="w-[1.5vh] h-[1.5vh] text-[#888] mr-[1vh]" />
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="bg-transparent text-[#fff] text-[1.3vh] outline-none flex-1"
                />
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="px-[2vh] pb-[2vh] h-[40vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [::-webkit-scrollbar]:hidden">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-[1.5vh] bg-[#1a1a1a] mb-[.6vh] rounded-[1vh] cursor-pointer hover:bg-[#3a3a3a] transition-colors last:mb-0"
              >
                <div className="flex items-center">
                  <div className="w-[3vh] h-[3vh] rounded flex items-center justify-center mr-[1.5vh]">
                    <item.icon className="w-[2vh] h-[2vh] text-[#108be5]" />
                  </div>
                  <span className="text-[1.3vh] font-semibold text-[#fff]">
                    {item.label}
                  </span>
                </div>
                <span className="text-[1.2vh] text-[#888]">{">"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
