const {Form} = require("react-bootstrap")

let SelectTeam = (props)=>{return(
    <Form.Group 
            controlId="formGridState"
            style={{margin:".5em 0"}}
        >
            <Form.Label>Команда</Form.Label>
            <Form.Select 
                onChange={(e)=>{
                    props.setCurrentTeam(e.target.value);
                    props.socket.emit("keyStatePoints", {requestTeam: e.target.value})
                }}
                defaultValue="select"
                style={{fontSize:"1.375em"}}
            >
                <option value="select">--Выберите--</option>
                {
                    props.commandList.map((e, id)=>{
                        return(<option value={e.title}>{id+1 + ") " + e.title}</option>)
                    })
                }
            </Form.Select>
        </Form.Group>
)}

export default SelectTeam