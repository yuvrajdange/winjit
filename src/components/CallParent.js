import React from "react";
import CallChild from "./CallChild";

class CallParent extends React.Component{
    state = {
        message: "",
    }
    handleCall = (myData) =>{
        this.setState(
            {message: myData}
        )
    }
    render(){
        const {message} = this.state;
        return(
       
        <>
            <h2>Child To parent</h2>
            {message}
            <CallChild parentCallback = {this.handleCall}/>
        </>
        )
    }
}

export default CallParent;