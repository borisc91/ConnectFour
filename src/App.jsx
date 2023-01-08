import { useEffect, useState } from 'react'
import Playerturn from './components/Playerturn';
import classes from './App.module.scss'
import Playeronescore from './components/Playeronescore';
import Playertwoscore from './components/Playertwoscore';
import Board from './components/Board';
import logo from '../assets/images/logo.svg'






function App() {

  const [winner, setWinner] = useState(null);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerOrder, setPlayerOrder] = useState(true);
  const [time, setTime] = useState(30);
  

  


  const [board, setBoard] = useState([
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ]);

  const newGame = () => {
    setBoard([
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ])
    setWinner(null);
    setTime(30);
  }

  const restart = () => {
    setBoard([
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ])
    setWinner(null);
    setTime(30);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setPlayerOrder(true);
  }

  const changeBoard = (e, index) => {
   e.preventDefault()
    if(!winner){

      
    setBoard(prevAray => {
      
      if(prevAray[index].some((v) =>  v === null) ){
        setTime(30);
     const target = prevAray[index].findLastIndex((item)=> item == null)
     if(playerOrder) {
    prevAray[index][target]="player1"
     } else {
      prevAray[index][target]="player2"
     }
  }

 
  return [...prevAray];
  })
  if(board[index].some((v) =>  v === null) ){
  setPlayerOrder(!playerOrder);
  }
}
}
const timer = () => {
  setTime(time-1)


}


//timer for remaining time for player to click
useEffect(() => {           
  if(!winner){
  if(time != 0){
  
  const interval = setInterval(timer, 1000);


  return () => clearInterval(interval);
} else {
  if(playerOrder) {
    setWinner("PLAYER 2")
    setPlayerTwoScore(playerTwoScore+1)
  } else{
    setWinner("PLAYER 1")
    setPlayerOneScore(playerOneScore+1)
  }
}
  }

},[time])
  useEffect(() => {
    
    
    
    

    // Check Left Diagonal
    let diagonalColumnLeft = 0;
    let countDiagonalColumnLeft = 0;

    for(let i = 0; i <= 3; i++){
      for(let k = 0; k<=2; k++){
        if(board[i][k] != null){
        for(let g = 0; g<=3; g++){
          if(board[i+g][k+g] != diagonalColumnLeft) {
            diagonalColumnLeft = board[i][k]
            countDiagonalColumnLeft = 0;
          }
          countDiagonalColumnLeft +=1;

          if(countDiagonalColumnLeft < g){
            break;
          }
          if(countDiagonalColumnLeft ==4){
            if(diagonalColumnLeft == "player1"){
              setWinner("PLAYER 1");
              setPlayerOneScore(playerOneScore+1)
              console.log("player one won!")
            } else {
              console.log("player two won!")
              setPlayerTwoScore(playerTwoScore+1)
              setWinner("PLAYER 2")
            }
            
          }
        }
      } 
        countDiagonalColumnLeft = 0;

      }
      countDiagonalColumnLeft = 0;
    }


    //Check Right Diagonal

    let diagonalColumnRight = 0;
    let countDiagonalColumnRight = 0;

    for(let i = 0; i <= 3; i++){
      
      for(let k = 5; k>=2; k--){
      if(board[i][k] != null){
        for(let g = 0; g<=3; g++){
          
          if(board[i+g][k-g] != diagonalColumnRight) {
            diagonalColumnRight = board[i+g][k-g]
            countDiagonalColumnRight = 0;
            
          }
          countDiagonalColumnRight +=1;
          

          if(countDiagonalColumnRight < g){
            break;
          }
          
          if(countDiagonalColumnRight == 4){
            if(diagonalColumnRight == "player1"){
              setWinner("PLAYER 1");
              
              setPlayerOneScore(playerOneScore+1)
            } else {
              
              setWinner("PLAYER 2");
              setPlayerTwoScore(playerTwoScore+1)
            }
          }
        }
      }
        countDiagonalColumnRight = 0;

      }
      countDiagonalColumnRight = 0;
    }
 

//Check Winlogic in Row
    let column = 0;
    let countColumn = 0;
    for (let i = 0; i < board[0].length; i++) {


      board.forEach((col)=> {
        
        
        if(col[i] != column || col[i]==null){
        console.log(col[i])
          column =col[i]
          countColumn=0;
        }
        countColumn+=1;
        console.log(countColumn)
        if(countColumn == 4){
          if(column == 'player1'){
            setWinner("PLAYER 1");
            setPlayerOneScore(playerOneScore+1)
              console.log("player one won R!")
              console.log(board)
            } else {
              console.log("player two won R!")
              setWinner("PLAYER 2");
              setPlayerTwoScore(playerTwoScore+1)
            }
        }
      
      
      })
      countColumn=0;
    }



    //Check Winlogic in Column
    board.forEach((col) => {
      let last = 0;
      let count = 0;
  
    for (let i = 0; i < col.length; i++) {
      
        if (col[i] != last || col[i]==null ) {
            last = col[i];
            count = 0;
            
        }
        count += 1;
        if (4 <= count) {
          if(last == 'player1'){
            setWinner("PLAYER 1");
            setPlayerOneScore(playerOneScore+1)
              console.log("player one won C!")
            } else {
              console.log("player two won C!")
              setWinner("PLAYER 2");
              setPlayerTwoScore(playerTwoScore+1)
            }
        }
        
    
    
  }
    
})
  },[board])

  return (
    <div className={classes.fullgame}>
      <div className={classes.menu}><div className={classes.header}><img src={logo}></img>
      <button onClick={restart}>RESTART</button></div></div>
    <div className={classes.game}>

<Playeronescore score={playerOneScore} />

<div className={classes.board}>
      <Board board={board} changeBoard={changeBoard}  />
     </div>
     <Playertwoscore score={playerTwoScore} />

    </div>
    {!winner ? <div className={classes.underboard}>
               
      <div className={`${playerOrder ? classes.triangleone : classes.triangle }`}>
        <Playerturn winner={winner} newGame={newGame} time={time} playerOrder = {playerOrder}/></div></div> : <div className={`${classes.underboard} 
            ${winner==='PLAYER 1' ? classes.underboard1 : ''}
             ${winner==='PLAYER 2' ? classes.underboard2 : ''}`}><div className={classes.victory}><Playerturn winner={winner} newGame={newGame} time={time} playerOrder = {playerOrder}/></div>
        </div>}
    </div>
  )
}


export default App
