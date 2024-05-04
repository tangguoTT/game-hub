import { HStack, Image, Text } from "@chakra-ui/react";
import log from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={log} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
