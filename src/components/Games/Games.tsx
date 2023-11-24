import { Game } from "../../types/games";

interface Props {
  games: Game[];
}

const Games = ({ games }: Props) => {
  return (
    <div>
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
};

export default Games;
