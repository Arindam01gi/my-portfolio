import React from 'react'
import { motion } from "framer-motion";

const FadeRight = ({ children, duration, delay, whileInView = false }) => {
    const animation = {
        opacity: 1,
        x: 0,
        transition: {
            duration,
            ease: "easeInOut",
            delay,
        },
    };
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={whileInView ? animation : {}}
            animate={!whileInView ? animation : {}}
        >
            {children}
        </motion.div>
    )
}

export default FadeRight