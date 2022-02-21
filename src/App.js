import React,{useState,useRef,useEffect} from "react";
import HelloWorld from './HelloWorld'
function App() {
  const [name,setName]=useState("");

  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  const inputRef=useRef()
  
  const focusHandler=()=>{
    console.log(inputRef.current);
    inputRef.current.focus()
    
  }
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
   <>
    <input
    type="text"
    value={name}
    onChange={nameHandler}
    ref={inputRef}
    />
    <button 
    type="button"
    onClick={focusHandler}
    >chlick</button>
    <HelloWorld/>
   </>
  );
}

export default App;
