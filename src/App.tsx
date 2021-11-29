import { useState } from 'react';
import './App.css';

type AppType=
{
  initial:number
}

function App(props:AppType) {
  const [value,setValue] =useState(props.initial)

  return (
    <div className="App">
        <div>
          {value}
        </div>
        <button onClick={_=>setValue(value+1)}>Increment</button>
        <button onClick={_=>setValue(value-1)}>Decrement</button>
    </div>
  );
}

export default App;
