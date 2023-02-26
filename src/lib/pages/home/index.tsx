import { Grid, Text } from "@chakra-ui/react";
import { Testimaonials } from "./components/Testimonial";
import { PhotoGallery } from "./components/GalleryWithHorizontalCarousel/App";
import { IntroBanner } from "./components/IntroBanner";

const Home = () => {
  return (
    <Grid gap={4}>
      <Text
        bgGradient="linear(to-l, #7928CA, #f98787)"
        bgClip="text"
        fontSize="7xl"
        fontWeight="extrabold"
      >
        Salon de BonBon #1
      </Text>
      <IntroBanner />
      <PhotoGallery />
      <Testimaonials />
    </Grid>
  );
};

export default Home;
