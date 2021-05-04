import { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class MyNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {message:"Welcome to the Strivestaurant"}
    }
    render() {
        console.log(this.state.message)
        return (<Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">{this.props.title} - Strive For Food</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>Menu</Nav.Link>
                    <Nav.Link>Reservations</Nav.Link>
                    <Nav.Link>Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default MyNavBar;