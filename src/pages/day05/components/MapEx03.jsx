import { ChevronRight } from "lucide-react";
import { sns } from "../data/data";

export default function MapEx03() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen bg-gray-200">
      {sns.map((snsData) => (
        <div
          key={snsData}
          className="flex flex-col gap-2.5 justify-between items-center bg-white w-4/9 px-4 py-4 my-[10px] rounded-2xl shadow-xl"
        >
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl">{snsData.title}</h2>
            <h5 className="text-[12px] text-gray-500">{snsData.description}</h5>
          </div>
          <a
            className="flex text-gray-700 cursor-pointer hover:text-green-600"
            href={snsData.link}
          >
            바로가기
            <ChevronRight />
          </a>
        </div>
      ))}
    </div>
  );
}
