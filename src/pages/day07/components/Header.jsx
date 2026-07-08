import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[80px] flex items-center justify-center bg-gray-800">
      <ul>
        <li className=" w-[300px] text-white font-bold text-xl flex justify-between">
          <Link to={"/"} className="hover:text-green-300">Main</Link>
          <Link to={"/login"} className="hover:text-green-300">로그인</Link>
          <Link to={"/signup"} className="hover:text-green-300">회원가입</Link>
        </li>
      </ul>
    </header>
  );
}
