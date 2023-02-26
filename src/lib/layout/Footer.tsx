import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text color="pink" fontSize="l" fontWeight="bold">
        <Link href="sebastiaan-hols.com" isExternal>
          sebastiaan-hols.com
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
