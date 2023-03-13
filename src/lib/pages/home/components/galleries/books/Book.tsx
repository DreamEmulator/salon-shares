import { Box, Center, Image, Link, Text } from "@chakra-ui/react";

export interface BookProps {
  title: string;
  tipper: string;
  cover: string;
  link: string;
}

const Book: React.FC<BookProps> = ({ title, cover, link }) => (
  <Center>
    <Box className="panel__image panel__image--book">
      <Link href={link} className="books__book__image">
        <Box className="books__book__img">
          <Image src={cover} />
        </Box>
      </Link>
    </Box>
    <Text as="h2">{title}</Text>
  </Center>
);

export default Book;
