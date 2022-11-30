import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const list: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item: Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
  exit: { opacity: 0, x: 100 },
};

const PropagationVariants = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const renderList = (isVisible: boolean): JSX.Element | null => {
    return isVisible ? (
      <motion.ul initial="hidden" animate="visible" exit="hidden" variants={list}>
        <motion.li
          variants={item}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          1
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          2
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          3
        </motion.li>
      </motion.ul>
    ) : null;
  };
  return (
    <AnimatePresence>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle List
      </button>
      {renderList(isVisible)}
    </AnimatePresence>
  );
};

export default PropagationVariants;
