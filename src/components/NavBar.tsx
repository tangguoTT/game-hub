import { HStack, Image, Text } from "@chakra-ui/react";
import log from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={log} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
