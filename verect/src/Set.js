import React, { useState } from 'react';

const Set = (props) => {
    
    const [data, setData] = useState();
    function main(){
       setData('aman');
    }
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        <h1>{data}</h1>
        <button onClick={main}>click</button>
    </div>
  )
}

export default Set

//state: Hooks => useState