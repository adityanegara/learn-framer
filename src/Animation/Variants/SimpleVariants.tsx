import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "@emotion/styled";

const SimpleVariantsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const Box = styled(motion.div)({
  width: "100px",
  height: "100px",
  marginBottom: "100px",
});

const variants: Variants = {
  visible: {
    opacity: 1,
    backgroundColor: "darkorange",
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    scale: [0.9, 0.8, 0.7, 0.6],
    opacity: 0,
    backgroundColor: ["darkorange", "#e67e00", "#cc700", "#b36200"],
    transition: {
      duration: 1,
      ease: "easeIn",
      times: [0, 0.3, 0.6, 1],
    },
  },
};

const SimpleVariants = (): JSX.Element => {
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(false);

  const renderBox = (isBoxVisible: boolean): JSX.Element | null => {
    return isBoxVisible ? (
      <Box variants={variants} initial="hidden" animate="visible" exit="exit" />
    ) : null;
  };

  return (
    <SimpleVariantsContainer>
      <button
        onClick={() => {
          setIsBoxVisible(!isBoxVisible);
        }}
      >
        Toggle Box
      </button>
      <AnimatePresence>{renderBox(isBoxVisible)}</AnimatePresence>
    </SimpleVariantsContainer>
  );
};

export default SimpleVariants;
