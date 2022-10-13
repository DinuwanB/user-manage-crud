import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import DeleteModal from "./DeleteModal.component";
import "../index.css";

const CardDetail = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  //modal show use state
  const [show, setShow] = useState(false);
  const [val, setVal] = useState({ id: "", name: "" });

  //modal close & show arrow functions
  const handleClose = () => setShow(false);
  const handleShow = (id, name) => {
    setVal({ id: id, name: name });
    setShow(true);
  };

  return (
    <>
      <Row xs={1} md={4}>
        {data?.userData?.map((value, idx) => (
          <Col key={value?._id} style={{ marginBottom: "1rem" }}>
            <Card style={{ marginTop: "2%" }}>
              <Card.Img
                variant="top"
                src={`${value?.photo}`}
                alt={`${value?.photo}`}
              />
              <Card.Body>
                <Card.Title>
                  {value?.first_name + " " + value?.last_name}
                </Card.Title>
                <Card.Text>
                  <>{value?.email}</>
                </Card.Text>
                <Card.Text>
                  <>{value?.number}</>
                </Card.Text>
                <Card.Text>
                  <>{value?.gender === "F" ? "Female" : "Male"}</>
                </Card.Text>

                <Row className="div-end-style">
                  <Col>
                    <Button
                      className="btn-style"
                      variant="success"
                      onClick={() => navigate(`/employee/edit/${value?._id}`)}
                    >
                      <AiFillEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleShow(value?._id, value?.first_name)}
                    >
                      <AiFillDelete />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <DeleteModal show={show} handleClose={handleClose} values={val} />
    </>
  );
};

export default CardDetail;
