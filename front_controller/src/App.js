import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import MyModal from './components/MyModal/MyModal';
import MainController from './components/MainController/MainController';

import { io } from "socket.io-client";
const socket = io("http://localhost:800");

function App() {
  const [commandList, setCommandList] = useState([])
  const [currentTeam, setCurrentTeam] = useState("select")
  const [keyStatePointsList, setKeyStatePointsList] = useState([])

  useEffect(()=>{
    socket.emit("requestCommandsList");
  },[]);
  useEffect(()=>{
    socket.on("responseCommandsList",(msg)=>{
      setCommandList(msg);
    });
  },[]);
  useEffect(()=>{
    socket.on("responseKeyStatePoints",(msg)=>{
      if (msg.team === currentTeam) {
        setKeyStatePointsList(msg.states);
        console.log(msg.states);
      }
      
    });
  });

  const [userInfo, setUserInfo] = useState({
    username: "noname"
    , access:{
      panicLevel:60
      , currentStatus:true
    }
    , aboutUser:"дфжывл аодлывфоаджлфыв оадлжывфоадлжывоадлвыо  ывлдофадлжв ыофдлаовдылфжоа двлыфжоадлвыфоадловыфдла офывдлжа овыдлфжоа длывжфоа длжывф оа длжфыводлаж оывфдлж аофдывлжоа длвыфо адлжфывоадлжфывжаодлвыфлда ов дфжывл аодлывфоаджлфыв оадлжывфоадлжывоадлвыо  ывлдофадлжв ыофдлаовдылфжоа двлыфжоадлвыфоадловыфдла офывдлжа овыдлфжоа длывжфоа длжывф оа длжфыводлаж оывфдлж аофдывлжоа длвыфо адлжфывоадлжфывжаодлвыфлда ов дфжывл аодлывфоаджлфыв оадлжывфоадлжывоадлвыо  ывлдофадлжв ыофдлаовдылфжоа двлыфжоадлвыфоадловыфдла офывдлжа овыдлфжоа длывжфоа длжывф оа длжфыводлаж оывфдлж аофдывлжоа длвыфо адлжфывоадлжфывжаодлвыфлда ов дфжывл аодлывфоаджлфыв оадлжывфоадлжывоадлвыо  ывлдофадлжв ыофдлаовдылфжоа двлыфжоадлвыфоадловыфдла офывдлжа овыдлфжоа длывжфоа длжывф оа длжфыводлаж оывфдлж аофдывлжоа длвыфо адлжфывоадлжфывжаодлвыфлда ов"
  })
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header user={userInfo} modal={setModal}/>
      <MyModal modal={modal} setModal={setModal}/>
      <MainController 
        commandList={commandList}
        currentTeam={currentTeam}
        setCurrentTeam={setCurrentTeam}
        socket={socket} 
        userInfo={userInfo} 
        setUserInfo={setUserInfo} 
        keyStatePointsList = {keyStatePointsList}
        setKeyStatePointsList = {setKeyStatePointsList}
      />
    </>
  );
}

export default App;
