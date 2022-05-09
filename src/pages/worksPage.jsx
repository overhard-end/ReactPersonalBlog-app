import React from "react";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

import { Works } from "../components/works";


export const WorksPage =()=>{
    const WorksArr =[{id:1,title:'altermono.com',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt dolorem dolorum, facere quos aspernatur ab similique facilis commodi dolor optio magni earum sit vel praesentium reiciendis modi? Rem, impedit fugiat.'
    ,tag1:"дизайн",tag2:"создание сайтов",tag3:"SMM", imgUrl:'../images/works-img1.jpg' ,workLink:"https://github.com"},
    {id:2,title:'reactSnikers',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt dolorem dolorum, facere quos aspernatur ab similique facilis commodi dolor optio magni earum sit vel praesentium reiciendis modi? Rem, impedit fugiat.'
    ,tag1:"дизайн",tag2:"создание сайтов",tag3:"UI/UX", imgUrl:'../images/ReactSneakers.png' ,workLink:"https://github.com"}

];
    return(
        
<div className="page">
    <Header/>
    <Sidebar/>

    <main className="main">
      <div className="container">
          <div class="works">
                <h2 class="works__title">Мои работы</h2>
                {WorksArr.map(work => <Works work={work} key={work.id}/>)}

           </div>
       </div>
   </main>

</div>
      
        
                

    );
};
