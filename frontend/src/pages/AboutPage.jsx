const values = [
  {
    title: "Student-first thinking",
    description:
      "We design experiences that build confidence and keep learners motivated."
  },
  {
    title: "Institution-ready systems",
    description:
      "Our workflows support governance, compliance, and academic integrity."
  },
  {
    title: "Teacher empowerment",
    description:
      "We help educators save time with smart tools and actionable insights."
  }
];

export default function AboutPage() {
  return (
    <section className="site-section">
      <h1>About Quizzera.PK</h1>
      <p>
        Quizzera.PK is built in Pakistan for the region’s learning ecosystem.
        We partner with institutions to create high-quality assessments, empower
        teachers, and deliver personalized insights for students.
      </p>
      <div className="site-grid">
        {values.map((value) => (
          <article key={value.title} className="site-card">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
      <div className="callout">
        <h3>Mission</h3>
        <p>
          To make assessment data accessible, actionable, and inspiring for every
          learner in Pakistan.
        </p>
      </div>
    </section>
  );
}
