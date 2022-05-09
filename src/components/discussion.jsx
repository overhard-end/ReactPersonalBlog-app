import React, {useState} from 'react'
import { Comments } from './comments'

export const Discussion = () => {
const [text, setText] =useState('');
const [arr, setArr] =useState([]);

const ser= ()=>{
  setArr([arr,{id:arr.length +1, name:"new",date:Date.now(), img:"../images/comment1.png", text:text} ])
   
  console.log(arr);
      
}

    let comentaArr=[{
        id:1,
        name:"Alex",
        img:"../images/comment1.png",
        date:"21.03.2022",
        text:"Мне кажется это очень верное суждение в данной ситуации ны было друго выбора"
       },{
        id:2,
        name:"Алиевич",
        img:"../images/comment2.png",
        date:"13.03.2022",
        text:"Я сталкивался с таким и очень хорошо знаю что так происходить иногда "
       }]
  return (
    <div class="discussion">
        <h2 class="discussion__title">Обсуждение</h2>
        <form action="" class="discussion-form">
            <input value={text} onChange={e=>setText(e.target.value) } type="text" class="discussion-input" placeholder="Текст комментрия"/>
            <button onClick={()=>ser()} type="button" class="discussion-btn">Отправить</button>
        </form>
         {arr.map(comment=><Comments comment={comment} key={comment.id}/>)} 
       
    </div>
  )
}
