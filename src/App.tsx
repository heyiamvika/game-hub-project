import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Game {
  id: string;
  name: string;
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`
      )
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        console.error("Failed to fetch games: " + err.message);
      });
  }, []);

  return (
    <>
      <div>
        {games.map((game) => (
          <p key={game.id}>{game.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
