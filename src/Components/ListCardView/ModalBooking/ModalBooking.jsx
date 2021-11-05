import { Modal, Button, CloseButton } from "react-bootstrap";
import "./ModalBooking.css";

export function ModalBooking(props) {
  return (
    <Modal
      {...props}
      size="mg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="headerModal">
          <div className="textModal">Book your trip</div>
          <input type="button" onClick={props.onHide} className="btn-close" />
        </div>
      </Modal.Header>
      <Modal.Body>
        <p>Enter your payment information to book the listing, inclusive.</p>
        <p>
          ${props.price} * {props.rentalDays} days = $
          {props.price * props.rentalDays}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Book</Button>
      </Modal.Footer>
    </Modal>
  );
}
