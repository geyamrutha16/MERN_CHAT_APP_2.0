import { ViewIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Text,
    Image,
    Center,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
            )}
            <Modal
                size="lg"
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                width={{ base: "400px", md: "large" }}
                p={2}>
                <ModalOverlay />
                <ModalContent width={{ base: "300px", md: "600px" }}>
                    <ModalHeader
                        fontFamily="Work sans"
                        d="flex"
                        justifyContent="center"
                        textAlign="center"
                        fontSize={{ base: "30px", md: "40px" }}
                    >
                        {user.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        d="flex"
                        flexDir="column"
                        alignItems="center"
                        textAlign="center"
                        justifyContent="space-between"
                    >
                        <Center>
                            <Image
                                borderRadius="full"
                                src={user.pic}
                                alt={user.name}
                                textAlign="center"
                                boxSize={{ base: "90px", md: "150px" }}
                            />
                        </Center>
                        <Text
                            fontSize={{ base: "15px", md: "30px" }}
                            fontFamily="Work sans"
                            textAlign="center"
                            p={1}
                        >
                            Email: {user.email}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onClick={onClose}
                            _hover={{ backgroundColor: "teal" }}
                        >Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProfileModal;