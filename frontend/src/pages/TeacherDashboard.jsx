const teacherActions = [
  "Create assignments and exams",
  "Manage classes and groups",
  "Review student progress"
];

export default function TeacherDashboard() {
  return (
    <section className="dashboard__section">
      <h2>Teacher Dashboard</h2>
      <p>Plan lessons, create assessments, and monitor cohorts.</p>
      <ul className="list">
        {teacherActions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
