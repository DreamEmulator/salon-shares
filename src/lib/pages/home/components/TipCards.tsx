import {
  Box,
  Flex,
  Icon,
  Img,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  useColorModeValue
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { AiOutlineCoffee, BiCamera, BiMicrophone, BsHeadphones, FiBook, FiShare2 } from "react-icons/all";

interface TestimonialProps {
  logo: ReactNode;
  tipTitle: string;
  tipGiver: string;
  image: string;
  link?: string;
  colorScheme: string;
  children: ReactNode;
}

const Testimonial = (props: TestimonialProps) => {
  const {
    logo,
    children,
    image,
    tipTitle,
    tipGiver,
    colorScheme: c,
    link
  } = props;
  const accentColor = mode(`${c}.200`, `${c}.400`);
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`
  ];
  return (
    <Flex
      rounded="xl"
      overflow="hidden"
      _after={{
        content: "\"\"",
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`
      }}
      _before={{
        content: "\"\"",
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        backgroundImage: backgrounds[Math.floor(Math.random() * 4)]
      }}
      direction="column"
    >
      <div id={tipTitle.replace(" ", "_").toLowerCase()}></div>
      <Link href={link} target="_blank">
        <Flex
          bg={useColorModeValue("teal.50", `purple.500`)}
          direction="column"
          position="relative"
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
          bg={useColorModeValue("teal.50", "purple.500")}
        >
          <Box
            boxShadow="xl"
            position="absolute"
            left="0"
            bottom="0"
            w="full"
            h="full"
            bg={useColorModeValue("teal.50", "purple.500")}
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
              bg: accentColor
            }}
          />
          <Img
            src={image}
            alt={tipTitle}
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
            <Text as="h3" fontWeight="bold" fontSize={[16, 18, 20]}>
              {tipTitle}
            </Text>
            <Text fontSize={[16, 18, 20]}>{tipGiver}</Text>
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};

export const EmptyTipCards = () => {
  return (
    <Box as="section" py="12" p="6" rounded="md">
      <Box maxW={{ base: "xl", md: "6xl" }} mx="auto" px={{ md: "8" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="10"
          gridTemplateRows="masonry"
        >
          <Testimonial
            logo={<Icon as={FiBook} boxSize={6} />}
            tipTitle="Van Sebas"
            tipGiver="Voor Iedereen"
            colorScheme="orange"
            image="https://sebastiaan-hols.com/images/1544340934A2C58A03-98A6-48BD-BF0D-1CCA16F87422.jpeg"
          >
            Hier komt dan bijv een boek, film, plek op de wereld of een mooi
            stuk muziek. We overstromen van de aanknopingen.
          </Testimonial>
          <Testimonial
            logo={<Icon as={FiShare2} boxSize={6} />}
            tipTitle="Van Sebas"
            tipGiver="Voor Loes"
            colorScheme="pink"
            image="https://sebastiaan-hols.com/images/1654380598A0FFBA21-2203-4125-BEE9-C55230815291.jpeg"
          >
            Een Scythian Princess voor Loes, This is Water voor Katey. Goethe's
            Theory of Colors voor mijn camera koningin.
          </Testimonial>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

// TIPS:
export const TipCards = () => {
  return (
    <Box as="section" py="12" p="6" rounded="md">
      <Box maxW={{ base: "xl", md: "6xl" }} mx="auto" px={{ md: "8" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="6"
          gridTemplateRows="masonry"
        >
          <Testimonial
            logo={<Icon as={FiShare2} boxSize={6} />}
            tipTitle="This is Water"
            tipGiver="Tip van Bas"
            colorScheme="pink"
            link="https://youtu.be/ms2BvRbjOYo"
            image="https://www.littlebrown.com/wp-content/uploads/2022/08/DavidFosterWallace_INFINITEJEST-4.jpg?fit=3123%2C2054"
          >
            David Foster Wallace drukt in simpel, diep en grappig taalgebruik
            uit wat the Liberal Arts Education echt kan brengen.
          </Testimonial>
          <Testimonial
            logo={<Icon as={FiBook} boxSize={6} />}
            tipTitle="The Scythian Princess"
            tipGiver="Tip van Bas"
            colorScheme="orange"
            link="https://www.thearchaeologist.org/blog/meet-the-2500-year-old-siberian-ice-maiden-and-her-tattoos"
            image="https://preview.redd.it/what-do-you-think-of-this-5th-century-bc-scythian-deer-v0-mbpivqjrx8v81.jpg?auto=webp&s=55fc5f47dd01b7668009c6416504e5024100ed29"
          >
            Scythian Ice Princess is een ongelofelijke dame met een hele
            bijzondere tatoeage.
          </Testimonial>
          <Testimonial
            logo={<Icon as={BiMicrophone} boxSize={6} />}
            tipTitle="I'm speaking"
            tipGiver="Tip van Lisa"
            colorScheme="green"
            link="https://www.buzzsprout.com/1549861"
            image="https://www.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRXBGdXdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4bc6bc54df980ef8381254ab8289cfbe512048e1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpzR1ZEb01aM0poZG1sMGVVa2lDMk5sYm5SbGNnWTdCbFE2QzJWNGRHVnVkRWtpRERZd01IZzJNREFHT3daVU9neHhkV0ZzYVhSNWFWVTZEMk52Ykc5eWMzQmhZMlZKSWdselVrZENCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--8a9b4b1bc245a46b538f72d4d9b2ab0a7fbe8ac1/Schermafbeelding_is.jpg"
          >
            In de podcast I’m Speaking onderzoeken Sophie van Gool en Coco van
            Beveren de verschillende manieren waarop het patriarchaat nog steeds
            springlevend is. Feiten, cijfers … actie!
          </Testimonial>
          <Testimonial
            logo={<Icon as={AiOutlineCoffee} boxSize={6} />}
            tipTitle="Café Willemsbrug"
            tipGiver="Tip van Bas"
            colorScheme="blue"
            link="https://goo.gl/maps/9QaoHR8XXVmjVn2d9"
            image="https://sebastiaan-hols.com/img/frontend/thumbs/das_boot_thumb.png"
          >
            Cafe Willemsbrug. De echtste plek in Rotterdam voor een bakkie en
            een goed gesprek.
          </Testimonial>
          <Testimonial
            logo={<Icon as={BiCamera} boxSize={6} />}
            tipTitle="Fotomuseum App"
            tipGiver="Tip van Bas"
            colorScheme="red"
            link="https://www.nederlandsfotomuseum.nl/eregalerij-app/"
            image="https://eregalerij.nederlandsfotomuseum.nl/build/img/home.jpg"
          >
            De Eregalerij is een hele gave plek om te leren kijken naar
            fotografie. De app zit ook vol mooie animaties. Dus zeker checken 😇
          </Testimonial>
          <Testimonial
            logo={<Icon as={BsHeadphones} boxSize={6} />}
            tipTitle="Podcast: Sophie en Coco naar het einde van de loonkloof"
            tipGiver="Tip van Lisa"
            colorScheme="pink"
            link="https://ikverdienmeer.com/podcast-sophie-en-coco-naar-het-einde-van-de-loonkloof/"
            image="https://ikverdienmeer.com/wp-content/uploads/2022/11/iceland.jpg"
          >
            Sophie & Coco reisden naar IJsland om met de vrouwen te spreken die
            deze staking organiseerden. Hoewel het inmiddels bijna 50 jaar
            geleden is, herinneren mensen zich de staking nog als de dag van
            gisteren.
          </Testimonial>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
