import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Box = styled(motion.div)({
  marginTop: "10vh",
  marginLeft: "auto",
  marginRight: "auto",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  backgroundColor: "#FF7800",
});

const EnterAnimation = (): JSX.Element => {
  return (
    <>
      <p>Enter Animation</p>
      <Box initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    </>
  );
};

export default EnterAnimation;
