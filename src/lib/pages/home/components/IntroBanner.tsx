import { Box, Button, Flex, Heading, Img, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export const IntroBanner = () => {
  return (
    <Flex
      as="section"
      minH="140px"
      position="relative"
      rounded="10"
      overflow="hidden"
    >
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "2xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl" px="8">
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
                color="pink.400"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Bekijk de foto's
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        boxShadow="lg"
        p="4"
        rounded="md"
        bg={useColorModeValue("pink.300", "blue.300")}
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/Salon+de+Bon+Bon+%231+🔮+-+Foto+103+van+142.jpeg"
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
    </Flex>
  );
};
