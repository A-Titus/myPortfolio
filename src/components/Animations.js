import React from 'react';
import { motion } from "framer-motion"

export const Animations = () => (
    <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"

  >
    <motion.path d="M 18 6 L 6 18"  />
    <motion.path d="M 6 6 L 18 18"  />
  </motion.svg> 
)