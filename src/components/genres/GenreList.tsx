import {
  HStack,
  Heading,
  List,
  ListItem,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import GenreItem from "./GenreItem";

import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  // selectedGenre: Genre | undefined;
  // onGenreClick: (genre: Genre) => void;
}

const GenreList = ({}: Props) => {
  const { data } = useGenres();

  // const genresItems = genres.map((genre) => {
  //   const isSelected = Boolean(selectedGenre && selectedGenre.id === genre.id);

  //   return (
  //     <GenreItem
  //       isSelected={isSelected}
  //       genre={genre}
  //       key={genre.id}
  //       // onGenreClick={onGenreClick}
  //     />
  //   );
  // });

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
    // <VStack hideBelow="md" alignItems="flex-start">
    //   <Heading fontSize={24} mt={5}>
    //     Genres
    //   </Heading>
    //   <VStack as="ul" alignItems="flex-start">
    //     {genresItems}
    //   </VStack>
    // </VStack>
  );
};

export default GenreList;
