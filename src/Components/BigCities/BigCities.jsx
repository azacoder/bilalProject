import React from "react";
import "./BigCities.css";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import T from "../../assets/image/toronto.jpg";
import D from "../../assets/image/dubai.jpg";
import LA from "../../assets/image/los-angeles.jpg";
import L from "../../assets/image/london.jpg";
import search1 from "../../assets/image/search3.svg";

const BigCities = () => {
  return (
    <div className="main-div">
      <div className="div1">
        <h1>Find a place you'll love to stay at</h1>
        <Form className="containerS">
          <FormControl
            type="search"
            placeholder="Search 'San Fransisco'"
            className="mr-2"
            aria-label="Search"
          />
          <Button>
            <Image className="imgS" src={search1} />
          </Button>
        </Form>
        <Container className="cont">
          <Row>
            <Col>
              <Card className="img">
                <Card.Img variant="top" src={T} />
                <Card.Title className="city">Toronto</Card.Title>
              </Card>
            </Col>
            <Col>
              <Card className="img">
                <Card.Img variant="top" src={D} />
                <Card.Title className="city">Dubai</Card.Title>
              </Card>
            </Col>
            <Col>
              <Card className="img">
                <Card.Img variant="top" src={LA} />
                <Card.Title className="city">Los Angeles</Card.Title>
              </Card>
            </Col>
            <Col>
              <Card className="img">
                <Card.Img variant="top" src={L}></Card.Img>
                <Card.Title className="city">London</Card.Title>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BigCities;
