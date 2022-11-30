import styled from "@emotion/styled";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const Box = styled("div")({
  width: "100px",
  height: "100px",
  backgroundColor: "darkorange",
  marginTop: "10px",
});

const list: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,

    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0, scale: 0.5},
  hidden: { opacity: 0, x: -100, scale: 0.3},
  exit: {opacity: 0, x: 100, scale: 0.5},
};

const Orchestration = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const renderList = (isVisible: boolean): JSX.Element | null => {
    return isVisible ? (
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={list}
      >
        <motion.li variants={item}>
          <Box />
        </motion.li>
        <motion.li variants={item}>
          <Box />
        </motion.li>
        <motion.li variants={item}>
          <Box />
        </motion.li>
      </motion.ul>
    ) : null;
  };

  return (
    <div>
      <button onClick={()=>{setIsVisible(!isVisible)}}>Toggle</button>
      <AnimatePresence>{renderList(isVisible)}</AnimatePresence>
    </div>
  );
};

export default Orchestration;
