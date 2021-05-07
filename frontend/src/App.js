import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Papa from "papaparse";

function App() {
  const [total, setTotal] = useState(0);
  const [currPortfolio, setCurrPortfolio] = useState(0);
  const [tradesValue, setTradesValue] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log(parseFloat(currPortfolio));
    console.log(tradesValue);
    setTotal((tradesValue + parseFloat(currPortfolio)).toFixed(2));
  };

  const handleUploadCSV = (e) => {
    const file = e.target.files[0];
    if (file) {
      const ext = file.name.substring(file.name.lastIndexOf(".") + 1);
      if (ext === "csv") {
        const fileReader = new FileReader();
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = (e) => {
          const data = Papa.parse(e.target.result).data;
          const result = data.reduce((res, row) => {
            if (row[3] === "S") {
              return res + parseFloat(row[8]);
            } else if (row[3] === "B") {
              return res - parseFloat(row[8]);
            } else {
              return res;
            }
          }, 0);
          setTradesValue(result);
        };
      }
    }
  };

  return (
    <Container>
      <Col md={12}>
        <Row md={12}>
          <h1 className="text-center mt-4">CommSec Total Profit/Loss Calculator</h1>
        </Row>
        <Row md={12}>
          <Form>
            <Form.Group>
              <Form.Label>Current Total Portfolio Value</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setCurrPortfolio(e.target.value);
                }}
                type="text"
                placeholder="Enter Portfolio Value"
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Confirmation Details (ConfirmationDetails.csv)</Form.Label>
              <Form.File accept={".csv"} onChange={(e) => handleUploadCSV(e)} id="csv" />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" onClick={(e) => handleCalculate(e)}>
              Calculate
            </Button>
          </Form>
        </Row>
        <Row md={12}>
          <h2 className="text-center">Total Returns</h2>
          <h3 className="text-center" style={total < 0 ? { color: "red" } : { color: "green" }}>
            {total >= 0 ? `+$${total}` : `-$${total.substring(1)}`}
          </h3>
        </Row>
      </Col>
    </Container>
  );
}

export default App;
