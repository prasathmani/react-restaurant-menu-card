import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";

const MenuView = ({ data, handleSave }) => {
  const history = useHistory();

  /**
   * Go back to menu list page
   * @param {Event} e
   */
  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      {data ? (
        <>
          <Row>
            <Col>
              <h1>{data.name}</h1>
            </Col>
            <Col className="text-right">
              <Button variant="secondary" onClick={handleGoBack}>
                Go Back
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form onSubmit={handleSave}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" defaultValue={data.name} readOnly />
                </Form.Group>

                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={data.category}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="price">
                  <Form.Label>price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    required
                    pattern="[0-9]"
                    defaultValue={data.price}
                  />
                </Form.Group>

                <Form.Group controlId="available">
                  <Form.Check
                    type="checkbox"
                    label="Available"
                    name="available"
                    value={true}
                    defaultChecked={data.available}
                  />
                  <input type="hidden" name="id" value={data.itemId} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </>
      ) : (
        <h2>Not Allowed!</h2>
      )}
    </>
  );
};

export default MenuView;
