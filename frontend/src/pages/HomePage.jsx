const highlights = [
  {
    title: "Adaptive MCQ Bank",
    description:
      "Build mastery with tagged questions, difficulty ladders, and approval flows."
  },
  {
    title: "Exam Blueprinting",
    description:
      "Design exams with precision and auto-map MCQs to learning outcomes."
  },
  {
    title: "Real-time Analytics",
    description:
      "Track performance, engagement, and improvement across every cohort."
  }
];

const testimonials = [
  {
    quote:
      "Quizzera helped us centralize assessments across five campuses in two weeks.",
    name: "Ayesha R.",
    role: "Academic Director"
  },
  {
    quote: "Our teachers finally have a shared MCQ bank and analytics in one place.",
    name: "Hassan M.",
    role: "School Lead"
  }
];

export default function HomePage() {
  return (
    <section className="site-hero">
      <div className="site-hero__content">
        <span className="eyebrow">Trusted by forward-thinking institutes</span>
        <h1>Empower every learner with smarter assessments.</h1>
        <p>
          Quizzera.PK is a unified assessment platform for institutions, teachers,
          and students. Launch MCQ banks, exams, and analytics with confidence.
        </p>
        <div className="site-hero__actions">
          <button className="primary" type="button">
            Book a demo
          </button>
          <button className="ghost" type="button">
            Explore features
          </button>
        </div>
        <div className="site-hero__stats">
          <div>
            <h3>120K+</h3>
            <span>Active learners</span>
          </div>
          <div>
            <h3>35+</h3>
            <span>Institutions onboarded</span>
          </div>
          <div>
            <h3>92%</h3>
            <span>MCQ approval accuracy</span>
          </div>
        </div>
      </div>
      <div className="site-hero__panel">
        <div className="panel-card">
          <h3>Live Cohort Snapshot</h3>
          <p>Batch A · 320 students · 78% avg score</p>
          <div className="panel-card__progress">
            <span style={{ width: "78%" }} />
          </div>
          <div className="panel-card__tags">
            <span>Maths</span>
            <span>Physics</span>
            <span>Scholarship prep</span>
          </div>
        </div>
      </div>
      <div className="site-section">
        <h2>Everything you need to run assessments</h2>
        <div className="site-grid">
          {highlights.map((item) => (
            <article key={item.title} className="site-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="site-section site-section--light">
        <h2>Teams love the clarity</h2>
        <div className="site-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial">
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
