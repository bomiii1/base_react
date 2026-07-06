import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Day02 from "./pages/day02/Day02";
import Day03 from "./pages/day03/Day03";
import "./style/index.css";
import Day04 from "./pages/day04/Day04";
import MusicUiEx from "./pages/musicUi/MusicUiEx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Day02 /> */}
    {/* <Day02 /> */}
    {/* <Day03 /> */}
    {/* <Day04 /> */}
    <MusicUiEx />
  </StrictMode>,
);
