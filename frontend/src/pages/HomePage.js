import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import '../App.css'

function HomePage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        background="rgba(255, 255, 255, 0.12)"
        border-radius="16px"
        box-shadow=" 0 4px 30px rgba(0, 0, 0, 0.2)"
        backdrop-filter="blur(10px)"
        border="1px solid rgba(255, 253, 253, 0.41)"
      >
        <Text fontSize="4xl" fontFamily="Work sans" textAlign="center">
          CHAT-APP
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px"
        background="rgba(255, 255, 255, 0.12)"
        border-radius="16px"
        box-shadow=" 0 4px 30px rgba(0, 0, 0, 0.2)"
        backdrop-filter="blur(10px)"
        border="1px solid rgba(255, 253, 253, 0.41)"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="white">Login</Tab>
            <Tab color="white">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;