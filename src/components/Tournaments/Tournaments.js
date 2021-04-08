import '../../styles/Tournaments.scss';
import { Component } from 'react';

class Tournaments extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: ""
        }
    }

    render() {

        const tournaments = this.props.tournaments[0];
        const rounds = this.props.tournaments[1];
        const games = this.props.tournaments[2];
        const players = this.props.tournaments[3];

        return (
            <>
                <div className="pageStyle">
                    {tournaments.map((tournament, tIndex) => (
                        <div className="Tournament__Wrapper">
                            <div className="Tournament__Info">
                                <p>Tournament {tournament.id}</p>
                                <p>Champion: {tournament.champion}</p>
                                <p>{tournament.updated_at.substr(0, 10)}</p>
                            </div>
                            {rounds.map((round, rIndex) => {
                                if (round.tournament_id === tournament.id) {
                                    return (
                                        <>
                                            <div className="Round__Wrapper">
                                                <p>Round {rIndex + 1}</p>
                                                {games.map((game, gIndex) => {

                                                    if (game.round_id === round.id) {
                                                        return (
                                                            <>
                                                                <p>Game {gIndex + 1}</p>
                                                                {players.map((player, pIndex) => {
                                                                    if (player.game_id === game.id) {
                                                                        return (
                                                                            <p>{player.name} {player.score} {player.won}</p>
                                                                        )
                                                                    }
                                                                    return null
                                                                })}
                                                            </>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </div>
                                        </>
                                    )
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default Tournaments;