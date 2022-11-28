import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Box = styled(motion.div)({
  backgroundColor: "darkorange",
  width: "100px",
  height: "100px",
  marginBottom: "100px",
});

const NullKeyFrame = (): JSX.Element => {
  return (
    <div>
      <Box
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default NullKeyFrame;
