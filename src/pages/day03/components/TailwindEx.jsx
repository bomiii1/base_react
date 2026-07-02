export default function TailwindEx() {
  return (
    <>
      <div className="w-28 h-28 bg-green-300 mx-[20px]"></div>
      <div className="w-[100px] h-[100px] bg-amber-200 m-auto"></div>
      <br />
      {/* ____________________________________________________________________ */}
      <div className="text-3xl font-black text-pink-400">글자 스타일</div>
      <br />
      {/* ____________________________________________________________________ */}

      <div className="w-[500px] bg-gray-300 flex justify-between items-center">
        <div className="w-[100px] h-[100px] bg-blue-300 flex justify-center items-center">
          컨텐츠1
        </div>
        <div className="w-[100px] h-[100px] bg-blue-300 flex justify-center items-center">
          컨텐츠2
        </div>
        <div className="w-[100px] h-[100px] bg-blue-300 flex justify-center items-center">
          컨텐츠3
        </div>
      </div>

      <br />
      {/* ____________________________________________________________________ */}

      <div className="w-[300px] h-[300px] bg-orange-300 hover:bg-purple-200"></div>

      <br />
      {/* ____________________________________________________________________ */}
    </>
  );
}
