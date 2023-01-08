
import classes from './Playerscore.module.scss';
import playerone from '../../assets/images/player-one.svg'


const Playeronescore = (props) => {

    return(
    <div className={classes.fullplayerscore}>
         <img src={playerone} className={classes.onesmiley}></img> 
         <div className={classes.playeronescore}>PLAYER 1<h2>{props.score}</h2></div></div>
    );
};


export default Playeronescore;