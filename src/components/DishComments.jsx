import { ListGroup } from 'react-bootstrap'
import { Component } from 'react';


export default class DishComments extends Component{ 
    render() {
        return  (
    // props.dish is the whole object
    <div className={`mt-${this.props.marginTop}`}>
        {(this.props.dish ?
        <>
        <h2>Comments for {this.props.dish.name}</h2>
        <ListGroup>
            {
                this.props.dish.comments.map(c => (
                    <ListGroup.Item key={c.id}>"{c.comment}" from {c.author}</ListGroup.Item>
                ))
            }
        </ListGroup>
        </>
        : <p>There is not any Dish</p>)}
    </div>
)
        }
}