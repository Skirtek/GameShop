import { Game } from "../models/Game";
import { GameStatus } from "../models/GameStatus";
import { Genre } from "../models/Genre";

export const GamesDataSource: Game[] = [
  {
    id: 1,
    title: "Counter Strike: Global Offensive",
    creator: "Valve",
    dateOfRelease: "2011-09-30T00:00:00",
    genre: Genre.Fps,
    price: 14.99,
    status: GameStatus.New
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    creator: "CD Projekt Red",
    dateOfRelease: "2020-09-30T00:00:00",
    genre: Genre.Fps,
    price: 10,
    status: GameStatus.New
  },
];
