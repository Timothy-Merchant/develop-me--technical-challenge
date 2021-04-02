import '../../styles/Player.scss';

const Player = ({ player, increaseScore }) => {

    const handleClick = () => {
        increaseScore(player);
    }

    return (
        <div className="Player__Wrapper">            
            <h1>{player.name}</h1>
            <p>Score</p>
            <p className="Player__Score">{player.score}</p>
            <button onClick={handleClick} className="Player__Button">+</button>
        </div>
    );
}

export default Player;
