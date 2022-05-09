import React from "react";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Stories } from "../components/stories";
import { AddPost } from "../components/add-post";
import Post from "../components/post";
import { PostNavigation } from "../components/post-navigation";

export const HomePage =()=>{
    const arr =[{id:1,title:'hello',text:'what about JS?',date:'19.20.2021', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
           {id:2,title:'HI',text:'what about PHP?',date:'10.20.2009', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/149px-PHP-logo.svg.png'},

];
    return(
        
<div className="page">
    <Header/>
    <Sidebar/>

    <main className="main">
                <Stories/>

                <div className="container">
                   <AddPost/>
                   {arr.map(post => <Post post={post} key={post.id}/> )}
                   <PostNavigation/>
                </div>
    </main>

</div>
      
        
                

    );
};
