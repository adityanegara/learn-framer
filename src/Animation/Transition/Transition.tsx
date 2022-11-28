import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Circle = styled(motion.div)({
  backgroundColor: "darkorange",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
});

const Transition = (): JSX.Element => {
  return (
    <>
      <Circle
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <Circle
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
    </>
  );
};

export default Transition;
