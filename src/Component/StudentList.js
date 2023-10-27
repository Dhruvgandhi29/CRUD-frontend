import { useEffect, useState } from "react";
import Axios from "axios";
import StudentListRow from "./StudentListRow";
function StudentList() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    Axios.get("https://backend-deployment-sjaf.onrender.com/students/")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  });
  const ListItems = () => {
    return arr.map((val, ind) => {
      return <StudentListRow obj={val}></StudentListRow>;
    });
  };
  return (
    <table className="table my-2 table-success table-bordered table-striped">
      <thead className="text-center">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Roll Number</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>{ListItems()}</tbody>
    </table>
  );
}
export default StudentList;
