const sections = [
  {
    title: "Data we collect",
    description:
      "We collect account details, assessment activity, and platform analytics to improve learning outcomes."
  },
  {
    title: "How we use data",
    description:
      "Data powers dashboards, recommendations, and integrity checks for institutions."
  },
  {
    title: "Security safeguards",
    description:
      "We apply encryption at rest and in transit, role-based access, and audit trails."
  }
];

export default function PrivacyPage() {
  return (
    <section className="site-section">
      <h1>Privacy Policy</h1>
      <p>
        Protecting student data is core to Quizzera.PK. We collaborate with
        institutions to uphold data privacy and compliance.
      </p>
      <div className="site-grid">
        {sections.map((section) => (
          <article key={section.title} className="site-card">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </article>
        ))}
      </div>
      <p className="footnote">Last updated: March 2025</p>
    </section>
  );
}
