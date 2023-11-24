import { useEffect, useState } from "react";
import "./App.css";
import { CanceledError } from "./services/api-client";
import gamesService from "./services/games-service";
import { Game } from "./types/games";
import Games from "./components/Games/Games";

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const { request, cancel } = gamesService.getAllGames();

    request
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        // Don't show error is user closed the tab or connection was interrupted
        if (err instanceof CanceledError) return;
        console.error("Failed to fetch games: " + err.message);
      });

    return () => cancel();
  }, []);

  return (
    <>
      <Games games={games} />
    </>
  );
}

export default App;
