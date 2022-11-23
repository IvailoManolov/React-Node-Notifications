import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {

  const [userName,setUsername] = useState("")
  const [user,setUser] = useState("")

  return (
    <div className='container'>
      <Login setUsername = {setUsername} userName={userName} setUser = {setUser}/>
    </div>
  );
}

export default App;
