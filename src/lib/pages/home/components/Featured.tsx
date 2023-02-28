import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { FaGlobe, FiBook, FiHeadphones } from "react-icons/all";
import { FocusBox } from "./FocusBox";

interface FeaturedProps {
  title: string;
  blurb: string;
  src: string;
  alt: string;
  link: string;
  icon: IconVariant;
}

export enum IconVariant {
  book,
  podcast,
  site
}

export const Featured: React.FC<FeaturedProps> = ({ title, blurb, src, alt, link, icon }) => (
  <FocusBox>
    <Link href={link} target="_blank">
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
          <CardFooter justifyContent="flex-end">
            <Button colorScheme="purple">
              {icon == IconVariant.book && <Icon as={FiBook} />}
              {icon == IconVariant.site && <Icon as={FaGlobe} />}
              {icon == IconVariant.podcast && <Icon as={FiHeadphones} />}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Link>
  </FocusBox>
);
