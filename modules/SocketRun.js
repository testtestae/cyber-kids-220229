function SocketRun(io
    , payload
    // , chairsData
    ) {
    try {
        let {
            commandList
            ,keyStatePointsListTeams
        } = payload
        console.log('socket run');
        io.on('connection', (socket) => {
            // console.log('socket connected');
            socket.on("panic", (msg)=>{
                console.log(msg);
            })

            socket.on("requestCommandsList", ()=>{
                io.emit("responseCommandsList", commandList)
            })

            socket.on("keyStatePoints", (msg)=>{
                if (msg.team !== undefined) {  //change checkboxes
                    keyStatePointsListTeams.map((team, i)=>{
                        if (team.team === msg.team) {
                            team.states.map((teamState)=>{
                                if (teamState.title === msg.field) {
                                    teamState.state = msg.status;
                                    io.emit("responseKeyStatePoints", keyStatePointsListTeams[i]);
                                    console.log(keyStatePointsListTeams[i]);
                                }
                            })
                        }
                    })
                    
                }

                if (msg.requestTeam !== undefined) {    //just request team info
                    commandList.map((e, i)=>{
                        if (e.title === msg.requestTeam) {
                            io.emit("responseKeyStatePoints", keyStatePointsListTeams[i])
                            console.log(`change to ${msg.requestTeam} team`);
                            console.log(keyStatePointsListTeams[i]);
                        }
                    })
                }
                
            })

            socket.on("panic", (msg)=>{
                // console.log(msg);
                keyStatePointsListTeams.map((team, i)=>{
                    if (team.team === msg.team) {
                        console.log(team);
                        team.panicLevel = team.panicLevel + Number(msg.level) ;
                    }
                })
            })
            // chairsData.map((chair)=>{
            //     socket.on(chair.topic, msg => {
            //         console.log("i'm know you, " + chair.topic);
            //         console.log(msg);
            //         io.emit(chair.topic, chair);
            //         // io.emit('chat message', msg);
            //     });
            // });
            // socket.on('all', (msg)=>{
            //     io.emit('all', chairsData);
            // })
            io.on('disconnect', ()=>{
                console.log('socket disconnected');
            })
        })
    } catch (error) {
        console.log("SocketRun MODULE ERROR");
        console.log(error);
    }

    
}

module.exports = {SocketRun}