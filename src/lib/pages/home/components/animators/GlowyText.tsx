import React from "react";
import { Text, TypographyProps, useColorModeValue } from "@chakra-ui/react";

export interface GlowyTextProps {
  text: string;
  fontSize: TypographyProps["fontSize"];
}

const GlowyText: React.FC<GlowyTextProps> = ({ text, fontSize }) => (
  <Text
    color={useColorModeValue("palegoldenrod", "springgreen")}
    mt="xl"
    fontSize={fontSize}
    fontWeight="black"
    textShadow="2px 2px 2px #f0f"
    transition="1s"
    _hover={{ textShadow: "2px 2px 10px #f0f" }}>
    {text}
  </Text>
);

export default GlowyText;
