const plans = [
  { name: "Starter", price: "$49/mo", seats: "200 seats" },
  { name: "Growth", price: "$129/mo", seats: "1,000 seats" }
];

export default function BillingPage() {
  return (
    <section className="dashboard__section">
      <h2>Billing & Subscriptions</h2>
      <p>Configure pricing, review invoices, and monitor renewals.</p>
      <div className="pill-grid">
        {plans.map((plan) => (
          <article className="pill-card" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="pill-card__value">{plan.price}</p>
            <span className="pill-card__detail">{plan.seats}</span>
          </article>
        ))}
      </div>
      <div className="inline-actions">
        <button className="secondary" type="button">
          View Invoices
        </button>
        <button className="primary" type="button">
          Create Plan
        </button>
      </div>
    </section>
  );
}
