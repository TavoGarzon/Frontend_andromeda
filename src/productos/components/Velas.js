import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Velas1 = ({ Velas }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <center>
          <h2>{Velas.marca}</h2>
        </center>
      </Card.Header>
      <Card.Img
        variant="top"
        src={Velas.url}
        width={300}
        height={300}
        alt="300x300"
        rounded
      />
      <Card.Body>
        <Card.Title>{Velas.title}</Card.Title>
        <Card.Text>{Velas.description}</Card.Text>
        <Button variant="danger" size="sm">
          ${Velas.price}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="danger" size="sm">
          {Velas.category}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Velas1;
