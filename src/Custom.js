//Custom Hook

import {useState} from 'react'
function useCustomCounter(){
    const [counter, setCounter]=useState(0);
     const handleCounter =()=>{
         setCounter(counter + 1);
     };
     return{
         counter, handleCounter
     };
}
export default useCustomCounter;