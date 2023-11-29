import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";

interface Props {
  // title: string;
  // onSelect: (item: Platform) => void;
}

const PlatformSelector = ({}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const menuItems = data.map((platform: Platform) => (
    <MenuItem key={platform.id} onClick={() => console.log(platform)}>
      {platform.name}
    </MenuItem>
  ));

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {title} */}
        Platforms
      </MenuButton>
      <MenuList>{menuItems}</MenuList>
    </Menu>
  );
};

export default PlatformSelector;
