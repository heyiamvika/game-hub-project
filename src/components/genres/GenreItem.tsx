import { Image, Text, VStack } from "@chakra-ui/react";

const GenreItem = () => {
  return (
    <VStack as="li">
      <Image />
      <Text>Name</Text>
    </VStack>
  );
};

export default GenreItem;
