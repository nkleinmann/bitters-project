import React from 'react';
import Card from 'react-bootstrap/Card'
import bitters from './cardInfo'

function Cards() {
    console.log(bitters)
    return(
        <div className="text-align">
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1631262553859-945f7fb49bba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Cocktail" />
                <Card.Body>
                    <Card.Title>{bitters[0].title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card</Card.Subtitle>
                    <Card.Text>Text</Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;