import classes from './Playerscore.module.scss';
import twosmiley from '../../assets/images/player-two.svg'


const Playertwoscore = (props) => {
    return <div className={classes.fullplayertwoscore}>
    <img src={twosmiley} className={classes.onesmiley}></img> 
    <div className={classes.playeronescore}>PLAYER 2<h2>{props.score}</h2></div></div>
};


export default Playertwoscore;



