import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Image, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import DeleteModal from "./DeleteModal.component";

const List = (props) => {
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.userData?.map((value, idx) => (
            <tr key={value?._id}>
              <td>
                <Image
                  src={`${value?.photo}`}
                  alt={`${value?.photo}`}
                  rounded
                  width={100}
                  height={100}
                />
              </td>
              <td> {value?.first_name}</td>
              <td>{value?.last_name}</td>
              <td>{value?.email}</td>
              <td>{value?.number}</td>
              <td>{value?.gender === "F" ? "Female" : "Male"}</td>
              <td>
                <Button
                  className="btn-style"
                  variant="success"
                  onClick={() => navigate(`/employee/edit/${value?._id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleShow(value?._id, value?.first_name)}
                >
                  <AiFillDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <DeleteModal show={show} handleClose={handleClose} values={val} />
    </>
  );
};

export default List;
