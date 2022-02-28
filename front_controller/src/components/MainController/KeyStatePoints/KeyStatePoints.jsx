const { Form } = require("react-bootstrap")

let KeyStatePoints = (props)=>{return(
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {props.keyStatePointsList.map((e, id)=>{
                        return(
                        <Form.Check 
                            type="checkbox" 
                            label={e.title} 
                            defaultChecked={
                                props.keyStatePointsList[id].state
                            }
                            checked={
                                props.keyStatePointsList[id].state
                            }
                            onChange={()=>{
                                let change = props.keyStatePointsList;
                                change[id].state = !props.keyStatePointsList[id].state;
                                props.setKeyStatePointsList(change);
                                props.socket.emit("keyStatePoints", {
                                    "team": props.currentTeam
                                    , "field": props.keyStatePointsList[id].title
                                    , "status":props.keyStatePointsList[id].state
                                })
                            }}
                        />
                        )
                    })}
                </Form.Group>
)}

export default KeyStatePoints