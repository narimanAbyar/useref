import React,{useRef} from "react";

function HelloWorld(){
    const renders=useRef(0)
    console.log('hello wolda renders:',renders.current++);
    return(
        <>
            HelloWorld
        </>
    );
}
export default HelloWorld;