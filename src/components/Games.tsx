import React from "react";
import { GamesDataSource } from "../data/GamesDataSource";
import { Game } from "../models/Game";
import "./Games.css";
import SingleGame from "./SingleGame";

interface GamesState {
  games: Game[];
}

interface GamesProps {}

export default class Games extends React.Component<GamesProps, GamesState> {
  state: GamesState = {
    games: [],
  };

  constructor(props: GamesProps) {
    super(props);
    this.updateGames = this.updateGames.bind(this);
  }

  private updateGames(game: Game) {
    const otherGames = this.state.games.filter((x) => x.id !== game.id);

    const newGames = [...otherGames, game];

    this.setState({ games: newGames });
  }

  render() {
    return (
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Creator</th>
          <th>Date of release</th>
          <th>Price</th>
          <th>Status</th>
          <th>Event</th>
        </thead>
        <tbody>
          {GamesDataSource.map((game) => (
            <SingleGame game={game} updateGames={this.updateGames} />
          ))}
        </tbody>
      </table>
    );
  }
}
