import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';

import {posts} from "./data"

function App() {

  const [userName,setUsername] = useState("")
  const [user,setUser] = useState("")

  return (
    <div className='container'>
      {user ? (
        <>
          <Navbar />
          {posts.map(post => (
            <Card key = {post.id} post={post} />
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
