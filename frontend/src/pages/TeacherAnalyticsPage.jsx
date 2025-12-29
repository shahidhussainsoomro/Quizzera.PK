const metrics = [
  { label: "Active students", value: "132" },
  { label: "Avg score", value: "78%" },
  { label: "Completion rate", value: "84%" }
];

export default function TeacherAnalyticsPage() {
  return (
    <section className="dashboard__section">
      <h2>Teaching Analytics</h2>
      <div className="pill-grid">
        {metrics.map((metric) => (
          <article className="pill-card" key={metric.label}>
            <h3>{metric.label}</h3>
            <p className="pill-card__value">{metric.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
