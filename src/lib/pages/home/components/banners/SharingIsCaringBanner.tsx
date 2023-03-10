import { Box, Container, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FocusBox } from "../animators/FocusBox";

export const SharingIsCaringBanner = () => (
  <Box
    as={motion.div}
    bg="bg-surface"
  >
    <Container py={{ base: "16", md: "24" }}>
      <Stack backdropBlur="6px" direction={{ base: "column", md: "row" }}
             spacing={{ base: "12", lg: "16" }}>
        <Stack>
          <Heading size={{ base: "md", md: "xl" }} fontWeight="extrabold" my="8">
            Sharing is caring
          </Heading>
          <Text fontSize="xl">
            Wat jullie maar willen delen.
          </Text>
          <Text fontSize="xl">
            Stuur het naar me op.
          </Text>
          <Text fontSize="xl">
            Ik verzamel het hier allemaal op een leuke manier.
          </Text>
          <Text fontSize="xl">
            Dan kunnen we daar altijd weer inspiratie uit putten 😃
          </Text>
        </Stack>
        <Link href="https://t.me/dream_emulator" target="_blank">
          <FocusBox>
            <Image
              rounded="8"
              overflow="hidden"
              width="full"
              height={{ base: "auto", md: "sm" }}
              objectFit="cover"
              src="https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/let's_connect_on_telegram.jpeg"
            />
          </FocusBox>
        </Link>
      </Stack>
    </Container>
  </Box>
);
// export const SharingIsCaringBanner = () => (
//   <Box
//     as="section"
//     bg="bg-surface"
//     pt={{ base: "4", md: "8" }}
//     pb={{ base: "12", md: "24" }}
//     p="4"
//     rounded="8"
//     bgGradient="linear(270deg, #7928CA, #f98787)"
//   >
//
//
//     <Box>
//       <Image
//         borderRadius="8"
//         src="https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/let's_connect_on_telegram.jpeg"
//         alt="Sebas Telegram connection"
//       />
//     </Box>
//     <Box>
//       <VStack w="50%">
//         <Heading size={{ base: "xs", md: "sm" }} fontWeight="extrabold" my="8">
//           Sharing is caring
//         </Heading>
//         <Text color="muted">
//           Wat jullie maar willen delen. Stuur het naar me op.
//         </Text>
//         <Text color="muted">
//           Ik verzamel het hier allemaal op een leuke manier.
//         </Text>
//         <Text color="muted">
//           Dan kunnen we daar altijd weer inspiratie uit putten ✨
//         </Text>
//       </VStack>
//     </Box>
//   </Box>
// );
