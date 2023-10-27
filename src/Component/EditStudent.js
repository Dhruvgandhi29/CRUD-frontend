import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";
import { useParams } from "react-router-dom";
function EditStudent() {
  const [intialValue, setIntialValue] = useState({
    name: "",
    email: "",
    rollNo: "",
  });
  const [newData, setNewData] = useState([]);
  const getState = (childData) => {
    setNewData(childData);
  };
  const handleSubmit = () => {
    const data = { name: newData[0], email: newData[1], rollNo: newData[2] };
    Axios.put(
      "https://backend-deployment-sjaf.onrender.com/students/update-student/" +
        id,
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Record updated");
          window.location.assign("/#/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert(err));
  };

  const { id } = useParams();

  useEffect(() => {
    Axios.get(
      "https://backend-deployment-sjaf.onrender.com/students/update-student/" +
        id
    )
      .then((res) => {
        if (res.status === 200) {
          const { name, email, rollNo } = res.data;
          setIntialValue({ name, email, rollNo });
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        getState={getState}
        nameValue={intialValue.name}
        emailValue={intialValue.email}
        rollNoValue={intialValue.rollNo}
      >
        Update Student
      </StudentForm>
      {/* something needs to be passed as props */}
    </form>
  );
}
export default EditStudent;
//upload the  files in the github repositiory
