import React from "react";
import { Form, FormGroup, Col, Label, Input, Button } from "reactstrap";

const FilterForm = () => {
  return (
    <div className="mt-5">
      <Form>
        <FormGroup row>
          <Label for="exampleEmail">Product Name:</Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter product name"
              type="email"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect">Category:</Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
              <option>Phone</option>
              <option>Laptop</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect">Brand:</Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
              <option>Apple</option>
              <option>Dell</option>
              <option>Huawei</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect">Color:</Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
              <option>red</option>
              <option>green</option>
              <option>blue</option>
              <option>black</option>
              <option>yellow</option>
              <option>grey</option>
            </Input>
          </Col>
        </FormGroup>
        <Button color="primary">Search</Button>
      </Form>
    </div>
  );
};

export default FilterForm;
