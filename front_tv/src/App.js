import logo from './logo.svg';
import './App.css';
import './animationBackground.css';
import ProgressCard from './components/ProgressCard/ProgressCard';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import { io } from "socket.io-client";
const socket = io("http://localhost:800");

function App() {
  const [teams, setTeams] = useState([])
  
  useEffect(()=>{
    socket.emit("requestAllCommandInfo");
  },[]);

  useEffect(()=>{
    socket.on("responseAllCommandInfo",(msg)=>{
      setTeams(msg);
      console.log(msg);
    });
  });



  return (
    <div className="App" style={{height:"100%"}}>
      <Header/>
      <div className='payload'>
      
      </div>

      {teams.map((e, id)=>{
        return(<ProgressCard 
          payload={e}
          socket={socket}
          id={id}
        />)
      })}


      {/* <ProgressCard/>
      <ProgressCard/>
      <ProgressCard/>
      <ProgressCard/> */}

    </div>
  );
}

export default App;
