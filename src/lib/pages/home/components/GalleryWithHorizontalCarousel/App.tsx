import { Box } from "@chakra-ui/react";
import { images } from "./_data";
import { Gallery } from "./Gallery";

export const PhotoGallery = () => {
  return <Gallery images={images} />;
};
