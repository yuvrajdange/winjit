import React from "react";

class CallChild extends React.Component{

    clickMe = () =>{
        console.log("Clicked");
        this.props.parentCallback("Welcome")
    }

    render(){
        return(
        <>
            <button onClick={this.clickMe}>Click</button>
        </>
        )
    }
}
export default CallChild;