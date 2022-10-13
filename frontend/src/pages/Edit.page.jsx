import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar.component";
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/Form.component";
import {
  UserDetailAction,
  UserEditAction,
  UserDetailClearAction,
} from "../redux/actions/user.actions";

const EditPage = (props) => {
  let { id } = useParams();
  const { UserDetailAction, UserEditAction } = props;
  const navigate = useNavigate();

  useEffect(() => {
    UserDetailAction(id);

    return () => {
      UserDetailClearAction();
    };
  }, [id]);

  const onUserSubmit = (userObj) => {
    UserEditAction(userObj, id, navigate);
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
            <FormComponent id={id} passFunc={onUserSubmit} />
          </Col>
          <Col sm={0}></Col>
        </Row>
      </Container>
    </>
  );
};

EditPage.prototype = {
  UserDetailAction: PropTypes.func.isRequired,
  UserEditAction: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  userState: state.user.currentData,
});

export default connect(mapStateToProps, {
  UserDetailAction,
  UserEditAction,
})(EditPage);
