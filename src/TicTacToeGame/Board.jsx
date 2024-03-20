import React, {useState} from 'react'
import Square from './Square'

const Board = () => {

    const [State, setState] = useState(Array(9).fill(null));
    const [isXturn, setisXturn] = useState(false); 

    const handleClick = (index) =>
    {
        //console.log('Index cicked',index)
        if(State[index] !== null)
        {
            return;
        }
        const copyState = [...State]
        copyState[index] = isXturn ? "X" : "O";
        setState(copyState);
        setisXturn(!isXturn);
    }

    const Checkwinner = () =>
    {
        const Winnerman = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

       
        for(let logic of Winnerman)
        {
            const[a,b,c] = logic;
            if(State[a] !== null && State[a] === State[b] && State[a] === State[c])
            {
                return State[a];
            }

        }
        const isAllcellFilled = State.every(cell => cell !== null);
        if(isAllcellFilled){
            return "Match drawn";
        }
        return false;
    }

    const isWinner = Checkwinner();

    

    const handleReset = ()=>{
        setState(Array(9).fill(null))
    }

    return (
        
          <div className='board-container'>
            {
                isWinner 
                ? 
                (<><div style={{color:'white', fontSize: '50px', marginBottom:'40px', color:'green'}}>
                   {isWinner !== "Match drawn" 
                   ?  
                   (<b>Player "{ isWinner }" won the game.</b>  )
                   :
                   (<b>Match Draw  (^_^) !</b>) 
                   }  
                   <br></br>
                 <button className="noselect green" onClick={handleReset}> Play again</button> 
                 </div>
                </>)

                :
           (<>
           <h3 style={{marginBottom:'20px',color:'green'}}>Player {isXturn ? "X" : "O"} , please move your turn.</h3>
            <div className='board-row'> 
                    <Square onClick={()=>handleClick(0)} value={State[0]} />
                    <Square onClick={()=>handleClick(1)} value={State[1]}/> 
                    <Square onClick={()=>handleClick(2)} value={State[2]}/> 
             </div>
             <div className='board-row'> 
                    <Square onClick={()=>handleClick(3)} value={State[3]} />
                    <Square onClick={()=>handleClick(4)} value={State[4]}/> 
                    <Square onClick={()=>handleClick(5)} value={State[5]}/> 
             </div>
             <div className='board-row'> 
                    <Square onClick={()=>handleClick(6)} value={State[6]} />
                    <Square onClick={()=>handleClick(7)} value={State[7]}/> 
                    <Square onClick={()=>handleClick(8)} value={State[8]}/> 
             </div>
             </>) 
              }
        </div>
    )
}

export default Board ;