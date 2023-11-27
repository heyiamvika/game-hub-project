import { Heading, VStack } from "@chakra-ui/react";
import { Game, Platform } from "../../types/games";

import Games from "./Games";

interface Props {
  selectedGenre: string;
  games: Game[];
  platforms: Platform[];
}

const GamesContainer = ({ selectedGenre, games, platforms }: Props) => {
  console.log({ platforms });
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
