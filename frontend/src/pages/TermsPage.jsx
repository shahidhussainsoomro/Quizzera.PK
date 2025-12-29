const terms = [
  "Use the platform for lawful educational purposes only.",
  "Institutions remain responsible for the content they upload.",
  "User accounts must be secured and not shared across individuals.",
  "Quizzera.PK may update services to improve reliability and compliance."
];

export default function TermsPage() {
  return (
    <section className="site-section">
      <h1>Terms of Service</h1>
      <p>
        These terms outline acceptable use and service commitments for
        Quizzera.PK. Institutions are encouraged to review them with their
        administrators.
      </p>
      <ul className="list">
        {terms.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="callout">
        <h3>Need help?</h3>
        <p>Reach us at compliance@quizzera.pk for any questions.</p>
      </div>
    </section>
  );
}
