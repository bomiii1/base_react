import { useState } from "react";

export default function StateEx02() {
  const [count, setCount] = useState(0);

  const handleMinus = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const handlePlus = () => setCount((prev) => prev + 1);

  const price = 12000;
  const totalPrice = price * count;
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-64 text-center space-y-4">
        <h1 className="text-lg font-bold">상품수량</h1>
        {/* 수량 */}
        <div className="text-3xl font-bold">{count}</div>
        {/* 버튼 */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleMinus}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer active:scale-95"
          >
            -
          </button>
          <button
            onClick={handlePlus}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer active:scale-95"
          >
            +
          </button>
        </div>
        {/* 가격*/}
        <div className="text-gray-700">단가 : {price.toLocaleString()}원</div>
        {/* toLocaleString() : 숫자 000,000 세자리마다 콤마찍어줌  */}
        <div className="text-2xk\l font-bold text-green-500">
          총 {totalPrice.toLocaleString()}원
        </div>
      </div>
    </div>
  );
}
