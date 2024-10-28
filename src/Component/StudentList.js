import React from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function StudentList({
  students,
  selectedStudents,
  handleSelectStudent,
  handleDeleteStudent,
}) {
  return (
    <Table striped bordered hover className="my-3">
      <thead>
        <tr>
          <th>Select</th>
          <th>Student Name</th>
          <th>Student Code</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>
              <Form.Check
                type="checkbox"
                checked={selectedStudents.includes(index)}
                onChange={() => handleSelectStudent(index)}
              />
            </td>
            <td>
              <Link to={`/student/${index}`}>{student.name}</Link>
            </td>
            <td>{student.code}</td>
            <td>
              {student.active ? (
                <Button variant="info" size="sm">
                  Active
                </Button>
              ) : (
                <Button variant="danger" size="sm">
                  Inactive
                </Button>
              )}
            </td>
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDeleteStudent(index)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StudentList;

// import React from "react";
// import { Table, Button, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function StudentList({
//   students,
//   selectedStudents,
//   handleSelectStudent,
//   handleDeleteStudent,
// }) {
//   return (
//     <Table striped bordered hover className="my-3">
//       <thead>
//         <tr>
//           <th>Select</th>
//           <th>Student Name</th>
//           <th>Student Code</th>
//           <th>Status</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Array.isArray(students) && students.length > 0 ? (
//           students.map((student) => (
//             <tr key={student.id}>
//               <td>
//                 <Form.Check
//                   type="checkbox"
//                   checked={selectedStudents.includes(student.id)}
//                   onChange={() => handleSelectStudent(student.id)}
//                 />
//               </td>
//               <td>
//                 <Link to={`/student/${student.id}`}>{student.name}</Link>
//               </td>
//               <td>{student.code}</td>
//               <td>
//                 {student.active ? (
//                   <Button variant="info" size="sm">
//                     Active
//                   </Button>
//                 ) : (
//                   <Button variant="danger" size="sm">
//                     Inactive
//                   </Button>
//                 )}
//               </td>
//               <td>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => handleDeleteStudent(student.id)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="5" className="text-center">
//               No students found.
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </Table>
//   );
// }

// export default StudentList;
