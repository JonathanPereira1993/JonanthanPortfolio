import React from "react";
import { motion, Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  offsetY?: number;
  className?: string;
};

const StaggeredListAnimation = ({
  children,
  delay = 0.1,
  duration = 0.4,
  offsetY = 20,
  className,
}: Props) => {
  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: offsetY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className={`staggered-list ${className}`}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredListAnimation;
