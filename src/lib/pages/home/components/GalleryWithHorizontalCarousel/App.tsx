import { Box } from "@chakra-ui/react";
import { images } from "./_data";
import { Gallery } from "./Gallery";

export const PhotoGallery = () => {
  return (
    <Box rounded="lg" boxShadow="lg" p="5">
      <div id="foto's"></div>
      <Gallery images={images} />
    </Box>
  );
};
