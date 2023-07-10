import React, { useState } from 'react'
import Square from './Square'
import "./App.css"
const Board = () => {
    const[state, setState]=useState(Array(9).fill(null))
     const [isxturn,setIsxturn]=useState(true);
    const halndlechange=(index)=>{
      const copy=[...state];
      copy[index]=isxturn ? "X":"O";
      setState(copy)
      setIsxturn(!isxturn)
    };

    const checkwinner=()=>{
       const winnerlogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [1,4,7],
        [0,3,6],
        [2,5,8],
        
       ]
       for(let logic of winnerlogic){
        const[a,b,c]=logic;
        if( state[a] !==null && state[a]===state[b] && state[c]===state[a] && state[b]===state[c]){
         return state[a];
        }
       }
       return false
    }
   const iswinner=checkwinner();


   const back=()=>{
    setState(Array(9).fill(null))
   }
  return ( 
      
    <div className='board-container'>

 { iswinner ? <div className='result'><h5>{iswinner} Won The Game</h5> <button onClick={back}>Play Again</button></div> :<><div className='board-row' >
   <Square onClick={()=>halndlechange(0)} value={state[0]}/> 
   <Square onClick={ ()=>halndlechange(1)} value={state[1]}/> 
   <Square onClick={ ()=>halndlechange(2)} value={state[2]}/> 
    </div>
    <div className='board-row'>
    <Square onClick={()=>halndlechange(3)} value={state[3]}/>
    <Square onClick={()=>halndlechange(4)} value={state[4]}/>
    <Square onClick={()=>halndlechange(5)} value={state[5]}/>

    </div>
    <div className='board-row'>
    <Square onClick={()=>halndlechange(6)} value={state[6]}/>
    <Square onClick={()=>halndlechange(7)} value={state[7]}/>
    <Square onClick={()=>halndlechange(8)} value={state[8]}/>
        
    </div></>} 

   </div>
  )

}

export default Board