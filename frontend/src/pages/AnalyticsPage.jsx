const insights = [
  {
    title: "Active Students",
    value: "12,480",
    detail: "+8% vs last month"
  },
  {
    title: "MCQ Approval Rate",
    value: "92%",
    detail: "Last 30 days"
  },
  {
    title: "Exam Completion",
    value: "76%",
    detail: "Average completion"
  }
];

export default function AnalyticsPage() {
  return (
    <section className="dashboard__section">
      <h2>Platform Analytics</h2>
      <div className="pill-grid">
        {insights.map((card) => (
          <article className="pill-card" key={card.title}>
            <h3>{card.title}</h3>
            <p className="pill-card__value">{card.value}</p>
            <span className="pill-card__detail">{card.detail}</span>
          </article>
        ))}
      </div>
      <div className="inline-actions">
        <button className="secondary" type="button">
          Export CSV
        </button>
        <button className="secondary" type="button">
          Export PDF
        </button>
      </div>
    </section>
  );
}
