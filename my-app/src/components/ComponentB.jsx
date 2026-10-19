
import { useContext } from 'react'

import { NumberContext } from './ComponentA.jsx';

function ComponentA() {
const number = useContext(NumberContext)
    
  return (
    <div>
      <h1>{`your number is ${number}`}</h1>
    </div>
  );
}

export default ComponentA
