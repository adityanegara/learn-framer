import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Circle = styled(motion.div)({
  backgroundColor: "darkorange",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
});

const EnterAnimation = (): JSX.Element => {
  return (
    <>
      <p>Enter Animation</p>
      <Circle
        animate={{ x: 100 }}
        initial={false}
      />
     <Circle
        animate={{ x: 100 }}
        initial={{x: 0}}
      />
    </>
  );
};

export default EnterAnimation;
