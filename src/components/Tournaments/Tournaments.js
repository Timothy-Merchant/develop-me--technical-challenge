import '../../styles/Tournaments.scss';
import { Component } from 'react';
import Pairing from '../TournamentTree/Pairing';

/**
 * This component lists the tournament history.
 * It displays the result of the api request that asks for
 * the latest 50 tournaments from the server 
 * as a series of TournamentTree components.
 */

class Tournaments extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: ""
        }
    }

    roundName = (index, length) => (
        index === length ? "Final" :
            index === length - 1 ? "Semi Finals" :
                index === length - 2 ? "Quarter Finals" : `Round ${index}`
    )

    // Resets the loaded bool for the next time we call the API for tournaments
    componentDidMount() {
        this.props.tournamentLoaded();
    }

    render() {

        return (
            <>
                <div className="pageStyle">

                    {this.props.tournaments.map((tournament, tIndex) => (

                        <div key={tIndex} className="Tournament__Wrapper">
                            <h1>Tournament {tournament.id}</h1>
                            <p>{tournament.updated_at}</p>
                            <div className="TournamentTree">
                                {tournament.rounds.map((round, index) => (
                                    <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                                        <div className="PairingRow">
                                            <h1 className="PairingRow__title">{this.roundName(index + 1, tournament.rounds.length)}</h1>
                                            {round.games.map((game, index) => (
                                                <Pairing game={game} key={index} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p>Champion: {tournament.champion}</p>
                        </div>

                    )
                    )
                    }
                </div>
            </>
        )
    }
}

export default Tournaments;