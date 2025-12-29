const classes = [
  { name: "Batch A", students: 42 },
  { name: "Batch B", students: 36 }
];

export default function TeacherClassesPage() {
  return (
    <section className="dashboard__section">
      <h2>Classes & Groups</h2>
      <div className="table">
        <div className="table__row table__row--header">
          <span>Class</span>
          <span>Students</span>
        </div>
        {classes.map((row) => (
          <div className="table__row" key={row.name}>
            <span>{row.name}</span>
            <span>{row.students}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
