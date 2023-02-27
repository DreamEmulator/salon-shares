import { Box } from "@chakra-ui/react";
import { getImages } from "./_data";
import { Gallery } from "./Gallery";
import { useState } from "react";

export const PhotoGallery = () => {
  const [images] = useState(getImages(1, 8));
  return (
    <Box rounded="lg" boxShadow="lg" p="5" maxW="3xl">
      <div id="foto's"></div>
      <Gallery images={images} />
    </Box>
  );
};
