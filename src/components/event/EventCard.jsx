import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const EventCard = ({ props }) => {
  return (
    <div className="p-2">
      <Card style={{ width: "28rem" }} border="danger">
        <Card.Body>
          <Link to={`/events/${props.id}`}>
            <Card.Title>{props.event}</Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">
            {props.datetime} , {props.venue}
          </Card.Subtitle>
          <Card.Text>
            演出者：
            {props.show_attendees.reduce((prev, curr) => [prev, ", ", curr])}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
