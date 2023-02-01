import './App.css';
import React, { useState, useEffect } from 'react';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { services } from './http/service';
import Home from './pages/main/home/home';

const App = () => {

  const [user, setUser] = useState({});
  const load = async () => {
    const res = await services.getMe()
    console.log(res)
    setUser(res.data)
  }
  useEffect(() => {
    load()
  }, [])

  const registerPost = async (data) => {
    console.log(data)
    try {
      const response = await services.register(data)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  // arsen12 forsaj0000arsen_
  const loginPost = async (data) => {
    try {
      const response = await services.login(data)
      console.log(response)
      localStorage.setItem('token-aut', JSON.stringify(response.data.auth_token))
      load()
    } catch (e) {
      console.log(e)
    }
  }
  const logout = async() => {
    try{
      const response = await services.logout()
      localStorage.removeItem('token-aut')
      setUser({})
    }catch (e){
      console.log(e)
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user.username ? <Home username={user.username} logout={logout}/> : <Register registerPost={registerPost} />} />
        <Route exact path="/auth/login" element={user.username ? <Navigate to="/" replace /> : <Login loginPost={loginPost} />} />
        <Route exact path="/auth/register" element={user.username ? <Navigate to="/" replace /> : <Register registerPost={registerPost} />} />
      </Routes>
    </div>
  );
}

export default App;
