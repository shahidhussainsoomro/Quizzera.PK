const policies = [
  {
    title: "Trial plans",
    description:
      "Trial plans are free and can be cancelled at any time without charge."
  },
  {
    title: "Monthly subscriptions",
    description:
      "Monthly plans can be cancelled before the next billing cycle to avoid charges."
  },
  {
    title: "Annual subscriptions",
    description:
      "Annual plans are eligible for prorated refunds within 30 days of purchase."
  }
];

export default function RefundPage() {
  return (
    <section className="site-section">
      <h1>Refund Policy</h1>
      <p>
        We aim to be transparent about billing. If your institution needs a plan
        adjustment, our team is ready to help.
      </p>
      <div className="site-grid">
        {policies.map((policy) => (
          <article key={policy.title} className="site-card">
            <h3>{policy.title}</h3>
            <p>{policy.description}</p>
          </article>
        ))}
      </div>
      <div className="callout">
        <h3>Billing support</h3>
        <p>Contact billing@quizzera.pk for refund or plan change requests.</p>
      </div>
    </section>
  );
}
