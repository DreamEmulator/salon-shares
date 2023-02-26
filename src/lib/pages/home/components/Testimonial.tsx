import {
  Box,
  chakra,
  Flex,
  HTMLChakraProps,
  Icon,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { MdReceipt } from "react-icons/all";

interface TestimonialProps {
  logo: ReactNode;
  author: string;
  role: string;
  image: string;
  colorScheme: string;
  children: ReactNode;
}

const Testimonial = (props: TestimonialProps) => {
  const { logo, children, image, author, role, colorScheme: c } = props;
  const accentColor = mode(`${c}.600`, `${c}.400`);
  return (
    <Flex
      direction="column"
      rounded={{ md: "lg" }}
      bg={mode("white", "gray.700")}
      shadow="lg"
    >
      <Flex
        direction="column"
        position="relative"
        mb="4"
        textAlign="center"
        justify="center"
        align="center"
        pt="10"
        pb="6"
        px="10"
      >
        <Box mb="2">{logo}</Box>
        <Box as="blockquote" maxW="340px" mx="auto" my="4">
          <Box
            position="absolute"
            top="6"
            left="5"
            display={{ base: "none", md: "inline" }}
            fontSize="3xl"
            color={accentColor}
            opacity={0.2}
          >
            <ImQuotesLeft />
          </Box>
          <Text fontSize="lg">{children}</Text>
          <Box
            position="absolute"
            bottom="-2"
            right="5"
            display={{ base: "none", md: "inline" }}
            fontSize="3xl"
            color={accentColor}
            opacity={0.2}
          >
            <ImQuotesRight />
          </Box>
        </Box>
      </Flex>
      <Flex
        direction="column"
        position="relative"
        align="center"
        justify="center"
        color="white"
        px="6"
        pb="8"
      >
        <Box
          position="absolute"
          left="0"
          bottom="0"
          w="full"
          h="full"
          roundedBottom={{ md: "lg" }}
          overflow="hidden"
          _before={{
            content: `''`,
            display: "block",
            position: "absolute",
            bottom: "0",
            left: "-10%",
            width: "120%",
            height: "90%",
            roundedTop: "120%",
            bg: accentColor,
          }}
        />
        <Img
          src={image}
          alt={author}
          rounded="full"
          border="6px solid"
          borderColor={accentColor}
          position="relative"
          mt="-5"
          w="16"
          h="16"
          objectFit="cover"
        />
        <Box position="relative" fontSize="sm" mt="3" textAlign="center">
          <Text as="h3" fontWeight="bold" fontSize="md">
            {author}
          </Text>
          <Text>{role}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export const Testimaonials = () => {
  return (
    <Box as="section" bg={mode("gray.100", "gray.800")} py="12">
      <Box maxW={{ base: "xl", md: "6xl" }} mx="auto" px={{ md: "8" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
          <Testimonial
            logo={<Icon as={MdReceipt} boxSize={6} />}
            author="Kunle Adigun"
            role="Jop"
            colorScheme="blue"
            image="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI2fHxtYW4lMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Hier komt een beschrijving van een tip. Bijv. een boek, film, plek
            op de wereld of een mooi stuk muziek.
          </Testimonial>
          <Testimonial
            logo={<Icon as={MdReceipt} boxSize={6} />}
            author="Johanna Kate"
            role="Kate"
            colorScheme="pink"
            image="https://images.unsplash.com/photo-1486116736668-6384736c9330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxsYWR5JTIwaGVhZHNob3R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
          >
            Hier komt een beschrijving van een tip. Bijv. een boek, film, plek
            op de wereld of een mooi stuk muziek.
          </Testimonial>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
