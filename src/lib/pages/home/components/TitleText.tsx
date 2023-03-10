import { Text, useColorModeValue } from "@chakra-ui/react";

interface TitleTextProps {
  title: string;
}

export const TitleText: React.FC<TitleTextProps> = ({ title }) => (
  <Text
    my="24"
    rounded={12}
    backdropFilter="blur(6px)"
    bgGradient={useColorModeValue(
      `linear(90deg,  #FFF, #F00)`,
      "linear(-150deg,  #F0F, #FF0)"
    )}
    bgClip="text"
    fontSize="6xl"
    fontWeight="extrabold"
    align="center"
  >
    {title}
  </Text>
);
