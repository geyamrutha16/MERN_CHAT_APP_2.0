import { Flex } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat } = ChatState();

    return (
        <Flex
            display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
            flexDirection="column"
            alignItems="center"
            bg="white"
            w={{ base: "100%", md: "67%" }}
            borderRadius="lg"
            borderWidth="1px"
            h={{ base: "94%", md: "100%" }}
            p={4}
        >

            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </Flex>
    );
};

export default Chatbox;