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

            let changesApply = (i)=>{
                io.emit("responseAllCommandInfo", keyStatePointsListTeams);
                io.emit("responseKeyStatePoints", keyStatePointsListTeams[i]);
            }

            socket.on("requestCommandsList", ()=>{
                io.emit("responseCommandsList", commandList)
            })

            socket.on("requestAllCommandInfo", ()=>{
                io.emit("responseAllCommandInfo", keyStatePointsListTeams)
            })

            socket.on("keyStatePoints", (msg)=>{
                if (msg.team !== undefined) {  //change checkboxes
                    keyStatePointsListTeams.map((team, i)=>{
                        if (team.team === msg.team) {
                            team.states.map((teamState)=>{
                                if (teamState.title === msg.field) {
                                    teamState.state = msg.status;
                                    changesApply(i)
                                }
                            })
                        }
                    })
                    
                }

                if (msg.requestTeam !== undefined) {    //just request team info
                    commandList.map((e, i)=>{
                        if (e.title === msg.requestTeam) {
                            changesApply(i)
                            console.log(`change to ${msg.requestTeam} team`);
                            console.log(keyStatePointsListTeams[i]);
                        }
                    })
                }
                
            })

            socket.on("panic", (msg)=>{
                keyStatePointsListTeams.map((team, i)=>{
                    if (team.team === msg.team) {
                        team.panicLevel = team.panicLevel + Number(msg.level) ;
                        changesApply(i);
                    }
                })
            })



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