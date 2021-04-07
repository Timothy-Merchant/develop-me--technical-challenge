import '../../styles/Tournaments.scss';
import { Component } from 'react';

class Tournaments extends Component {

    constructor(props) {
        super(props)

        this.state = {

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
                        <div className="testing">
                            <p>{tournament.id}</p>
                            {rounds.map((round, rIndex) => {
                                if (round.tournament_id === tournament.id) {
                                    return (
                                        <>
                                            <p>{round.id}</p>
                                            {games.map((game, gIndex) => {
                                                if (game.round_id === round.id) {
                                                    return (
                                                        <>
                                                            {players.map((player, pIndex) => {
                                                                if (player.game_id === game.id) {
                                                                    return <p>Hello World 2</p>
                                                                }
                                                            })}
                                                            <p>"hello world"</p>
                                                        </>
                                                    )
                                                }
                                            })}
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