import {
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

{
  /* DOWNLOAD CTA*/
}
export const DownloadCTA = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading
        bgGradient="linear(to-l, #ac58ff, #919191)"
        bgClip="text"
        textAlign="center"
        as="h1"
        size={["xl", "3xl", "4xl"]}
        mb="12">Foto's</Heading>
      <Stack direction={["column", "column", "row"]} mb="12" justifyContent="space-between">
        <Link href="https://www.icloud.com/sharedalbum/#B0XGzFCC1GJrTWn" target="_blank" color="white">
          <Stack
            my="6"
            p="8"
            alignItems="center"
            rounded="full"
            color={useColorModeValue("white.100", "white")}
            backdropFilter="blur(6px)"
            boxShadow="2px 2px 30px white"
            border="2px"
            _hover={{
              color: useColorModeValue("gray.500", "white"),
              bg: useColorModeValue("pink.100", "purple.300"),
              boxShadow: "2xl"
            }}
          >
            <Icon as={IoFlowerOutline} boxSize={[16, 20, 24]} />
            <Text fontSize={[16, 20, 24]} fontWeight="bold" textAlign="center">Apple</Text>
          </Stack>
        </Link>
        <Link href="https://photos.app.goo.gl/yFwBwvyZKrLrS363A" target="_blank" color="white">
          <Stack
            my="6"
            p="8"
            alignItems="center"
            rounded="full"
            color={useColorModeValue("white.100", "white")}
            backdropFilter="blur(6px)"
            boxShadow="2px 2px 30px white"
            border="2px"
            _hover={{
              color: useColorModeValue("gray.500", "white"),
              bg: useColorModeValue("pink.100", "purple.300"),
              boxShadow: "2xl"
            }}>
            <Icon as={SiGooglephotos} boxSize={[16, 20, 24]} />
            <Text fontSize={[16, 20, 24]} fontWeight="bold" textAlign="center">Google</Text>
          </Stack>
        </Link>
      </Stack>
      <Flex justify="space-around" cursor="pointer">
        <HStack

          onClick={onOpen}
          rounded="full"
          p="6"
          color={useColorModeValue("white.100", "white")}
          backdropFilter="blur(6px)"

          border="2px"
          _hover={{
            color: useColorModeValue("gray.500", "white"),
            bg: useColorModeValue("pink.100", "purple.300"),
            boxShadow: "2xl"
          }}
        >
          <Icon as={FiCloudRain} boxSize="16" mx="4" />
          <Text fontSize="xl" fontWeight="medium">
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
        <ModalContent rounded="12" p="6">
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
    </>
  );
};
