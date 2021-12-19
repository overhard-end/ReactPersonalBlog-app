import React from 'react';
import Counter from './components/counter';
import Messeg from './components/messeg';
import Post from './components/post';


 
function App() {
 const arr =[{id:1,title:'hello',text:'what about JS?',date:'19.20.2021', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
           {id:2,title:'HI',text:'what about PHP?',date:'10.20.2009', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/149px-PHP-logo.svg.png'},

];
  return (
    <div>
      {arr.map(post => <Post post={post} key={post.id}/>)}

    </div>
    
  
    
    

    
    
   
  );
}

export default App;
