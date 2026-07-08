import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Main</Link>
          <Link to={"/login"}>로그인</Link>
          <Link to={"/signup"}>회원가입</Link>
        </li>
      </ul>
    </header>
  );
}
