import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import ConversionList from "./components/ConversionList/ConversionList";
import NewConversionForm from "./components/NewConversionForm/NewConversionForm";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

const API_ENDPOINT = "https://conversions.krempser.com.br";

const App = () => {
  const [lastConversions, setLastConversions] = useState([]);
  const [refresh, setRefresh] = useState([false]);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/conversions.json`)
      .then((response) => response.json())
      .then((data) => {
        setLastConversions(data);
      });
  }, [refresh]);

  const onConvertHandler = (conversionData) => {
    fetch(`${API_ENDPOINT}/conversions.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(conversionData),
    })
      .then(() => {
        setRefresh([!refresh]);
      });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand>
            <img
              alt="React Point of Sale"
              src={logo}
              height="30"
              className="d-inline-block align-top me-2"
            />
            React Conversions
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row className="mt-1">
          <Col className="pt-1">
            <h3 className="mb-3">New Conversion</h3>
            <NewConversionForm onConvert={onConvertHandler} />
          </Col>
        </Row>
        <Row className="mt-1">
          <Col className="pt-1">
            <h3 className="mb-3">Last Conversions</h3>
            <ConversionList conversions={lastConversions} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
