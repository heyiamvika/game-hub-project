import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface Props {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        placeholder="Search games..."
        borderRadius={20}
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
