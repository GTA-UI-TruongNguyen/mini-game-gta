import { useState } from "react";

export default function Call() {
  const [selectedReasons, setSelectedReasons] = useState(new Set());
  const [comment, setComment] = useState('');

  const reasons = [
    'Giết người',
    'Cướp của', 
    'Giữ con tin',
    'Cá nhân có vũ trang',
    'Đậu xe không đúng',
    'Khác'
  ];

  const toggleReason = (reason) => {
    const newSelected = new Set(selectedReasons);
    if (newSelected.has(reason)) {
      newSelected.delete(reason);
    } else {
      newSelected.add(reason);
    }
    setSelectedReasons(newSelected);
  };

  return (
    <div className="w-full h-screen bg-[#1e1e1e] flex items-center justify-center">
      <div className="bg-[#fbfbfb] rounded-[1vh] p-[2vh] w-[45vh] shadow-[2vh]">
        <h2 className="text-[1.5vh] font-semibold text-[#000] mb-[3vh]">Lý do gọi cho nhân viên</h2>
        
        <div className="space-y-[1vh] mb-[2.5vh]">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-center justify-between">
              <span className="text-[1.3vh] font-semibold text-[#000]">{reason}</span>
              <button
                onClick={() => toggleReason(reason)}
                className={`w-[4vh] h-[2vh] rounded-full transition-colors ${
                  selectedReasons.has(reason) ? 'bg-[#4f46e5]' : 'bg-[#dadada]'
                }`}
              >
                <div
                  className={`w-[1.5vh] h-[1.5vh] bg-[#fff] rounded-full transition-transform ${
                    selectedReasons.has(reason) ? 'translate-x-[2vh]' : 'translate-x-[0.3vh]'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="mb-[1vh]">
          <label className="text-[1.3vh] text-[#000] mb-[1vh] block">Nhận xét:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Hãy mô tả tình huống..."
            className="w-full h-[7vh] bg-[#eeeeee] border-none placeholder-[#888] p-[2vh] rounded text-[1.3vh] resize-none focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex gap-[1vh]">
          <button className="flex-1 bg-[#8ca5de] text-[#fff] py-[1vh] rounded-[.5vh] text-[1.3vh] font-medium">
            Thử thách
          </button>
          <button className="flex-1 bg-[#eaeaea] text-[#a0a2a1] py-[1vh] rounded-[.5vh] text-[1.3vh] font-medium">
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
}
