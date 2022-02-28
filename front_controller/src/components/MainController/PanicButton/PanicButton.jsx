const { Button } = require("react-bootstrap")

let PanicButton = (props)=>{return(
    <Button 
        variant="danger" 
        style={{fontSize:"2em"}} 
        onClick={()=>{
            props.socket.emit("panic", { 
                team: props.currentTeam
                , level:props.userInfo.access.panicLevel
            })
        }}
    >Паника</Button>
)}

export default PanicButton