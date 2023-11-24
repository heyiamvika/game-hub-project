import { Game } from "../types/games";
import GameCard from "./GameCard";

interface Props {
  games: Game[];
}

const Games = ({ games }: Props) => {
  return (
    <>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </>
  );
};

export default Games;
