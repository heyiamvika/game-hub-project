import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type Item = {
  id: number;
  title: string;
};

interface Props {
  title: string;
  items: Item[];
}

const GeneralMenu = ({ title, items }: Props) => {
  const menuItems = items.map((item) => (
    <MenuItem key={item.id}>{item.title}</MenuItem>
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
