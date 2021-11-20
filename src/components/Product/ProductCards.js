import React from 'react';
import Card from 'react-bootstrap/Card'

function Product(props) {
    return (
        <>
            <Card key={props.productInfo.title} style={{ width: '18rem' }} className="m-4">
            <Card.Img 
            variant="top" 
            src={props.productInfo.image}
            alt="Cocktail" />
            <Card.Body>
                <Card.Title>{props.productInfo.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.productInfo.price}</Card.Subtitle>
                {/* <Card.Text>{props.productInfo.text}</Card.Text>
                <Card.Link href={props.productInfo.link}>Check it out</Card.Link> */}
            </Card.Body>
            </Card>
        </>

    )
}

export default Product;
