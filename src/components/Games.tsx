import { Wrap, WrapItem } from "@chakra-ui/react";
import GameCard from "./GameCard";

import { Game } from "../types/games";

interface Props {
  games: Game[];
}

const Games = ({ games }: Props) => {
  return (
    <Wrap>
      {games.map((game) => (
        <WrapItem key={game.id}>
          <GameCard game={game} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Games;
