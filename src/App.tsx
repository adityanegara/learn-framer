import SimpleAnimation from "./Animation/SimpleAnimation/SimpleAnimation";
import Transition from "./Animation/Transition/Transition";
import EnterAnimation from "./Animation/EnterAnimation/EnterAnimation";
import ExitAnimation from "./Animation/ExitAnimation/ExitAnimation";
import KeyFrames from "./Animation/Keyframes/Keyframes";
import NullKeyFrame from "./Animation/Keyframes/NullKeyFrame";
import './index.css';

const App = () => {
  return (
    <div className="container">
      <NullKeyFrame />
    </div>
  );
};

export default App;
