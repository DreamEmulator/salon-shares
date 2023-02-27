import { Text } from "@chakra-ui/react";

interface TitleTextProps {
  title: string;
};

export const TitleText: React.FC<TitleTextProps> = ({ title }) => (
  <Text
    my="4"
    rounded="full"
    boxShadow="xl"
    alignItems="flex-start"
    backdropFilter="blur(6px) hue-rotate(20deg)"
    bgGradient="linear(-150deg,  #F0F, #FF0)"
    bgClip="text"
    fontSize="6xl"
    fontWeight="extrabold"
    align="center"
  >
    {title}
  </Text>
);
