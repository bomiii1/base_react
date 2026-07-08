import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Sub01 from "./pages/Sub01";
import Header from "./components/Header";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

export default function Day06() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/sub03" element={<Sub03 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
