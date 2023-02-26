import { Box, Button, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";

export const IntroBanner = () => {
  return (
    <Box
      bg="gray.800"
      as="section"
      minH="140px"
      position="relative"
      rounded="10"
      overflow="hidden"
    >
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Een bijzondere avond vol sterren.
            </Heading>
            <Text fontSize={{ md: "2xl" }} mt="4" maxW="lg">
              Werkelijk wonderlijk wat voor een sfeer mensen met passie kunnen
              maken. Hierbij mijn voorzet om zoveel mogelijk kennis,
              vriendschappen, inzichten en vergezichten te delen 👇
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
            >
              <Button
                as="a"
                href="#foto's"
                colorScheme="purple"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Foto's
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        boxShadow="lg"
        p="2"
        rounded="md"
        bg="white"
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/HOLS0749.JPG"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  );
};
