const goals = [
  { label: "Weekly practice", value: "3/5 sessions" },
  { label: "MCQ streak", value: "12 days" }
];

export default function StudentGoalsPage() {
  return (
    <section className="dashboard__section">
      <h2>Goals & Reminders</h2>
      <div className="pill-grid">
        {goals.map((goal) => (
          <article className="pill-card" key={goal.label}>
            <h3>{goal.label}</h3>
            <p className="pill-card__value">{goal.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
