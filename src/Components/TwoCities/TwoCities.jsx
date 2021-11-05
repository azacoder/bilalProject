import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./TwoCities.css";

const TwoCities = () => {
  return (
    <div>
      <Container className="imgs">
        <Row>
          <Card.Text className="textT">
            <b> Listings of any kind </b>
          </Card.Text>
          <Col>
            <Card className="twoimg">
              <Card.Img
                variant="top"
                src="https://tinyhouse-blacksonic.herokuapp.com/static/media/san-fransisco.bc8599ab.jpg"
              />
            </Card>
          </Col>
          <Col>
            <Card className="twoimg">
              <Card.Img
                variant="top"
                src="https://tinyhouse-blacksonic.herokuapp.com/static/media/cancun.7009e472.jpg"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TwoCities;
