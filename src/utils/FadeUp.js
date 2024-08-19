import React from 'react'
import { motion } from "framer-motion";

const FadeUp = ({
    children,
    duration,
    delay,
    whileInView = false,
  }) => {

    const animation = {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: "easeInOut",
          delay,
        },
      };



  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={whileInView ? animation : {}}
      animate={!whileInView ? animation : {}}
    >
      {children}
    </motion.div>
  )
}

export default FadeUp