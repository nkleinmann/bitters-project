import React from 'react';
import groupShot from './../_assets/groupShot.jpg';
import boyBitters from './../_assets/boybitters.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Blurb() {
    return(
        <div>
            <Row className="p-3 justify-content-center">
                <Col sm={8}>
                    <p className='blurb'>This could be a blurb about the company and product.</p>
                    <p>I'm baby intelligentsia pok pok cloud bread bicycle rights, mlkshk photo booth vape man bun try-hard. Franzen cred tousled portland.</p>
                    <img src={groupShot} alt="Dan and James" width="300px"/>
                </Col>
            </Row>
            <Row className="p-3 justify-content-center">
                <Col sm={8}>
                    <p className='blurb'>I'm baby intelligentsia pok pok cloud bread bicycle rights, mlkshk photo booth vape man bun try-hard. Franzen cred tousled portland. 8-bit photo booth four dollar toast succulents, viral prism kogi thundercats pok pok jianbing knausgaard migas etsy authentic. Photo booth salvia gentrify franzen, air plant swag af +1 meditation. Glossier seitan pug vice. Church-key sustainable poutine yuccie tofu VHS mixtape. Fam organic subway tile, mlkshk succulents chicharrones umami vape literally listicle master cleanse paleo banjo.</p>
                    <img src={boyBitters} alt="Boy Bitters Design" width="300px"/>
                </Col>
            </Row>
        </div>
    )
}

export default Blurb;