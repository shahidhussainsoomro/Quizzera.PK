const blueprints = [
  { name: "Midterm Prep", status: "Draft", items: 60 },
  { name: "Scholarship Mock", status: "In Review", items: 80 }
];

export default function ExamsPage() {
  return (
    <section className="dashboard__section">
      <h2>Exam Engine</h2>
      <p>Build blueprints, map MCQs, and configure exam rules.</p>
      <div className="table">
        <div className="table__row table__row--header">
          <span>Blueprint</span>
          <span>Status</span>
          <span>Questions</span>
        </div>
        {blueprints.map((row) => (
          <div className="table__row" key={row.name}>
            <span>{row.name}</span>
            <span>{row.status}</span>
            <span>{row.items}</span>
          </div>
        ))}
      </div>
      <div className="inline-actions">
        <button className="secondary" type="button">
          Create Blueprint
        </button>
        <button className="primary" type="button">
          Publish Exam
        </button>
      </div>
    </section>
  );
}
