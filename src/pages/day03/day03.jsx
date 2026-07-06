// // import StyleEx from "./components/StyleEx";
// import AnimationEx from "./components/AnimationEx";
// import Responsive from "./components/Resposive";
// import TailwindEx from "./components/TailwindEx";
// import TransformEx from "./components/TransformEx";

// export default function Day03() {
//   return (
//     <div>
//       {/* <StyleEx /> */}
//       {/* <TailwindEx />; */}
//       {/* <TransformEx /> */}
//       {/* <AnimationEx /> */}
//       {/* <Responsive /> */}
//     </div>
//   );
// }

import { Camera, User, Sparkles, SquarePause } from "lucide-react";
// Usage
const App = () => {
  return (
    <div>
      <Camera />
      <User />
      <Sparkles />
      <SquarePause size={80} color="red" strokeWidth={1} />
    </div>
  );
};
export default App;
