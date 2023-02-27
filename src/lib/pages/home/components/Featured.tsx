import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

interface FeaturedProps {
  title: string;
  blurb: string;
  src: string;
  alt: string;
}

export const Featured: React.FC<FeaturedProps> = ({ title, blurb, src, alt }) => (
  <Card
    rounded="12"
    direction={{ base: "column", sm: "row" }}
    overflow="hidden"
    boxShadow="2px 2px 40px pink"
    color={useColorModeValue("purple.600", "pink")}
  >
    <Image
      objectFit="cover"
      maxW={{ base: "100%", sm: "200px" }}
      alt={alt}
      src={src}
    />
    <Stack>
      <CardBody>
        <Heading size="md">{title}</Heading>
        <Text py="2">
          {blurb}
        </Text>
      </CardBody>
      <CardFooter>
        <Button color={useColorModeValue("purple.400", "pink")}>
          Checken
        </Button>
      </CardFooter>
    </Stack>
  </Card>
);