import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Day02 from "./pages/day02/Day02";
import Day03 from "./pages/day03/Day03";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Day02 /> */}
    {/* <Day02 /> */}
    <Day03 />
  </StrictMode>,
);
