import { HStack, Image, Link } from "@chakra-ui/react";
import { Genre } from "../../types/genres";

interface Props {
  isSelected: boolean;
  genre: Genre;
  onGenreClick: (genre: Genre) => void;
}

const GenreItem = ({ isSelected, genre, onGenreClick }: Props) => {
  const { name, image_background } = genre;
  return (
    <HStack as="li">
      <Image
        src={image_background}
        boxSize="30px"
        objectFit="cover"
        borderRadius={5}
      />
      <Link
        onClick={() => onGenreClick(genre)}
        fontWeight={isSelected ? "bold" : "normal"}
      >
        {name}
      </Link>
    </HStack>
  );
};

export default GenreItem;
