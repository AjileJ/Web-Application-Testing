import React, {useState} from 'react';
import Display from './Display';


export function addOne(num){
  return num + 1;
}

function Dashboard(){
  const addStrike = () => strike >= 2 ? resetHit() : setStrike(strike + 1) ;

  const addBall = () => ball >=3 ? resetHit() : setBall(ball + 1);

  const foulBall = () => strike < 2 ? foulStrike() :  setFoul(foul + 1);

  function foulStrike(){
    setFoul(foul + 1) 
    setStrike(strike + 1) 
  }

  function resetHit(){
    setStrike(0) 
    setBall(0)
    setFoul(0)
    setHit(0)
  }




  
   
  

  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);

  return(
    <div id = 'parent'>
      <h1>Score Board</h1>
      <div className = 'dashboardP'>
    <div className = 'dashboard'>
      
      <button onClick={()=> addStrike()}>Strike</button>
      
      <button onClick={()=> addBall()}>Ball</button>
     
      <button onClick={()=> foulBall()}>Foul</button>
     
      <button onClick={()=> resetHit()}>Hit</button>
      
    </div>
</div>
    <div>
    <div className = 'displayP'>
      <Display strike={strike} ball={ball} hit={hit} foul = {foul} />
      </div>
      </div>
      </div>
  )
}


export default Dashboard;














 

