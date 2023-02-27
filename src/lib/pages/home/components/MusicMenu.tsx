import { Box, Button, Flex, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/all";

export const MusicMenu = () => (<Flex width="xl">
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Music
      </MenuButton>
      <MenuList minW="xl" p="4" zIndex="1000">
        <Box borderRadius="16" overflow="hidden">
          <iframe
            src="https://open.spotify.com/embed/playlist/4W5hrvWXV4eCD9TPPshuuA?utm_source=generator&theme=0"
            width="100%" height="152" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </Box>
      </MenuList>
    </Menu>
  </Flex>
);

// {/*MIX*/}
// <iframe
//   src="https://open.spotify.com/embed/playlist/6B0r4j8CHKHz21srXuPHVw?utm_source=generator&theme=0"
//   width="100%" height="352" frameBorder="0"
//   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
// ></iframe>

// {/*Grace Jones - Pars*/}
// <iframe
//   src="https://open.spotify.com/embed/track/6wphsmIFTdYIQKLxqHYLq9?utm_source=generator" width="100%"
//   height="152" frameBorder="0"
//   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
// ></iframe>

// {/*Gregor Schwellenbach*/}
// <iframe
//   src="https://open.spotify.com/embed/track/4G1AT0N5LqGrwGPziL0Yf5?utm_source=generator" width="100%"
//   height="152" frameBorder="0"
//   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
// ></iframe>
