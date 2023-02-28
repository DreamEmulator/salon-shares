import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { FiCloudRain } from "react-icons/fi";
import { IoFlowerOutline, SiGooglephotos } from "react-icons/all";
import { motion } from "framer-motion";

{
  /* DOWNLOAD CTA*/
}
export const DownloadCTA = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      p="24"
      rounded="xl"
      boxShadow="0px 0px 30px pink"
      bg={useColorModeValue("pink.300", "blue.300")}
      overflow="hidden"
      bgGradient="linear(45deg,  orange.400, pink.200)"
    >
      <Heading
        bgGradient="linear(100deg, white, yellow)"
        bgClip="text"
        textAlign="center"
        as="h1"
        size={["xl", "3xl", "4xl"]}
        mb="12"
      >
        Foto's
      </Heading>
      <Stack
        direction={["column", "column", "row"]}
        mb="12"
        justifyContent="space-between"
      >
        <Link
          href="https://www.icloud.com/sharedalbum/#B0XGzFCC1GJrTWn"
          target="_blank"
          color="white"
        >
          <Box
            as={motion.div}
            rounded="full"
            whileHover={{ scale: 1.05, boxShadow: "2px 2px 100px yellow" }}
            whileTap={{ scale: 0.9 }}
            transition="0.5s"
          >
            <Stack
              my="6"
              p="8"
              alignItems="center"
              rounded="full"
              color={useColorModeValue("white.100", "white")}
              backdropFilter="blur(6px)"
              boxShadow="2px 2px 30px yellow"
              border="2px"
              _hover={{
                color: useColorModeValue("gray.500", "white"),
                bg: useColorModeValue("pink.100", "purple.300")
              }}
            >
              <Icon as={IoFlowerOutline} boxSize={[16, 20, 24]} />
              <Text fontSize={[16, 20, 24]} fontWeight="bold" textAlign="center">
                Apple
              </Text>
            </Stack>
          </Box>
        </Link>
        <Link
          href="https://photos.app.goo.gl/yFwBwvyZKrLrS363A"
          target="_blank"
          color="white"
        >
          <Box
            as={motion.div}
            rounded="full"
            whileHover={{ scale: 1.05, boxShadow: "2px 2px 100px yellow" }}
            whileTap={{ scale: 0.9 }}
            transition="0.5s"
          >
            <Stack
              my="6"
              p="8"
              alignItems="center"
              rounded="full"
              color={useColorModeValue("white.100", "white")}
              backdropFilter="blur(6px)"
              boxShadow="2px 2px 30px yellow"
              border="2px"
              _hover={{
                color: useColorModeValue("gray.500", "white"),
                bg: useColorModeValue("pink.100", "purple.300")
              }}
            >
              <Icon as={SiGooglephotos} boxSize={[16, 20, 24]} />
              <Text fontSize={[16, 20, 24]} fontWeight="bold" textAlign="center">
                Google
              </Text>
            </Stack>
          </Box>
        </Link>
      </Stack>
      <Flex justify="space-around" cursor="pointer">
        <HStack
          onClick={onOpen}
          rounded="full"
          p="6"
          color={useColorModeValue("white.100", "white")}
          backdropFilter="blur(6px)"
          _hover={{
            color: useColorModeValue("gray.500", "white"),
            bg: useColorModeValue("pink.100", "purple.300"),
            boxShadow: "2xl"
          }}
        >
          <Icon as={FiCloudRain} boxSize="8" mx="4" />
          <Text fontSize="md" fontWeight="medium">
            Klik hier om alles in een keer te downloaden
          </Text>
        </HStack>
      </Flex>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent rounded="12" p="6" color="pink">
          <ModalHeader>Foto's Downloaden</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Klaar om 453.7 MB te downloaden?</ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link
              href="https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/Salon+de+Bon+Bon+%231+🔮.zip">
              <Button colorScheme="blue">Let's Do It</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
