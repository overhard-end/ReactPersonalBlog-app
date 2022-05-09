import React from 'react';
import { BrowserRouter as  Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import { WorksPage } from './pages/worksPage';
import { HomePage } from './pages/homePage';
import { PostPage } from './pages/postPage';
import { ProfilePage } from './pages/profilePage';
import { AuthPage } from './pages/authPage';
import { SignUpPage } from './pages/signUpPage';



 
function App() {
 
  return (
    <Router>
      <div>

      <Routes>
       <Route exact path="/" element={<HomePage/>}>  
       </Route>
       <Route exact path="/works" element={<WorksPage/>}>  
       </Route>
       <Route exact path="/post" element={<PostPage/>}>  
       </Route>
       <Route exact path="/auth" element={<AuthPage/>}>  
       </Route>
       <Route exact path="/profile" element={<ProfilePage/>}>  
       </Route>
       <Route exact path="/sign-up" element={<SignUpPage/>}>  
       </Route>
       </Routes>

    </div>
    </Router>
    
   
  );
}

export default App;
