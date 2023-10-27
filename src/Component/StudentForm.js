import { useEffect, useState } from "react";

function StudentForm(props) {
  const [name, setName] = useState(props.nameValue); //from the id in the input field we will have the orignal value
  const [email, setEmail] = useState(props.emailValue);
  const [rollno, setRollno] = useState(props.rollNoValue);
  const arr = [name, email, rollno];
  const handleClick = () => {
    props.getState(arr);
  };
  useEffect(() => {
    setName(props.nameValue);
    setEmail(props.emailValue);
    setRollno(props.rollNoValue);
  }, [props.nameValue, props.emailValue, props.rollNoValue]);

  return (
    <div style={{ maxWidth: "40%", margin: "0px auto" }}>
      <input
        defaultValue={props.nameValue}
        onChange={(event) => setName(event.target.value)}
        className="form-control my-2"
        placeholder="Enter your name"
      ></input>
      <input
        defaultValue={props.emailValue}
        onChange={(event) => setEmail(event.target.value)}
        className="form-control my-2"
        placeholder="Enter your email"
      ></input>
      <input
        defaultValue={props.rollNoValue}
        onChange={(event) => setRollno(event.target.value)}
        className="form-control my-2"
        placeholder="Enter your roll number"
      ></input>
      <button
        onClick={handleClick}
        className="btn btn-success my-2 d-block mx-auto"
        type="submit"
      >
        {props.children}
      </button>
    </div>
  );
}
export default StudentForm;
