import "./SubmitAds.css";
import { Container, Form, Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const SubmitAds = () => {
  const [/* color, */ setColor] = useState("white");
  const click = () => setColor("blue");
  return (
    <>
      <Container className="Submit--Ads">
        <Form>
          <h2 className="sub--text">
            Hi! Let's get started listing your place.
          </h2>
          <p className="sub-mini-text">
            In this form, we'll collect some basic and additional information
            about your listing.
          </p>
          <p>
            <span>*</span> Home type
          </p>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button onClick={click} variant="outline-primary">
              Apartment
            </Button>
            <Button variant="outline-primary">House</Button>
          </ButtonGroup>
          <Form.Group className="mb-3" controlId="formGroupGuest">
            <Form.Label>
              <span>*</span> Max # of Guests
            </Form.Label>
            <Form.Control
              style={{ width: "100px" }}
              type="number"
              placeholder="4"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Label>
              <span>*</span> Title
            </Form.Label>
            <Form.Control
              style={{ width: "500px" }}
              type="text"
              placeholder="The iconic and luxurious Bel-Air mansion"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupArea">
            <Form.Label>
              <span>*</span> Description of listing
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="
                Modern, clean, and iconic home of the Fresh Prince.
                Situated in the heart of Bel-Air, Los Angeles.
              "
              style={{ height: "100px", width: "500px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupAddress">
            <Form.Label>
              <span>*</span> Address
            </Form.Label>
            <Form.Control
              style={{ width: "500px" }}
              type="text"
              placeholder="Address"
            />
          </Form.Group>
          <Form.Group controlId="formGridState">
            <Form.Label>
              <span>*</span> Town/Province
            </Form.Label>
            <Form.Control
              as="select"
              style={{ width: "500px" }}
              defaultValue="Choose..."
            >
              <option>Бишкек</option>
              <option>Ош</option>
              <option>Нарын</option>
              <option>Баткен</option>
              <option>Жалал-абад</option>
              <option>Талас</option>
              <option>Чуй</option>
              <option>Ыссык-кол</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <span>*</span>Image
            </Form.Label>
            <Form.File label="Upload Image" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label>
              <span>*</span> Price
            </Form.Label>
            <Form.Control
              className="formCont"
              type="number"
              placeholder="120"
            />
          </Form.Group>
          <Button variant="primary">Submit</Button>
        </Form>
      </Container>
    </>
  );
};
