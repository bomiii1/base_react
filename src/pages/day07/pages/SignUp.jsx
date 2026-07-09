export default function SignUp() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-300">
      <form className="flex flex-col w-3/5 p-12 bg-gray-700 rounded-xl shadow">
        <h1 className="font-bold text-3xl mb-[15px] text-green-400 pl-1">회원가입</h1>
          <input className="w-full px-4 py-2 rounded-md mt-4 bg-slate-300" type="text" placeholder="사용하실 아이디를 입력해주세요" />
        <input className="w-full px-4 py-2 rounded-md mt-4 bg-slate-300" type="password" placeholder="사용하실 비밀번호를 입력해주세요" />
        <input className="w-full px-4 py-2 rounded-md mt-4 bg-slate-300" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />

        <input className="w-full px-4 py-2 rounded-md mt-4 bg-slate-300" type="text" placeholder="이름을 입력해주세요" />
        <input className="w-full px-4 py-2 rounded-md mt-4 bg-slate-300" type="text" placeholder="휴대폰 번호를 입력해주세요 ('-' 제외)"/>
        
        <div className="flex items-center">
          <input className="w-full px-4 py-2 rounded-md mt-4 bg-slate-300" type="text" placeholder="이메일주소를 입력해주세요" />
          <span className="text-white text-xl px-3 mt-[10px]">@</span>
          <select className="text-gray-800 w-full px-4 py-2.5 rounded-md mt-4 bg-slate-300">
            <option>선택</option>
            <option>naver.com</option>
            <option>daum.net</option>
            <option>hanmail.net</option>
            <option>google.com</option>
            <option>kakao.com</option>
            <option>직접입력</option>
          </select>
        </div>

        <button className="active:scale-95 w-full rounded-md p-4  font-bold mt-8 cursor-pointer transition bg-green-200">가입하기</button>
      </form>
    </div>
  );
}
