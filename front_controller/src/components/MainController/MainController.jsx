import KeyStatePoints from "./KeyStatePoints/KeyStatePoints"
import PanicButton from "./PanicButton/PanicButton"
import SelectTeam from "./SelectTeam/SelectTeam"

const { Container} = require("react-bootstrap")


const MainController = (props)=>{
    // const [displayTeam, setDisplayTeam] = useState("select");
    return(<Container style={{marginTop:"1.5em", padding:"0 1em", fontSize:"1.75rem"}}>
        <SelectTeam
            currentTeam = {props.currentTeam}
            setCurrentTeam = {props.setCurrentTeam}
            commandList = {props.commandList}
            socket = {props.socket}
        />

        <br/>

        <div
            style={props.currentTeam==="select"?{display:"none"}:{}}
        >
            <PanicButton
                socket = {props.socket}
                userInfo = {props.userInfo}
                currentTeam = {props.currentTeam}
            />

            <br />
            <br />
            
            <div style={props.userInfo.access.currentStatus?{}:{display:'none'}}>    
                <KeyStatePoints
                    keyStatePointsList = {props.keyStatePointsList}
                    setKeyStatePointsList = {props.setKeyStatePointsList}
                    socket = {props.socket}
                    currentTeam = {props.currentTeam}
                />
            </div>
            
        </div>

</Container>)}


export default MainController