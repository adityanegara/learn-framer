import SimpleAnimation from "./Animation/SimpleAnimation/SimpleAnimation";
import Transition from "./Animation/Transition/Transition";
import EnterAnimation from "./Animation/EnterAnimation/EnterAnimation";
import ExitAnimation from "./Animation/ExitAnimation/ExitAnimation";
import KeyFrames from "./Animation/Keyframes/Keyframes";
import NullKeyFrame from "./Animation/Keyframes/NullKeyFrame";
import Gesture from "./Animation/Gesture/Gesture";
import Variants from "./Animation/Variants/Accordion";
import SimpleVariants from "./Animation/Variants/SimpleVariants";
import PropagationVariants from "./Animation/Variants/PropagationVariants";
import Orchestration from "./Animation/Variants/Orchestration";
import './index.css';

const App = () => {
  return (
    <div className="container">
      <Orchestration />
    </div>
  );
};

export default App;
