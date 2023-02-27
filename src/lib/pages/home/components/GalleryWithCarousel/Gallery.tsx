import {
  AspectRatio,
  Box,
  IconButton,
  IconButtonProps,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Carousel, CarouselSlide, useCarousel } from "./Carousel";
import { ProductImage } from "./_data";

interface GalleryProps {
  images: ProductImage[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

export const Gallery = (props: GalleryProps) => {
  const { images, aspectRatio = 4 / 3, rootProps } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [ref, slider] = useCarousel({
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel)
  });

  const hasPrevious = currentSlide !== 0;
  const hasNext = currentSlide < images.length - 1;

  return (
    <Stack spacing="4" {...rootProps}>
      <Box
        position="relative"
        sx={{
          _hover: {
            "> button": {
              display: "inline-flex"
            }
          }
        }}
      >
        <Carousel ref={ref}>
          {images.map((image, i) => (
            <CarouselSlide key={i}>
              <AspectRatio
                ratio={aspectRatio}
                opacity={currentSlide === i ? 1 : 0.4}
                _hover={{ opacity: 1 }}
              >
                <Image src={image.src} objectFit="contain" alt={image.alt} fallback={<Skeleton />} loading="lazy" />
              </AspectRatio>
            </CarouselSlide>
          ))}
        </Carousel>
        {hasPrevious && (
          <CarouselIconButton
            pos="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.prev()}
            icon={<IoChevronBackOutline />}
            aria-label="Previous Slide"
          />
        )}

        {hasNext && (
          <CarouselIconButton
            pos="absolute"
            right="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label="Next Slide"
          />
        )}
        <Text>{`${currentSlide + 1}/${images.length + 1}`}</Text>
      </Box>
    </Stack>
  );
};

const CarouselIconButton = (props: IconButtonProps) => (
  <IconButton
    display="none"
    fontSize="lg"
    isRound
    boxShadow="base"
    bg={useColorModeValue("pink.200", "purple.400")}
    _hover={{
      bg: useColorModeValue("gray.100", "pink.700")
    }}
    _active={{
      bg: useColorModeValue("gray.200", "pink.600")
    }}
    _focus={{ boxShadow: "inerhit" }}
    _focusVisible={{ boxShadow: "outline" }}
    {...props}
  />
);
