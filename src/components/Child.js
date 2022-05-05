import React from "react";
const Child = (props) =>{
    return(
        <>
            <h2>Child component</h2>
            <h3>{props.mydata}</h3>
        </>
    )
}
export default Child;