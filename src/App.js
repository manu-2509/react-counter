// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import { Category } from './components/Category';
function App() {
  

const [counter,setCounter]=useState(10)

const handleChange=(value)=>{

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
