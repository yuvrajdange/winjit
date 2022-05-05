import axios from 'axios';
import React, {useEffect, useState} from 'react';

const UseHook = () =>{
    const[menu, setMenu] = useState();
    useEffect(() =>{
        axios.get(`https://zomatoajulypi.herokuapp.com/restaurant?stateId=1`).then((res) =>{
            const menuData = res.data;
            setMenu(menuData);
        })
    },[]);
    return(
        <div>
            <h3>Get API using Hooks</h3>
            {menu && menu.map((menus) =>{
                const{restaurant_name, address, _id} = menus;
                return(
                    <div key={_id}>
                        <h2>{restaurant_name}</h2>
                        <p>{address}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default UseHook;