import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Button = styled(motion.button)({
  padding: "15px 25px",
  border: "1px solid #FF7517",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
});

const Gesture = () => {
  return (
    <Button
      initial={{ scale: 1 }}
      whileFocus={{backgroundColor: '#DC2F2F'}}
      whileInView={{ scale: 1,   backgroundColor: "#FF7517", }}
      whileTap={{ scale: 1.2, backgroundColor: "#3E3939" }}
      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
    >
      Gesture Button
    </Button>
  );
};

export default Gesture;
