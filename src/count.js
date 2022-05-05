import React, {useState} from 'react';
import { useEffect } from 'react';

const count = () =>{
    const[count, setCount] = useState(0);
    useEffect(() =>{
        console.log('Yuvraj')
    },[])
    return(
        <>
            <div>{count}</div>
            <button onClick={() =>setCount(count + 1)}>Click me</button>
        </>
    )
}
export default count;
