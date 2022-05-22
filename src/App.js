
import { useState } from 'react';
import './App.css';


function App() {
  

const [counter,setCounter]=useState(10)

const handleChange=(value)=>{
if(value===-1&&counter<=0){
  return
}
  setCounter(counter+value)
}
 
  return (
    <div className="App">
    
<h3 className={counter%2===0?"even":"odd"}>Counter:{counter}</h3>
<button onClick={()=>handleChange(1)}> Add1</button>

<button onClick={()=>handleChange(-1)} >Sub 1</button>
<button onClick={()=>handleChange(counter)}>Double</button>


    </div>
  );
}

export default App;
