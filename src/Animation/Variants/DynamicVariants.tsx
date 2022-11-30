import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";

const ITEMS = [
  {
    id: 1,
    title: "1",
    backgroundColor: "#FED049",
  },
  {
    id: 2,
    title: "2",
    backgroundColor: "#CFFDE1",
  },
  {
    id: 3,
    title: "3",
    backgroundColor: "#68B984",
  },
  {
    id: 4,
    title: "4",
    backgroundColor: "#68B984",
  },
];

const Box = styled(motion.div)({
  width: "100px",
  height: "100px",
  backgroundColor: "darkorange",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
});

interface VariantsProps {
  i: number;
  backgroundColor: string;
}

const variants: Variants = {
  visible: ({ i, backgroundColor }: VariantsProps) => ({
    opacity: 1,
    backgroundColor: backgroundColor,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

const DynamicVariants = () => {
  return (
    <>
      {ITEMS.map((item, i) => (
        <Box
          custom={{ i: i, backgroundColor: item.backgroundColor }}
          animate="visible"
          initial="hidden"
          variants={variants}
        ></Box>
      ))}
    </>
  );
};

export default DynamicVariants;
