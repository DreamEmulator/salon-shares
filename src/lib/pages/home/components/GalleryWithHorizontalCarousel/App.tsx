import { Box } from "@chakra-ui/react";
import { GalleryImage, GetAssetsProps, getThumbnails } from "./_data";
import { Gallery } from "./Gallery";
import { useState } from "react";

export const PhotoGallery = () => {
  const [getAssetsState, setAssetsState] = useState<GetAssetsProps>({ from: 1, till: 8 });
  const [images, setImages] = useState<GalleryImage[]>(getThumbnails(getAssetsState));

  // Todo: Wire up the progressive loading
  // useEffect(() => {
  //   setImages(getThumbnails(getAssetsState));
  //   console.log(images);
  // }, [getAssetsState]);

  return (
    <Box rounded="lg" boxShadow="lg" p="5" maxW="3xl">
      <div id="foto's"></div>
      <Gallery images={images} />
    </Box>
  );
};
