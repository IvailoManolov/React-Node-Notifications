import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import {io} from "socket.io-client"

import {posts} from "./data"

function App() {

  const [userName,setUsername] = useState("")
  const [user,setUser] = useState("")
  const [socket,setSocket] = useState(null)

  useEffect(() => {
    setSocket(io("http://localhost:5000"))

  },[])

  useEffect(()=>{
    socket?.emit("newUser",user)
  },[socket,user])

  return (
    <div className='container'>
      {user ? (
        <>
          <Navbar socket = {socket}/>
          {posts.map(post => (
            <Card key = {post.id} post = {post} socket = {socket} user = {user}/>
          ))}
          <span className='username'>{user}</span>
        </>
      ) : 
      (
        <Login setUsername = {setUsername} userName={userName} setUser = {setUser}/>
      )}
      </div>
  );
}

export default App;
