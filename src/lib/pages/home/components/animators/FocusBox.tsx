import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode
};
export const FocusBox: React.FC<Props> = ({ children }) => (
  <Box
    as={motion.div}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    transition="0.5s"
  >
    {children}
  </Box>
);
