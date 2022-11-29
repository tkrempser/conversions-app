import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table } from "react-bootstrap";
import moment from "moment";

const ConversionList = (props) => {
  if (props.conversions.length === 0) {
    return <div className="h5 text-muted">No conversions yet.</div>;
  }

  return (
    <Row>
      <Col>
        <Table responsive>
          <thead>
            <tr>
              <th>Input Number</th>
              <th>Output Words</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {props.conversions.map((conversion) => (
              <tr key={conversion.url}>
                <td>{conversion.input_number}</td>
                <td>{conversion.output_words}</td>
                <td>{moment(conversion.created_at).format("MM/DD/YYYY HH:mm:ss")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ConversionList;
