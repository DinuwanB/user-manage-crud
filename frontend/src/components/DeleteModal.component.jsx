import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { deleteUserAction } from "../redux/actions/user.actions";

const DeleteModal = (props) => {
  const { show, handleClose, values, deleteUserAction } = props;
  const deleteFunction = () => {
    deleteUserAction(values.id);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to remove {values ? values.name : "this user"}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteFunction}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DeleteModal.prototype = {
  deleteUserAction: PropTypes.func.isRequired,
};

export default connect(null, { deleteUserAction })(DeleteModal);
