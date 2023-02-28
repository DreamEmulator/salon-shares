import { Box, Center, Code, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const HeroText: React.FC = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
  const rotate = useTransform(x, [-150, 150], [-90, 90]);
  return (
    <Box as={motion.div}
         style={{
           x: x,
           // @ts-ignore
           scale: scale,
           // @ts-ignore
           rotate: rotate,
           cursor: "grab"
         }}
         drag
         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
         dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
         whileTap={{ cursor: "grabbing" }}
    >
      <Text
        my="16"
        bgGradient="linear(to-l, #7928CA, #f98787)"
        bgClip="text"
        fontSize={["3xl", "4xl", "5xl", "6xl"]}
        px="12"
        py="8"
        fontWeight="extrabold"
        boxShadow={useColorModeValue(
          "0px 0px 0px 20px rgba(255,0,125,0.1)",
          "0px 0px 10px 400px rgba(255,0,125,0.1)"
        )}
        textAlign="center"
        rounded="full"
        backdropFilter="blur(1px) saturate(80%) brightness(110%) opacity(0.10)"
      >
        Salon de Bon Bon #1
        <Center>
          <Code> 25.02.23 - Sint-Jobskade - Rotterdam </Code>
        </Center>
      </Text>
    </Box>
  );
};
