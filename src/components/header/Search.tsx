import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface Props {
  onSearch: (value: string) => void;
}

const Search = ({ onSearch }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        placeholder="Search games"
        size="md"
        borderRadius={50}
        onChange={(e) => onSearch(e.target.value)}
      />
      ;
    </InputGroup>
  );
};

export default Search;
