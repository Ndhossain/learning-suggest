"use client"
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "@/components/bookCard";

export default function Home() {
  return (
    <main className="mt-5">
      <Container>
        <Row>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
          <Col xs={6} md={3} className="mb-4"><BookCard image={"/books.jpg"} title={"Card Title"} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`} /></Col>
        </Row>
      </Container>
    </main>
  );
}
