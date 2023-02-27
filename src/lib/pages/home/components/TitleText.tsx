import { Text } from "@chakra-ui/react";

interface TitleTextProps {
  title: string;
};

export const TitleText: React.FC<TitleTextProps> = ({ title }) => (
  <Text
    mt="4"
    bgGradient="linear(-150deg,  #F0F, #FF0)"
    bgClip="text"
    fontSize="6xl"
    fontWeight="extrabold"
    align="center"
  >
    {title}
  </Text>
);
