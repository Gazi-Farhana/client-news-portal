import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author } = news;
    return (
        <Card className="text-center mb-4">
            <Card.Header>
                <Image src={author.img} roundedCircle />
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img carient ="top" src={image_url}></Card.Img>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : 
                    <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                    {details}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCart;