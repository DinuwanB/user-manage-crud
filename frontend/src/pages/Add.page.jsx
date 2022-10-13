import NavBar from "../components/NavBar.component";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormComponent from "../components/Form.component";
import { createUserAction } from "../redux/actions/user.actions";
import "../index.css";

const AddUserPage = (props) => {
  const { createUserAction } = props;
  const navigate = useNavigate();

  //user add submit function
  const onUserSubmit = (userObj) => {
    createUserAction(userObj, navigate);
  };

  return (
    <>
      <NavBar />
      <Container>
        <Row className="div-end-style">
          <Col>
            <Button
              className="btn-style"
              variant="primary"
              onClick={() => navigate(`/`)}
            >
              List View
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={0}></Col>
          <Col sm={6}>
            <FormComponent passFunc={onUserSubmit} />
          </Col>
          <Col sm={0}></Col>
        </Row>
      </Container>
    </>
  );
};

AddUserPage.prototype = {
  createUserAction: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  userCreateState: state.user,
});

export default connect(mapStateToProps, {
  createUserAction,
})(AddUserPage);
