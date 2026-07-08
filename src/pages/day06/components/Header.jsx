import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul className="p-6 border-b text-[18px] flex font-bold space-x-12 ">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/sub01"}>sub01</Link>
        </li>
        <li>
          <Link to={"/sub02"}>sub02</Link>
        </li>
        <li>
          <Link to={"/sub03"}>sub03</Link>
        </li>
      </ul>
    </header>
  );
}
