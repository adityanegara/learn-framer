import styled from "@emotion/styled";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Box = styled(motion.div)({
  backgroundColor: "darkorange",
  width: "100px",
  height: "100px",
  marginBottom: "100px",
});

const KeyFrames = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const renderCircle = (isVisible: boolean): JSX.Element | null => {
    return isVisible ? (
      <Box
        animate={{
          scale: [0, 1, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          backgroundColor: [
            "#222831",
            "#393E46",
            "#D65A31",
            "#EEEEEE",
            "#FF7517",
          ],
        }}
        exit={{
          scale: [1, 1, 2, 1, 0],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          backgroundColor: [
            "#FF7517",
            "#EEEEEE",
            "#D65A31",
            "#393E46",
            "#222831",
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
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

export default KeyFrames;
