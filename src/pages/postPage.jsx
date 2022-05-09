import React from "react";

import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Text } from "../components/text";

export const PostPage =()=>{
    const TextArr =
        {id:1,title:'Как создавать сайты легко',text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
         date:'21.06.2020', tag:"создание сайтов", imgUrl:'./images/textpage1.jpg'}
;
    return(
        
<div className="page">
    <Header/>
    <Sidebar/>

    <main className="main">

                <div className="container">
                  <Text textArr={TextArr}/>
                  
                </div>
    </main>

</div>
      
        
                

    );
};
