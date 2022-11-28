import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "@emotion/styled";

const Circle = styled(motion.div)({
  backgroundColor: "darkorange",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
});

const ExitAnimation = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const renderCircle = (isVisible: boolean): JSX.Element | null => {
    return isVisible ? (
      <Circle
        initial={{ opacity: 0, scale: 0.5 }}
        exit={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
    ) : null;
  };
  return (
    <div>
      <AnimatePresence>{renderCircle(isVisible)}</AnimatePresence>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle Visible
      </button>
    </div>
  );
};

export default ExitAnimation;
