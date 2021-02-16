import React, { useState , useEffect} from "react";
import useCustomCounter from "./Custom";

// function App() {
//   const [count, setCount] = useState(101);
//   const [count1, setCount1] = useState(500);

// const handleIncreament = ()=>{
//   setCount(count + 1);
// }
// const handleDecreament = ()=>{
//   setCount1(count1 - 1);
// }
// useEffect(() => {
//  console.log("useEffect Called");
// },[count,count1]);
//   return (
//     <React.Fragment>
//   <h1> Count Up:{count} </h1>
//   <button type="button" onClick={handleIncreament}>Increament</button>
//   <h1> Count Down:{count1} </h1>
//   <button type="button" onClick={handleDecreament}>Decreament</button>
//   </React.Fragment>
//   );
// }

function App() {
 const data = useCustomCounter();
 return (
   <React.Fragment>
     <h1>Counter Up: {data.counter}</h1>
     <button type="button" onClick={data.handleCounter}>Increament</button>
   </React.Fragment>
 ) 
}

export default App;
