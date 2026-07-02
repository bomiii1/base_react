import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Day02 from "./pages/day02/Day02";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Day02 />
  </StrictMode>,
);
