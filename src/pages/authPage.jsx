import React from "react";
import { Auth } from "../components/auth";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";


export const AuthPage =()=>{
   
    return(
        
<div className="page">
    <Header/>
    <Sidebar/>

    <main className="main">
               
                <div className="container">
                  <Auth/>
                </div>
    </main>

</div>
      
        
                

    );
};
