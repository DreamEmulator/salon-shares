import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { TipCards } from "./components/galleries/tips/TipCards";
import { TitleText } from "./components/TitleText";
import { IntroBanner } from "./components/banners/IntroBanner";
import { SharingIsCaringBanner } from "./components/banners/SharingIsCaringBanner";
import { DownloadCTA } from "./components/banners/DownloadCTA";
import { Featured, IconVariant } from "./components/Featured";
import { motion } from "framer-motion";
import { HeroText } from "./components/HeroText";
import BooksGrid from "./components/galleries/books/BooksGrid";

// @ts-ignore
const Home = () => (
  <Grid gap={6}>
    <HeroText />
    <Text fontSize={[16, 18, 24]} color="muted" fontStyle="oblique">
      Salon (Gathering)
    </Text>
    <Text color="muted" fontStyle="italic">
      A salon is a gathering of people held by an inspiring host. During the gathering guests amuse one another and
      increase their knowledge through conversation.
    </Text>
    <Divider mb="6" color="pink.400" />
    <IntroBanner />
    <SimpleGrid gap="8">
      <TitleText title="Featured" />
      <Featured title={"Ik ben mijn Muze"}
                blurb={"Loes stapt in een lange lijn pittige tantes en publiceert gewoon even een boek. Verrijk je kijk op de kunstgeschiedenis en leer over deze ongelofelijke vrouwen."}
                src={"https://media.s-bol.com/j53vx2o48zOB/z6vk4A8/843x1200.jpg"}
                alt={"Ik ben mijn Muze door Loes Faber"}
                link={"https://libris.nl/boek?authortitle=loes-faber/ik-ben-mijn-muze--9789038808505"}
                icon={IconVariant.book}
      />
      <Featured title={"Kaetes"}
                blurb={"Shout out naar de handgemaakte keramiek van Katie. Prachtige vormen. Zachte kleuren. Sterke smaak."}
                src={"https://cdn.shopify.com/s/files/1/0614/1172/1460/collections/DSC_0106_1000x.jpg?v=1647290504"}
                alt={"Keramiek van Katie"}
                link={"https://www.kaetes.com/"}
                icon={IconVariant.site}
      />
      <Featured title={"I'm Speaking!"}
                blurb={"Sophie en Coco onderzoeken de verschillende manieren waarop het patriarchaat nog steeds springlevend is. Feiten, cijfers … actie!"}
                src={"https://www.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRXBGdXdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4bc6bc54df980ef8381254ab8289cfbe512048e1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpzR1ZEb01aM0poZG1sMGVVa2lDMk5sYm5SbGNnWTdCbFE2QzJWNGRHVnVkRWtpRERZd01IZzJNREFHT3daVU9neHhkV0ZzYVhSNWFWVTZEMk52Ykc5eWMzQmhZMlZKSWdselVrZENCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--8a9b4b1bc245a46b538f72d4d9b2ab0a7fbe8ac1/Schermafbeelding_is.jpg"}
                alt={"Keramiek van Katie"}
                link={"https://imspeaking.nl/"}
                icon={IconVariant.podcast}
      />
    </SimpleGrid>
    {/*Contact*/}
    <SharingIsCaringBanner />
    {/*Foto's*/}
    <div id="foto's" />
    <DownloadCTA />
    {/*Boekenplank*/}
    <HStack
      justifyContent="center" mt="xl" fontWeight="black"
      textShadow="2px 2px 20px #f0f"
      transition="1s"
      _hover={{ textShadow: "2px 2px 100px #f0f" }}
      px="6xl">
      <Text fontSize="7xl">🔮</Text>
      <Spacer />
      <Text
        color="white"
        fontSize="6xl"
      >
        Boekenplank
      </Text>
      <Spacer />
      <Text fontSize="7xl">📚</Text>
    </HStack>
    <BooksGrid />
    {/*TIPS*/}
    <TitleText title={"Tips"} />
    <TipCards />
    {/*DJ-Set*/}
    <Stack mb="200px">
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
    {/* Dream-Emulator Logo*/}
    <Center my="24">
      <Link href="https://dream-emulator.com">
        <Box
          as={motion.div}
          rounded="full"
          boxShadow={useColorModeValue(
            "0px 0px 0px 20px rgba(255,0,125,0.1)",
            "0px 0px 10px 50px rgba(255,0,125,0.1)"
          )}
          whileHover={{
            boxShadow: useColorModeValue(
              "0px 0px 0px 100px rgba(255,0,125,0.1)",
              "0px 0px 10px 1000px rgba(255,0,125,0.1)"
            )
          }}
          whileTap={{
            scale: useColorModeValue(
              2,
              100
            )
          }}
        >
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
        </Box>
      </Link>
    </Center>
  </Grid>
);

export default Home;
