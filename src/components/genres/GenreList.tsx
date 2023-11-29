import {
  HStack,
  Heading,
  List,
  ListItem,
  VStack,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import GenreItem from "./GenreItem";

import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  // selectedGenre: Genre | undefined;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

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

  if (error) return null;
  if (isLoading) return <Spinner />;

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
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
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
