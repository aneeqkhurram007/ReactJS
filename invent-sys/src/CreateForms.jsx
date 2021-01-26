import React from 'react';
import { Form, Button } from "react-bootstrap";
const CreateForms = () => {
    return (
        <>
            <Form>
                <Form.Group controlId="formBasicPName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Product Name" />
                </Form.Group>

                <Form.Group controlId="formBasicPID">
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control type="text" placeholder="Product ID" />
                </Form.Group>

                <Form.Group controlId="formBasicPNumber">
                    <Form.Label>Number of pieces</Form.Label>
                    <Form.Control type="number" placeholder="Number of pieces" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </>
    )
}
export default CreateForms;