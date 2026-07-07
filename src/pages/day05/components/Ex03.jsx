import { useState } from "react";
import { dataEx } from "../data/data";

export default function Ex03() {
  const [filter, setFilter] = useState("all");

  const filterList =
    filter === "all"
      ? dataEx
      : dataEx.filter((item) => item.category === filter);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-300 space-y-4">
      {/* 필터버튼 */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`cursor-pointer active:scale-95 px-3 py-1 rounded ${filter === "all" ? " bg-red-500 text-white" : "bg-white text-black"}`}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("portal")}
          className={`cursor-pointer active:scale-95 px-3 py-1 rounded ${filter === "portal" ? "bg-red-500 text-white" : "bg-white text-black"}`}
        >
          포털
        </button>
        <button
          onClick={() => setFilter("video")}
          className={`cursor-pointer active:scale-95 px-3 py-1 rounded ${filter === "video" ? "bg-red-500 text-white" : "bg-white text-black"}`}
        >
          영상
        </button>
        <button
          onClick={() => setFilter("sns")}
          className={`cursor-pointer active:scale-95 px-3 py-1 rounded ${filter === "sns" ? "bg-red-500 text-white" : "bg-white text-black"}`}
        >
          sns
        </button>
      </div>

      {/* 컨텐츠 */}

      <div className="w-80 space-y-3">
        {filterList.map((item) => {
          return (
            <a
              href={item.link}
              className="block bg-white p-4 rounded-xl shadow"
            >
              <h2 className="text-[22px] font-bold">{item.title}</h2>
              <p className="text-gray-500 mt-3">{item.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
