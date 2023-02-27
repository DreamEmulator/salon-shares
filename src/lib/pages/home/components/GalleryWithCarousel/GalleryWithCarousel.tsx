import { Box } from "@chakra-ui/react";
import { Gallery } from "./Gallery";
import { getImages } from "./_data";

export const PhotoGallery = () => {
  return (
    <Box
      rounded="2xl"
      overflow="hidden"
      mx="auto"
      w="3xl"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Gallery images={getImages({ from: 1, till: 142 })} />
    </Box>
  );
};
