import React from 'react';
import Card from 'react-bootstrap/Card'

function Product(props) {
    return (
        <>
            <Card key={props.productInfo.title} style={{ width: '18rem' }} className="m-4">
            <Card.Img 
            variant="top" 
            src="https://images.unsplash.com/photo-1631262553859-945f7fb49bba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Cocktail" />
            <Card.Body>
                <Card.Title>{props.productInfo.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.productInfo.subtitle}</Card.Subtitle>
                <Card.Text>{props.productInfo.text}</Card.Text>
                <Card.Link href={props.productInfo.link}>Check it out</Card.Link>
            </Card.Body>
            </Card>
        </>

    )
}

export default Product;