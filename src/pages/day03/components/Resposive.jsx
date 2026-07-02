export default function Responsive() {
  return (
    <div>
      <div className="min-h-screen bg-gray-200 p-4">
        <div
          className="
        mx-auto
        bg-blue-500
        text-white
        rounded-lg
        p-4
        text-center

        w-full
        sm:w-4/5
        md:w-3/5
        lg:w-2/5
        
        text-base
        md:text-xl
        lg:text-2xl
        "
        >
          <h1>반응형예제</h1>
          <p>창 크기를 조절해 보세요</p>
        </div>

        <div>
          <div className="sm:hidden">모바일</div>
          <div className="hidden sm:block md:hidden">Small(sm)</div>
          <div className="hidden md:block lg:hidden">medium(md)</div>
          <div className="hidden lg:block">Large(lg이상)</div>
        </div>
      </div>
    </div>
  );
}
