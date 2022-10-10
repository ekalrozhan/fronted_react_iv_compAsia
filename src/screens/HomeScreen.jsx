import FilterForm from "../components/FilterForm";
import ProductListing from "../components/ProductListing";
import Paginated from "../components/Paginated";
import { Row, Col, Container } from "reactstrap";
import "./homeScreen.css";

const HomeScreen = () => {
  return (
    <Container className="home">
      <Row>
        <Col md={3}>
          <FilterForm />
        </Col>

        <Col md={9}>
          <ProductListing />
        </Col>
      </Row>
      <Row className="paginated__center">
        <Paginated />
      </Row>
    </Container>
  );
};

export default HomeScreen;
