import {
  ChevronRight,
  FastForward,
  Heart,
  Pause,
  Repeat,
  Rewind,
  Share2,
  Shuffle,
  Star,
} from "lucide-react";

export default function () {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
      {/* music player wrap */}
      <div className="w-100 h-110 bg-black rounded-2xl shadow-2xl overflow-hidden">
        {/* ----------- album img ---------- */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJd-453ktL6TuFS3s9Aonc0ubCaerM4VpGGnPPPxXwg&s=10"
          className="w-full h-1/3 object-cover opacity-70"
        ></img>

        {/* ---------- player ---------- */}
        <div className="w-full h-2/3 flex flex-col py-10 px-10 bg-white rounded-xl">
          {/* artist */}
          <div className="flex justify-between items-center">
            <div className="text-3xl font-medium">Antifreeze</div>
            <div className="flex gap-2">
              <Share2 className="text-gray-200 cursor-pointer hover:text-gray-400" />
              <Star className="text-transparent fill-gray-200 cursor-pointer hover:fill-gray-400" />
              <Heart className="text-transparent fill-orange-600 opacity-80 cursor-pointer " />
            </div>
          </div>

          {/* title */}
          <div className="flex gap-1 py-2 text-gray-500 items-center cursor-pointer hover:text-orange-600 w-1/2">
            <div className="text-[16px]">The Black Skirts</div>
            <ChevronRight className="p-[3px]" />
          </div>

          {/* player bar */}
          <div className="mt-[30px]">
            <div className="w-full h-1 bg-gray-200 rounded overflow-hidden">
              <div className="bg-orange-600 w-3/5 h-full"></div>
            </div>
            <div className="w-full flex justify-between text-gray-500 text-[11px] py-1">
              <span>2:32</span>
              <span>4:04</span>
            </div>

            {/* control */}
            <div className="pt-[30px] flex justify-between">
              <div className="flex gap-2.5 items-center">
                <div className=" cursor-pointer bg-gray-300 hover:bg-orange-200 active:scale-90 flex items-center justify-center h-13 w-13 rounded-full">
                  <Pause className="fill-white p-[1px] text-transparent" />
                </div>
                <div className=" cursor-pointer bg-gray-300 hover:bg-orange-200 active:scale-90 flex items-center justify-center h-9 w-9 rounded-full">
                  <Rewind className="fill-white p-[4px] text-transparent" />
                </div>
                <div className=" cursor-pointer bg-gray-300 hover:bg-orange-200 active:scale-90 flex items-center justify-center h-9 w-9 rounded-full">
                  <FastForward className="fill-white p-[4px] text-transparent" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Repeat className="text-gray-200 cursor-pointer hover:text-gray-400" />
                <Shuffle className="text-gray-200 cursor-pointer hover:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
