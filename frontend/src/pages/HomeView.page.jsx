import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Container, Button, Spinner } from "react-bootstrap";
import { AiOutlineAppstore, AiOutlineBars } from "react-icons/ai";
import CardDetail from "../components/Card.component";
import List from "../components/List.component";
import NavBar from "../components/NavBar.component";
import { getUserListAction } from "../redux/actions/user.actions";
import "../index.css";

const HomePage = (props) => {
  //props destructure
  const { getUserListAction, userState } = props;
  // hooks
  const [grid, setGrid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      getUserListAction();
    })();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="div-end-style">
          <Col>
            <Button
              className="btn-style"
              variant="primary"
              onClick={() => navigate("/employee/add")}
            >
              ADD EMPLOYEE
            </Button>
            <Button variant="primary" onClick={() => setGrid(!grid)}>
              {grid ? <AiOutlineBars /> : <AiOutlineAppstore />}
            </Button>
          </Col>
        </Row>
        <Row>
          {useState.loading ? (
            <>
              <Spinner animation="border" variant="primary" />
            </>
          ) : (
            <></>
          )}

          {grid ? <CardDetail data={userState} /> : <List data={userState} />}
        </Row>
      </Container>
    </>
  );
};

HomePage.prototype = {
  getUserListAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userState: state.user,
});

export default connect(mapStateToProps, {
  getUserListAction,
})(HomePage);
