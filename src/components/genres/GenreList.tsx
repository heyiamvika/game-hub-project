import { Heading, VStack } from "@chakra-ui/react";
import GenreItem from "./GenreItem";

import useGenres from "../../hooks/useGenres";

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
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
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
