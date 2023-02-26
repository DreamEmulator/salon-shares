import { Center, Code, Divider, Flex, Grid, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { Testimaonials } from "./components/Testimonial";
import { PhotoGallery } from "./components/GalleryWithHorizontalCarousel/App";
import { IntroBanner } from "./components/IntroBanner";
import { Banner } from "./components/Banner";

// @ts-ignore
const Home = () => (
  <Grid gap={4}>
    <Text
      mt="4"
      bgGradient="linear(to-l, #7928CA, #f98787)"
      bgClip="text"
      fontSize="7xl"
      fontWeight="extrabold"
    >
      Salon de Bon Bon #1
    </Text>
    <Center>
      <Code>25.02.23 - St. Jobs-Kade - Rotterdam</Code>
    </Center>
    <IntroBanner />
    <Banner />
    <Center>
      <Image
        borderRadius="8"
        src="https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/let's_connect_on_telegram.jpeg"
        alt="Sebas Telegram connection"
      />
    </Center>
    <Testimaonials />
    <Text
      mt="4"
      bgGradient="linear(-150deg,  #F0F, #FF0)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
      align="center"
    >
      Foto's
    </Text>
    <PhotoGallery />
    <Flex justify="space-around">
      <HStack>
        <Icon viewBox="0 0 200 200" color="pink.400">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Text fontSize="md" fontWeight="medium">
          Rechter klik op foto om eentje te downloaden
        </Text>
      </HStack>
      <HStack>
        <Icon viewBox="0 0 200 200" color="green.400">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Text fontSize="md" fontWeight="medium">
          Hier om alles in een keer te hebben
        </Text>
      </HStack>
    </Flex>
    <Divider />
  </Grid>
);


export default Home;
