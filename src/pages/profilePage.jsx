import React from "react";
import { Header } from "../components/header";
import { Profile } from "../components/profile";
import { Sidebar } from "../components/sidebar";


export const ProfilePage =()=>{
   const arr ={ 
       name:"Магомед",
       email:"magomet@gmail.com",
       pass:"12345",
       img:"../images/avatar.png"
   }
    return(
        
<div className="page">
    <Header/>
    <Sidebar/>

    <main className="main">
               
                <div className="container">
                  <Profile data={arr}/>
                </div>
    </main>

</div>
      
        
                

    );
};
