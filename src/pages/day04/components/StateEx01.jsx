import { useState } from "react";

export default function StateEx01() {
  //   let num = 0;
  //   const plusHandler = () => {
  //     console.log(num);
  //     return num++;
  //   };
  // => 업데이트 되었어요 ! 가 없어서 쓸수없음ㅠㅠ

  const [num, setNum] = useState(0);
  //   비구조할당?
  //   =>리액트 상태관리를 해줌
  //   =>hook : use~~~
  //   =>state는 컴포넌트 내부에서 관리하는 값입니다

  //   #####################  방법 1  #####################
  //   const plusHandler = () => {
  //     setNum(num + 1);
  //   };
  //   const minusHandler = () => {
  //     setNum(num - 1);
  //   };

  //   #####################  방법 2  #####################
  //   const plusHandler = () => setNum(num + 1);
  //   const minusHandler = () => setNum(num - 1);

  //   #####################  방법 3  #####################
  const plusHandler = () => setNum((prev) => prev + 1);
  const minusHandler = () => setNum((prev) => prev - 1);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center gap-4 w-44">
        <div className="text-4xl font-bold text-gray-800">{num}</div>
        {/* 버튼영역 */}
        <div className="flex gap-3">
          <button
            onClick={minusHandler}
            className="flex px-6 font-bold text-white py-2 bg-red-500 rounded-lg hover:bg-red-600 transition cursor-pointer active:scale-95"
          >
            -
          </button>
          <button
            onClick={plusHandler}
            className="flex px-6 font-bold text-white py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition cursor-pointer active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
