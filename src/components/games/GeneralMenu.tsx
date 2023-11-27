import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import type { Platform } from "../../types/games";

interface Props {
  title: string;
  items: Platform[];
  onSelect: (item: Platform) => void;
}

const GeneralMenu = ({ title, items, onSelect }: Props) => {
  const menuItems = items.map((item) => (
    <MenuItem key={item.platform.id} onClick={() => onSelect(item)}>
      {item.platform.name}
    </MenuItem>
  ));

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {title}
      </MenuButton>
      <MenuList>{menuItems}</MenuList>
    </Menu>
  );
};

export default GeneralMenu;
