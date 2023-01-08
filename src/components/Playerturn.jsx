import React from 'react';
import classes from './Playerturn.module.scss'

const Playerturn = (props) => {
    return (
        <>
        {props.winner != null ? 
        <div className={classes.playerturn}>{props.winner}<h2>WINS</h2><button onClick={props.newGame}>PLAY AGAIN</button></div>
        : <div className={classes.playerturn}><strong> PLAYER {props.playerOrder ? "1's" : "2's"} TURN</strong> <h2>{props.time}s</h2></div> }
        
        </>
    )
};


export default Playerturn;