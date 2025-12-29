const governanceItems = [
  {
    title: "User Onboarding",
    description: "Invite admins, teachers, mentors, and students."
  },
  {
    title: "Institution Verification",
    description: "Review KYC and institution approvals."
  },
  {
    title: "Audit Logs",
    description: "Track admin actions and compliance events."
  }
];

export default function GovernancePage() {
  return (
    <section className="dashboard__section">
      <h2>Governance</h2>
      <div className="pill-grid">
        {governanceItems.map((item) => (
          <article className="pill-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
