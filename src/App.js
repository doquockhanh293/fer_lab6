import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentList from "./Component/StudentList"; // Import component StudentList
import StudentDetail from "./Component/StudentDetail"; // Import component StudentDetail

function App() {
  const [students, setStudents] = useState([
    { name: "Đỗ Quốc Khánh", code: "QE170058", active: true },
    { name: "Nguyen Van A", code: "CODE12345", active: true },
    { name: "Tran Van B", code: "CODE67890", active: false },
  ]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [active, setActive] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleAddStudent = () => {
    if (!name || !code) return;
    const newStudent = { name, code, active };
    setStudents([newStudent, ...students]);
    setName("");
    setCode("");
    setActive(false);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleSelectStudent = (index) => {
    const selected = selectedStudents.includes(index)
      ? selectedStudents.filter((i) => i !== index)
      : [...selectedStudents, index];
    setSelectedStudents(selected);
  };

  const handleClear = () => {
    setStudents([]);
    setSelectedStudents([]);
  };

  return (
    <Router>
      <div className="container">
        <Row className="my-3">
          <Col>
            <h4>Total Selected Student: {selectedStudents.length}</h4>
          </Col>
          <Col className="text-right">
            <Button variant="primary" onClick={handleClear}>
              Clear
            </Button>
          </Col>
        </Row>

        <Form>
          <Form.Group>
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Student Code</Form.Label>
            <Form.Control
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Still Active"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddStudent}>
            Add
          </Button>
        </Form>

        <Routes>
          <Route
            path="/"
            element={
              <StudentList
                students={students}
                selectedStudents={selectedStudents}
                handleSelectStudent={handleSelectStudent}
                handleDeleteStudent={handleDeleteStudent}
              />
            }
          />
          <Route
            path="/student/:index"
            element={<StudentDetail students={students} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Button, Form, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import StudentList from "./Component/StudentList";
// import StudentDetail from "./Component/StudentDetail";

// const API_URL = "https://student-api-nestjs.onrender.com/api-docs#";

// function App() {
//   const [students, setStudents] = useState([
//     { name: "Đỗ Quốc Khánh", code: "QE170058", active: true },
//     { name: "Nguyen Van A", code: "CODE12345", active: true },
//     { name: "Tran Van B", code: "CODE67890", active: false },
//   ]);
//   const [name, setName] = useState("");
//   const [code, setCode] = useState("");
//   const [active, setActive] = useState(false);
//   const [selectedStudents, setSelectedStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   // Lấy danh sách sinh viên từ API
//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setStudents(response.data || []); // Đảm bảo students là mảng
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   // Thêm sinh viên mới
//   const handleAddStudent = async () => {
//     if (!name || !code) return;
//     const newStudent = { name, code, active };
//     try {
//       const response = await axios.post(API_URL, newStudent);
//       setStudents((prevStudents) => [response.data, ...prevStudents]);
//       setName("");
//       setCode("");
//       setActive(false);
//     } catch (error) {
//       console.error("Error adding student:", error);
//     }
//   };

//   // Xóa sinh viên
//   const handleDeleteStudent = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setStudents((prevStudents) =>
//         prevStudents.filter((student) => student.id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting student:", error);
//     }
//   };

//   // Chọn sinh viên
//   const handleSelectStudent = (index) => {
//     const selected = selectedStudents.includes(index)
//       ? selectedStudents.filter((i) => i !== index)
//       : [...selectedStudents, index];
//     setSelectedStudents(selected);
//   };

//   const handleClear = () => {
//     setStudents([]);
//     setSelectedStudents([]);
//   };

//   return (
//     <Router>
//       <div className="container">
//         <Row className="my-3">
//           <Col>
//             <h4>Total Selected Student: {selectedStudents.length}</h4>
//           </Col>
//           <Col className="text-right">
//             <Button variant="primary" onClick={handleClear}>
//               Clear
//             </Button>
//           </Col>
//         </Row>

//         <Form>
//           <Form.Group>
//             <Form.Label>Student Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Student Code</Form.Label>
//             <Form.Control
//               type="text"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Check
//               type="checkbox"
//               label="Still Active"
//               checked={active}
//               onChange={(e) => setActive(e.target.checked)}
//             />
//           </Form.Group>
//           <Button variant="primary" onClick={handleAddStudent}>
//             Add
//           </Button>
//         </Form>

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <StudentList
//                 students={students}
//                 selectedStudents={selectedStudents}
//                 handleSelectStudent={handleSelectStudent}
//                 handleDeleteStudent={handleDeleteStudent}
//               />
//             }
//           />
//           <Route
//             path="/student/:index"
//             element={<StudentDetail students={students} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
