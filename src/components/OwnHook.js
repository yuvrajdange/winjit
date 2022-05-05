import axios from "axios";
import React,{useEffect, useState} from "react";

const OwnHook = () => {
    const[rest, setRest] = useState();
    useEffect(() =>{
        axios.get(`https://zomatoajulypi.herokuapp.com/restaurant?stateId=1`).then((res) =>{
            const getRest = res.data;
            setRest(getRest);
        })
    },[])
    return(
        <>
            <h2>TryItsSelf</h2>
            {rest && rest.map((resdata) =>{
                const{restaurant_name,contact_number,_id} = resdata;
                return(
                    <div key={_id}>
                        <h2>{restaurant_name}</h2>
                        <p>{contact_number}</p>
                    </div>
                )
            })}
        </>
    )
}

export default OwnHook;