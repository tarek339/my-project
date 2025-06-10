"use client";

import { motion } from "framer-motion"; // easeOut muss hier nicht importiert werden, da es ein String ist

type Direction = "fromLeft" | "fromRight";

interface SlideInProps {
  children: React.ReactNode;
  direction?: Direction;
  show?: boolean;
}

const SlideIn = ({ children, direction, show }: SlideInProps) => {
  const initialX =
    !show && direction === "fromLeft"
      ? -100
      : !show && direction === "fromRight"
      ? 100
      : 0;

  return (
    <motion.div
      initial={{
        x: initialX,
        opacity: !show ? 0 : 1,
        width: show ? "0%" : "auto",
      }} // Startzustand außerhalb des Viewports
      whileInView={{ x: 0, opacity: 1, width: show ? "100%" : "auto" }} // Zielzustand, wenn im Viewport
      transition={{ duration: show ? 0.5 : 1, ease: "easeOut" }} // Übergangseigenschaften
      viewport={{ once: true, amount: 0.5 }} // Wichtig für Scroll-Animationen
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
