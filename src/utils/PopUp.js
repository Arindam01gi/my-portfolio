import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PopUp = ({
  children,
  duration = 0.5, // Default duration if not provided
  delay = 0, // Default delay if not provided
  whileInView = true, // Controls if the animation should trigger only when in view
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 }); // Triggers when 20% of the element is visible

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView || !whileInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PopUp;
