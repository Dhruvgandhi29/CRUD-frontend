import Axios from "axios";
import { Link } from "react-router-dom";
function StudentListRow(props) {
  const { _id, name, email, rollNo } = props.obj; //Object destruction
  const handleClick = () => {
    Axios.delete(
      "https://backend-deployment-sjaf.onrender.com/students/delete-student/" +
        _id
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Record deleted successfully");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert(err));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollNo}</td>
      <td>
        <Link
          className="text-light text-decoration-none"
          to={"/edit-student/" + _id}
        >
          {" "}
          <button className="btn mx-1 btn-success">Edit</button>
        </Link>

        <button className="btn btn-danger" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}
export default StudentListRow;
