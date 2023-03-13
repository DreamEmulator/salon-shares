import React from "react";
import { Text } from "@chakra-ui/react";

export interface GlowyTextProps {
  text: string;
}

const GlowyText: React.FC<GlowyTextProps> = ({ text }) => (
  <Text
    mt="xl"
    fontSize="3xl"
    fontWeight="black"
    textShadow="2px 2px 20px #f0f"
    transition="1s"
    _hover={{ textShadow: "2px 2px 100px #f0f" }}>
    {text}
  </Text>
);

export default GlowyText;
