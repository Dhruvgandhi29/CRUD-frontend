import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav";
import CreateStudent from "./Component/CreateStudent";
import StudentList from "./Component/StudentList";
import EditStudent from "./Component/EditStudent";

function App() {
  return (
    <div className="container">
      {" "}
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateStudent />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
