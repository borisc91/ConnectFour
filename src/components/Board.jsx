import { useState } from 'react';
import classes from './Board.module.scss';
import markertwo from '../../assets/images/marker-yellow.svg'


const Board = (props) => {

    


    return (
<>

        {props.board.map((col, index) => {
            return (
                
                
              <div
               key={index} className={classes.column} 
               onClick={(e) => {props.changeBoard(e, index)}}>
            {col.map((field, index) => {
            return (  
            <div key={index} className={`${classes.circle} 
            ${field=='player1' ? classes.circlep1 : ''}
             ${field=='player2' ? classes.circlep2 : ''}`}></div>
            )
            })}
            </div>
            
            )
          })}
          </>
    )
};



export default Board;