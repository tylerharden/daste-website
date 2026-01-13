import React from 'react';
import { motion } from 'framer-motion';

type PageFadeProps = {
  children: React.ReactNode;
  keyProp: string;
};

const PageFade = ({ children, keyProp }: PageFadeProps) => (
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
