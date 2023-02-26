import { Center, Code, Divider, Flex, Grid, HStack, Icon, Text } from "@chakra-ui/react";
import { Testimonials } from "./components/Testimonial";
import { PhotoGallery } from "./components/GalleryWithHorizontalCarousel/App";
import { IntroBanner } from "./components/IntroBanner";
import { SharingIsCaringBanner } from "./components/SharingIsCaringBanner";
import { FiCloudRain, FiPlusCircle } from "react-icons/fi";

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
    <SharingIsCaringBanner />
    <Testimonials />
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
        <Icon as={FiPlusCircle} />
        <Text fontSize="md" fontWeight="medium">
          Rechter klik op foto om eentje te downloaden
        </Text>
      </HStack>
      <HStack>
        <Icon as={FiCloudRain} />
        <Text fontSize="md" fontWeight="medium">
          Hier om alles in een keer te hebben
        </Text>
      </HStack>
    </Flex>
    <Divider />
  </Grid>
);


export default Home;
