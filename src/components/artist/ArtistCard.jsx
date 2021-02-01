import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const ArtistCard = ({ props }) => {
  return (
    <div className="p-2">
      <Card style={{ width: "12rem" }} border="danger">
        <Card.Body>
          <Link to={`/`}>
            <Image src={props.band_img} fluid roundedCircle />
          </Link>
          <Card.Title>{props.artist}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArtistCard;
