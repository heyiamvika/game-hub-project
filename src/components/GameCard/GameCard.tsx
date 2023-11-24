import { Game } from "../../types/games";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <p>{game.name}</p>
    </div>
  );
};

export default GameCard;
