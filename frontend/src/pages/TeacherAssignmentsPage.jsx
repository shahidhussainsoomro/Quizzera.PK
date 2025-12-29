const assignments = [
  { title: "Linear Equations", due: "Apr 12", status: "Draft" },
  { title: "Geometry Review", due: "Apr 20", status: "Published" }
];

export default function TeacherAssignmentsPage() {
  return (
    <section className="dashboard__section">
      <h2>Assignments</h2>
      <div className="table">
        <div className="table__row table__row--header">
          <span>Assignment</span>
          <span>Due</span>
          <span>Status</span>
        </div>
        {assignments.map((assignment) => (
          <div className="table__row" key={assignment.title}>
            <span>{assignment.title}</span>
            <span>{assignment.due}</span>
            <span>{assignment.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
