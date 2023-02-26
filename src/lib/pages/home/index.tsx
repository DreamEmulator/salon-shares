import { Grid, Text } from "@chakra-ui/react";
import { Testimaonials } from "./components/Testimonial";
import { PhotoGallery } from "./components/GalleryWithHorizontalCarousel/App";
import { IntroBanner } from "./components/IntroBanner";

const Home = () => {
  return (
    <Grid gap={4}>
      <Text
        mt="4"
        bgGradient="linear(to-l, #7928CA, #f98787)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
      >
        Salon de BonBon #1
      </Text>
      <IntroBanner />
      <Text
        mt="4"
        bgGradient="linear(to-l, #f98787, #7928CA)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        Gallery
      </Text>
      <PhotoGallery />
      <Text mt="4" fontSize="2xl">
        Wat jullie maar willen delen. Stuur het naar me op (liefst met Telegram)
        Ik vind het leuk om er iets moois omheen te bouwen hier. Dan kunnen we
        daar altijd weer inspiratie uit putten ✨
      </Text>
      <Testimaonials />
    </Grid>
  );
};

export default Home;
