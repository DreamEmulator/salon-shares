import {
  Button,
  Flex,
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
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiCloudRain } from "react-icons/fi";

{
  /* DOWNLOAD CTA*/
}
export const DownloadCTA = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex justify="space-around" cursor="pointer">
        <HStack
          onClick={onOpen}
          rounded="full"
          p="6"
          color={useColorModeValue("pink.100", "white")}
          backdropFilter="blur(6px)"
          boxShadow="2xl"
          _hover={{
            color: useColorModeValue("gray.500", "white"),
            bg: useColorModeValue("pink.100", "purple.500"),
            boxShadow: "2xl",
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
            <Link href="https://sharing-dream-emulations.s3.eu-central-1.amazonaws.com/SalonDeBonBon%231/Salon+de+Bon+Bon+%231+🔮.zip">
              <Button colorScheme="blue">Let's Do It</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
