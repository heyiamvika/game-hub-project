import { Heading, VStack } from "@chakra-ui/react";
import { Game } from "../../types/games";

import Games from "./Games";

interface Props {
  selectedGenre: string;
  games: Game[];
}

const GamesContainer = ({ selectedGenre, games }: Props) => {
  return (
    <VStack alignItems="flex-start">
      <Heading fontSize={52}>{`${selectedGenre}${
        selectedGenre && " "
      }Games`}</Heading>
      <Games games={games} />
    </VStack>
  );
};

export default GamesContainer;
