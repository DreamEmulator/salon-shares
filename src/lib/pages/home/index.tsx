import {
  Box,
  Center,
  Code,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { TipCards } from "./components/TipCards";
import { TitleText } from "./components/TitleText";
import { IntroBanner } from "./components/IntroBanner";
import { SharingIsCaringBanner } from "./components/SharingIsCaringBanner";
import { DownloadCTA } from "./components/DownloadCTA";
import { GrApple, SiGooglephotos } from "react-icons/all";

// @ts-ignore
const Home = () => (
  <Grid gap={6}>
    <Text
      my="16"
      bgGradient="linear(to-l, #7928CA, #f98787)"
      bgClip="text"
      fontSize="7xl"
      px="8"
      py="8"
      fontWeight="extrabold"
      boxShadow={useColorModeValue(
        "0px 0px 0px 20px rgba(255,0,125,0.1)",
        "0px 0px 0px 2px rgba(240,240,240,0.2)"
      )}
      textAlign="center"
      rounded="full"
      backdropFilter="blur(1px) saturate(80%) brightness(110%) opacity(0.10)"
    >
      Salon de Bon Bon #1
      <Center>
        <Code> 25.02.23 - St. Jobs-Kade - Rotterdam </Code>
      </Center>
    </Text>

    <IntroBanner />
    {/*<EmptyTipCards />*/}
    <SharingIsCaringBanner />
    <div id="foto's" />
    <Box
      p="24"
      boxShadow="lg"
      rounded="xl"
      bg={useColorModeValue("pink.300", "blue.300")}
      overflow="hidden"
      bgGradient="linear(to-r,  yellow.400, pink.200)"
    >
      <Heading color="white" textAlign="center" as="h1" size="4xl" mb="12">Foto's</Heading>
      {/*<PhotoGallery />*/}
      <Center mb="12">
        <Link href="https://www.icloud.com/sharedalbum/#B0XGzFCC1GJrTWn" target="_blank">
          <Stack mx="12" justifyContent="center">
            <Icon as={GrApple} boxSize={24} />
            <Text textAlign="center">Apple Photo's</Text>
          </Stack>
        </Link>
        <Link href="https://photos.app.goo.gl/yFwBwvyZKrLrS363A" target="_blank">
          <Stack mx="12" justifyContent="center">
            <Icon as={SiGooglephotos} boxSize={24} />
            <Text textAlign="center">Google Photo's</Text>
          </Stack>
        </Link>
      </Center>
      <DownloadCTA />
    </Box>
    <Stack>
      <TitleText title={"Muziek"} />
      <Flex
        minH="xl"
        borderRadius="xl"
        overflow="hidden"
        justifyContent="center"
        p="4"
        bg="purple.50"
        boxShadow="lg"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tv56iyECa-Y?rel=0&amp;showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </Flex>
    </Stack>
    <Divider my="xl" />

    <TitleText title={"Tips"} />
    <TipCards />
    <Center mt="24">
      <Link href="https://dream-emulator.com">
        <Image
          maxHeight="200px"
          maxWidth="200px"
          rounded="full"
          overflow="hidden"
          width="full"
          height={{ base: "auto", md: "sm" }}
          objectFit="cover"
          src="https://media.tenor.com/SAJ5PrWD0DcAAAAC/diamond.gif"
        />
      </Link>
    </Center>
  </Grid>
);

export default Home;
