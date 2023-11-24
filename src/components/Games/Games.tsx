import { Game } from "../../types/games";
import GameCard from "../GameCard/GameCard";

interface Props {
  games: Game[];
}

const Games = ({ games }: Props) => {
  return (
    <div>
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
};

export default Games;
