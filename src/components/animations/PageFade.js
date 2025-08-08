// src/components/PageFade.js
import React from 'react';
import { motion } from 'framer-motion';

const PageFade = ({ children, keyProp }) => (
  <motion.div
    key={keyProp}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    style={{ height: '100%' }}
  >
    {children}
  </motion.div>
);

export default PageFade;
