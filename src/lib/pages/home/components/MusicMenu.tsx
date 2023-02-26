import { Box, Button, Flex, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/all";

export const MusicMenu = () => (<Flex width="xl">
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Music
      </MenuButton>
      <MenuList minW="xl" p="4">
        {/*Gregor Schwellenbach*/}
        <Box borderRadius="xl" overflow="hidden">
          <iframe
            src="https://open.spotify.com/embed/track/4G1AT0N5LqGrwGPziL0Yf5?utm_source=generator" width="100%"
            height="152" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </MenuList>
    </Menu>
  </Flex>
);
