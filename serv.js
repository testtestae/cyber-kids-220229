const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
var cors = require('cors')
const io = require('socket.io')(server, {cors: {origin: '*'}});

app.use(cors(
    {
        origin: '*'
    }    
));

let commandList = [
    {
        "title":"Один"
    }
    ,{
        "title":"Два"
    }
    ,{
        "title":"Три"
    }
    ,{
        "title":"Четыре"
    }
    ,{
        "title":"Пять"
    }
    ,{
        "title":"Шесть"
    }
]

let keyStatePointsListTeams = [
    ...commandList.map((e)=>{
        return({
            team: e.title
            , panicLevel: 0
            , states: [
                {title:"Пароль на винде", state:false}
                , {title:"Пароль на архиве", state:false}
                , {title:"Пароль на сайте", state:false}
            ]
            
        })
    })
]


let keyStatePointsList = [
    {title:"Пароль на винде", state:false}
    , {title:"Пароль на архиве", state:false}
    , {title:"Пароль на сайте", state:false}
]

app.use(express.json());

const start = async ()=>{
    await require('./modules/SocketRun').SocketRun(io, {commandList:commandList, keyStatePointsListTeams});
    await server.listen(800, ()=>{console.log("запущено");});
}

start()