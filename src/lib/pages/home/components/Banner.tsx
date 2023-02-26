import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const Banner = () => (
  <Box
    as="section"
    bg="bg-surface"
    pt={{ base: "4", md: "8" }}
    pb={{ base: "12", md: "24" }}
    p="4"
    rounded="8"
    bgGradient="linear(270deg, #7928CA, #f98787)"
  >
    <Container colorScheme="white">
      <Stack spacing="1">
        <Heading size={{ base: "xs", md: "sm" }} fontWeight="extrabold" my="8">
          Sharing is caring
        </Heading>
        <Text color="muted">
          Wat jullie maar willen delen. Stuur het naar me op.
        </Text>
        <Text color="muted">
          Ik verzamel het hier allemaal op een leuke manier.
        </Text>
        <Text color="muted">
          Dan kunnen we daar altijd weer inspiratie uit putten ✨
        </Text>
      </Stack>
    </Container>
  </Box>
);
