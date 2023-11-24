import { Heading, VStack } from "@chakra-ui/react";
import GenreItem from "./GenreItem";

const Genres = () => {
  return (
    <VStack hideBelow="md">
      <Heading fontSize={26}>Genres</Heading>
      <VStack as="ul">
        {/* TO_DO: loop over genres */}
        <GenreItem />
      </VStack>
    </VStack>
  );
};

export default Genres;
