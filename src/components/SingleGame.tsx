import React from "react";
import { Game } from "../models/Game";
import { GameStatus } from "../models/GameStatus";

interface SingleGameProps {
  game: Game;
  updateGames: (game: Game) => void;
}

export default class SingleGame extends React.Component<SingleGameProps> {
  private formatDate(dateString: string) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  }

  private changeStatus(game: Game) {
    switch (game.status) {
      case GameStatus.New:
        game.status = GameStatus.SpecialOffer;
        break;
      case GameStatus.SpecialOffer:
        game.status = GameStatus.OutOfStock;
        break;
      case GameStatus.OutOfStock:
        game.status = GameStatus.SpecialOffer;
        break;
      default:
        game.status = GameStatus.New;
        break;
    }

    this.props.updateGames(game)
  }

  render() {
    return (
      <tr>
        <td>{this.props.game.id}</td>
        <td>{this.props.game.title}</td>
        <td>{this.props.game.genre}</td>
        <td>{this.props.game.creator}</td>
        <td>{this.formatDate(this.props.game.dateOfRelease)}</td>
        <td>${this.props.game.price.toFixed(2)}</td>
        <td>{this.props.game.status}</td>
        <td>
          <button onClick={() => this.changeStatus(this.props.game)}>
            Change status
          </button>
        </td>
      </tr>
    );
  }
}
