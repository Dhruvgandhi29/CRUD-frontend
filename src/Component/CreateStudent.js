import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";
function CreateStudent() {
  const [arr, setArr] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: arr[0], email: arr[1], rollNo: arr[2] };
    Axios.post(
      "https://backend-deployment-sjaf.onrender.com/students/create-student",
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Record added successfully ");
        } else Promise.reject();
      })
      .catch((err) => alert(err));
    event.target.reset();
  };
  const getState = (childdata) => {
    setArr(childdata);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StudentForm
          getState={getState}
          nameValue=""
          emailValue=""
          rollNoValue=""
        >
          {/* the second getstate is parent function which passes the parent empty array to child as props */}
          Create student
        </StudentForm>
      </form>
    </div>
  );
}
export default CreateStudent;
