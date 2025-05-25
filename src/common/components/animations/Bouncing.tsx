"use client";

import { motion } from "framer-motion";
import { JSX, PropsWithChildren } from "react";

interface IBouncingProps extends PropsWithChildren {
  delay?: number;
}

export default function Bouncing({
  children,
  delay,
}: IBouncingProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: {
          type: "spring",
          visualDuration: 0.4,
          bounce: 0.2,
          delay: delay ? delay : 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
