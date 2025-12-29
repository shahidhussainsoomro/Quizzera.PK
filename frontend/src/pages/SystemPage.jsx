const checks = [
  { label: "Email/OTP", status: "Operational" },
  { label: "Notifications", status: "Degraded" },
  { label: "Multilingual", status: "Planned" }
];

export default function SystemPage() {
  return (
    <section className="dashboard__section">
      <h2>System Health</h2>
      <div className="table">
        <div className="table__row table__row--header">
          <span>Service</span>
          <span>Status</span>
        </div>
        {checks.map((check) => (
          <div className="table__row" key={check.label}>
            <span>{check.label}</span>
            <span>{check.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
