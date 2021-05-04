import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'
import DishComments from './DishComments'
import ReservationForm from './ReservationForm'
import Reservations from './Reservations'

class Home extends React.Component {

    state = {
        ratingLessThan5: false,
        selectedDish: items[0],
    }


    componentDidUpdate() {
        this.state.selectedDish.comments.map((comment) => {
            console.log('comment.rating:', comment.rating)
            if (comment.rating !== 5 && !this.state.ratingLessThan5) {
                this.setState({ ratingLessThan5: true })
            }
        })
    }

    render() {
        return (
            <Container>
                {/* <div class="container" /> */}
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8}>
                        <Reservations header={"This is a Reservations header"} />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8}>
                        {/* <div class="col col-xs-12 col-md-6">
                                COL CONTENT
                            </div>
                        */}
                        {this.props.newTitle ? <h1>{this.props.newTitle}</h1> : <h1>Welcome to Strivestaurant</h1>}
                        {this.props.newPayoff ? <p>{this.props.newPayoff}</p> : <p>The best pasta dishes you can find on the web!</p>}
                    
                        <Carousel>
                            {
                                // every time you do a .map in react you'll need to
                                // differentiate each one of the JSX elements you're generating
                                items.map((item, index) => (
                                    // we need to let React know that all these carousel slides are different
                                    <Carousel.Item
                                        key={item.name}
                                        // the key prop must be unique for every slide
                                        onClick={() => this.setState({ selectedDish: item })}
                                    >
                                        {/* the key is necessary for React's VIRTUAL DOM */}
                                        <img
                                            className="d-block w-100"
                                            src={item.image}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8}>
                        {(this.state.selectedDish.name === "Amatriciana" &&
                            <p>You selected the Amatriciana dish. This dish doesn't have any comment</p>
                        )}
                        {(this.state.selectedDish.name !== "Amatriciana" &&
                            <DishComments dish={this.state.selectedDish} marginTop={0} />
                        )}
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8}>
                        {(!this.state.ratingLessThan5 && <ReservationForm />)}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home