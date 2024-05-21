import { Button, Card } from "react-bootstrap";


function BookCard({ image, title, text }) {
  return (
    <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}

export default BookCard;