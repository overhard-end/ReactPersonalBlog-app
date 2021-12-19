import React,{useState} from 'react'

export default function Counter() {
    
    const [count, setCount] = useState(0); 
    function add(){
      setCount(count + 1);
    };
    function del(){
    let delnum = 10
      if(count > delnum){
        setCount(count - delnum)
      }else {
        setCount(0)
      }
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick= {add} >add</button>
            <button onClick= {del} >del</button>
        </div>
    )
}
