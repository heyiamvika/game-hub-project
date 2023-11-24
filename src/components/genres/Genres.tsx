import { Heading, VStack } from "@chakra-ui/react";
import GenreItem from "./GenreItem";

import { Genre } from "../../types/genres";

interface Props {
  selectedGenre: Genre | undefined;
  genres: Genre[];
  onGenreClick: (genre: Genre) => void;
}

const Genres = ({ selectedGenre, genres, onGenreClick }: Props) => {
  const genresItems = genres.map((genre) => {
    const isSelected = Boolean(selectedGenre && selectedGenre.id === genre.id);

    return (
      <GenreItem
        isSelected={isSelected}
        genre={genre}
        key={genre.id}
        onGenreClick={onGenreClick}
      />
    );
  });

  return (
    <VStack hideBelow="md" alignItems="flex-start">
      <Heading fontSize={24} mt={5}>
        Genres
      </Heading>
      <VStack as="ul" alignItems="flex-start">
        {genresItems}
      </VStack>
    </VStack>
  );
};

export default Genres;
