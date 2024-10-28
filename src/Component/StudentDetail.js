import React from "react";
import { useParams } from "react-router-dom";

function StudentDetail({ students }) {
  const { index } = useParams();
  const student = students[index];

  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h2>Student Details</h2>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Code:</strong> {student.code}
      </p>
      <p>
        <strong>Status:</strong> {student.active ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export default StudentDetail;
