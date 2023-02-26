import { Flex } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";
import { MusicMenu } from "../pages/home/components/MusicMenu";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <MusicMenu />
      <ThemeToggle />
    </Flex>
  );
};

export default Header;
