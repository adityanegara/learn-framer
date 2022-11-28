import { useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const AlignCenter = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const BoxContainer = styled(motion.div)({
  width: "200px",
  height: "200px",
  borderRadius: "20px",
  border: "3px solid steelblue",
  pointerEvents: "none",
});

const SimpleAnimation = (): JSX.Element => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(0);

  return (
    <AlignCenter>
      <div>
        <BoxContainer
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div>
        <label htmlFor="x-input">X</label>
        <input
          id="x-input"
          type="range"
          value={x}
          onChange={(e) => {
            setX(parseFloat(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="y-input">Y</label>
        <input
          id="y-input"
          type="range"
          value={y}
          onChange={(e) => {
            setY(parseFloat(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="rotate-input">Rotate</label>
        <input
          id="rotate-input"
          type="range"
          value={rotate}
          onChange={(e) => {
            setRotate(parseFloat(e.target.value));
          }}
        />
      </div>
    </AlignCenter>
  );
};

export default SimpleAnimation;
