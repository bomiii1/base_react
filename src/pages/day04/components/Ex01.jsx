import { useState } from "react";

export default function Ex01() {
  const [like, setLike] = useState(false);

  const onLike = () => {
    // setLike((prev) => (like ? false : true));
    setLike((prev) => !prev);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-40 h-40 bg-white flex flex-col justify-center items-center rounded-2xl shadow-2xl">
        <div onClick={onLike} className="text-5xl p-2.5 cursor-pointer">
          {like ? "🤍" : "❤"}
        </div>
        <h2 className="p-2.5">{like ? "좋아요 취소" : "좋아요"}</h2>
      </div>
    </div>
  );
}
