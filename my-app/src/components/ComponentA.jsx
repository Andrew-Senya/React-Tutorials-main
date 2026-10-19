
import  { createContext } from 'react'
import ComponentB from './ComponentB.jsx'

  

const NumberContext = createContext();

export NumberContext

function ComponentA() {

    const number = 0;
  return (
    <div>
      <NumberContext.Provider value={number}>
        <ComponentB number={<h1>{`your number is ${number}`}</h1>} />
      </NumberContext.Provider>
      <ComponentB />
    </div>
  );
}

export default ComponentA;

