import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlateform: (platform: Platform) => void;
  selectedPlateform: Platform | null;
}

const PlatformSelector = ({
  onSelectedPlateform,
  selectedPlateform,
}: Props) => {
  const { data: plaforms, error, isLoading } = usePlatforms();
  if (error) return null;
  if (isLoading) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlateform?.name || " Platforms"}
      </MenuButton>
      <MenuList>
        {plaforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              onSelectedPlateform(platform);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
