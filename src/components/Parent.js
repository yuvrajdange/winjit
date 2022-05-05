import React from "react";
import Child from "./Child";

const Parent = () =>{
    const mydata = "Hello Yuvraj";
    return(
        <>
            <h2>Parent Component</h2>
            <Child mydata={mydata}/>
        </>
    )
}

export default Parent;