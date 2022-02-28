import { Container, Dropdown } from 'react-bootstrap';

const Header = (props)=>{return(
    <header style={{padding:".5em 0", backgroundColor:"#e0e0e0"}}>
        <Container style={{display:"flex", justifyContent:"space-between", padding:".25em"}}>
          <div>
              <h3>{props.user.username}</h3>
          </div>
          <Dropdown className="d-inline mx-2" align="end">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Меню
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <button className='dropdown-item' onClick={()=>{props.modal({title:"Про роль", payload:props.user.aboutUser})}}>Узнать про роль</button>
                <hr />
                <Dropdown.Item href="#">Сменить роль</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </header>
)}

export default Header;