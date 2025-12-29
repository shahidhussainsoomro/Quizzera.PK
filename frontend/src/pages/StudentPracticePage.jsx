const practiceQueue = [
  { label: "Algebra Set 1", questions: 20 },
  { label: "Physics Basics", questions: 15 }
];

export default function StudentPracticePage() {
  return (
    <section className="dashboard__section">
      <h2>Practice Sessions</h2>
      <div className="table">
        <div className="table__row table__row--header">
          <span>Set</span>
          <span>Questions</span>
        </div>
        {practiceQueue.map((row) => (
          <div className="table__row" key={row.label}>
            <span>{row.label}</span>
            <span>{row.questions}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
