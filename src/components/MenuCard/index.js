import React from "react";
import { Card } from "react-bootstrap";
import Image from "components/Image";

const MenuCard = ({ data, handleCard }) => (
  <>
    <Card className="c-card" onClick={() => handleCard(data.itemId)}>
      <Image className="card-img-top" src={data.imageUrl} alt={data.name} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data.category}
        </Card.Subtitle>
        <Card.Text>{data.description}</Card.Text>
        <small className={data.available ? "text-success" : "text-danger"}>
          {data.available ? "Available" : "Out of Stock"}
        </small>

        <small className="float-right text-info">${data.price}</small>
      </Card.Body>
    </Card>
  </>
);

export default MenuCard;
