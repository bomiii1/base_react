import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

export default function Day07() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
