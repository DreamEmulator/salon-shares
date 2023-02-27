import {
  Box,
  Center,
  Code,
  Divider,
  Flex,
  Grid,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { TipCards } from "./components/TipCards";
import { TitleText } from "./components/TitleText";
import { IntroBanner } from "./components/IntroBanner";
import { SharingIsCaringBanner } from "./components/SharingIsCaringBanner";
import { DownloadCTA } from "./components/DownloadCTA";
import { Featured } from "./components/Featured";

// @ts-ignore
const Home = () => (
  <Grid gap={6}>
    <Text
      my="16"
      bgGradient="linear(to-l, #7928CA, #f98787)"
      bgClip="text"
      fontSize={["3xl", "4xl", "5xl", "6xl"]}
      px="12"
      py="8"
      fontWeight="extrabold"
      boxShadow={useColorModeValue(
        "0px 0px 0px 20px rgba(255,0,125,0.1)",
        "0px 0px 10px 400px rgba(255,0,125,0.1)"
      )}
      textAlign="center"
      rounded="full"
      backdropFilter="blur(1px) saturate(80%) brightness(110%) opacity(0.10)"
    >
      Salon de Bon Bon #1
      <Center>
        <Code> 25.02.23 - Sint-Jobskade - Rotterdam </Code>
      </Center>
    </Text>

    <Text fontSize={[16, 18, 24]} color="muted" fontStyle="oblique">
      Salon (Gathering)
    </Text>
    <Text color="muted" fontStyle="italic">
      A salon is a gathering of people held by an inspiring host. During the gathering they amuse one another and
      increase their knowledge through conversation.
    </Text>
    <Divider my="6" color="pink.400" />
    <IntroBanner />
    <SimpleGrid gap="8">
      <TitleText title="Featured" />
      <Featured title={"Ik ben mijn Muze"}
                blurb={"Loes stapt in een lange lijn pittige tantes en publiceert gewoon even een boek. Verrijk je kijk op de kunstgeschiedenis en leer over deze ongelofelijke vrouwen."}
                src={"https://media.s-bol.com/j53vx2o48zOB/z6vk4A8/843x1200.jpg"}
                alt={"Ik ben mijn Muze door Loes Faber"}
                link={"https://libris.nl/boek?authortitle=loes-faber/ik-ben-mijn-muze--9789038808505"}
      />
      <Featured title={"Kaetes"}
                blurb={"Shout out naar de handgemaakte keramiek van Katie. Prachtige vormen. Zachte kleuren. Sterke smaak."}
                src={"https://cdn.shopify.com/s/files/1/0614/1172/1460/collections/DSC_0106_1000x.jpg?v=1647290504"}
                alt={"Keramiek van Katie"}
                link={"https://www.kaetes.com/"}
      />
    </SimpleGrid>
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
      <DownloadCTA />
    </Box>
    <TitleText title={"Tips"} />
    <TipCards />
    <Stack>
      <TitleText title={"Rotterdam"} />
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
    <Center my="24">
      <Link href="https://dream-emulator.com">
        <Image
          boxShadow={useColorModeValue(
            "0px 0px 0px 20px rgba(255,0,125,0.1)",
            "0px 0px 10px 50px rgba(255,0,125,0.1)"
          )}
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
