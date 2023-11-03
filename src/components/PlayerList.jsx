import Player from './Player';
import player from '../player';

function PlayerList () {
    return (
        <div className='box'>
            {player.map(
                (player) => {
                    return (
                        <Player {...player}/>
                    )
                }
            )}
        </div>
    )
};

export default PlayerList;