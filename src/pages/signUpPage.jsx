import React from "react";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import SignUp from "../components/sign-up";


export const SignUpPage =()=>{
   
    return(
        
<div className="page">
    <Header/>
    <Sidebar/>

    <main className="main">
               
                <div className="container">
                  <SignUp/>
                </div>
    </main>

</div>
      
        
                

    );
};
