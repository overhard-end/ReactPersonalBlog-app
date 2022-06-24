import React, { useEffect } from 'react';

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/homePage';

import { AuthPage } from './pages/authPage';
import { RegistrationPage } from './pages/registrationPage';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Profile } from './components/profile';
import { Post } from './components/post';
import { UsersPage } from './pages/usersPage';
import { Private } from './hoc/Private';
import { MyPostsPage } from './pages/myPostsPage';
import { Public } from './hoc/Public';
function App() {
  const { store } = React.useContext(Context);
  useEffect(() => {
    store.checkAuth();
    store.getUsers();
    store.getPosts();
    store.getComments();
  }, [store]);

  return (
    <Router>
      <div className="page">
        <Header />
        <Sidebar />

        <main className="main">
          <div className="container">
            {store.isLoading ? (
              <div className="myLoader" />
            ) : (
              <Routes>
                <Route
                  exact
                  path="/auth"
                  element={
                    <Public>
                      <AuthPage />
                    </Public>
                  }></Route>
                <Route
                  exact
                  path="/registration"
                  element={
                    <Public>
                      <RegistrationPage />
                    </Public>
                  }></Route>
                <Route
                  exact
                  path="/myPosts"
                  element={
                    <Private>
                      <MyPostsPage />
                    </Private>
                  }></Route>
                <Route
                  path="/post/:id"
                  element={
                    <Private>
                      <Post />
                    </Private>
                  }></Route>
                <Route
                  exact
                  path="/profile"
                  element={
                    <Private>
                      <Profile />
                    </Private>
                  }></Route>
                <Route
                  exact
                  path="/users"
                  element={
                    <Private>
                      <UsersPage />
                    </Private>
                  }></Route>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="*" element={<Navigate to="/" />}></Route>
              </Routes>
            )}
          </div>
        </main>
      </div>
    </Router>
  );
}

export default observer(App);
