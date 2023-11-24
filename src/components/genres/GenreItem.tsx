import { HStack, Image, Link } from "@chakra-ui/react";
import { Genre } from "../../types/genres";

interface Props {
  genre: Genre;
  onGenreClick: (genre: Genre) => void;
}

const GenreItem = ({ genre, onGenreClick }: Props) => {
  const { name, image_background } = genre;
  return (
    <HStack as="li">
      <Image
        src={image_background}
        boxSize="30px"
        objectFit="cover"
        borderRadius={5}
      />
      <Link onClick={() => onGenreClick(genre)}>{name}</Link>
    </HStack>
  );
};

export default GenreItem;
