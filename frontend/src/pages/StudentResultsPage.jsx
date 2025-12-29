const results = [
  { exam: "Mock Exam 1", score: "72%", status: "Passed" },
  { exam: "Weekly Quiz", score: "88%", status: "Passed" }
];

export default function StudentResultsPage() {
  return (
    <section className="dashboard__section">
      <h2>Results & Attempts</h2>
      <div className="table">
        <div className="table__row table__row--header">
          <span>Exam</span>
          <span>Score</span>
          <span>Status</span>
        </div>
        {results.map((row) => (
          <div className="table__row" key={row.exam}>
            <span>{row.exam}</span>
            <span>{row.score}</span>
            <span>{row.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
