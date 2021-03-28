import '../../styles/Player.scss';

const Player = () => {
    return (
        <div className="Player__Wrapper">
            <h1>Player 1</h1>
            <p>Score</p>
            <p className="Player__Score">21</p>
            <p className="Player__Service">Service</p>
            <button className="Player__Button">+</button>
        </div>
    );
}

export default Player;
