type AnalyticsOverview = {
  mcq_count: number;
  exam_count: number;
  subject_count: number;
  topic_count: number;
  subtopic_count: number;
};

async function getAnalytics(): Promise<AnalyticsOverview | null> {
  const apiBase =
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    process.env.API_BASE_URL ??
    "http://localhost:8001";
  try {
    const response = await fetch(`${apiBase}/admin/analytics/overview`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const analytics = await getAnalytics();

  return (
    <>
      <header className="hero">
        <div className="container">
          <span className="badge">Pakistan-focused MCQs & Exam Prep</span>
          <h1>Exam-accurate practice built for Pakistani competitive exams</h1>
          <p>
            Quizzera.pk delivers syllabus-aligned MCQs, structured exam pathways,
            and verified explanations for students, educators, and institutions.
            Prepare with confidence—no generic AI answers.
          </p>
          <div className="actions">
            <a className="button" href="/dashboard">
              Explore Dashboard
            </a>
            <a className="button outline" href="#features">
              Browse Features
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="features" className="grid">
          <div className="card">
            <h2 className="section-title">MCQs & Mock Exams</h2>
            <p className="section-muted">
              Curated banks aligned to Pakistani exam blueprints and patterns.
            </p>
          </div>
          <div className="card">
            <h2 className="section-title">Exam Pathways</h2>
            <p className="section-muted">
              FPSC, PPSC, SPSC, KPSC, NTS, HEC screenings, and teaching licenses.
            </p>
          </div>
          <div className="card">
            <h2 className="section-title">Smart Practice</h2>
            <p className="section-muted">
              Timed tests, topic-wise drills, and difficulty filters for precision
              prep.
            </p>
          </div>
          <div className="card">
            <h2 className="section-title">Results & Analytics</h2>
            <p className="section-muted">
              Track accuracy vs speed, weak-area trends, and progress reports.
            </p>
          </div>
          <div className="card">
            <h2 className="section-title">Multi-Role Access</h2>
            <p className="section-muted">
              Admin, teacher, mentor, student, and institution dashboards built for
              real exam workflows.
            </p>
          </div>
          <div className="card">
            <h2 className="section-title">Accuracy over Hype</h2>
            <p className="section-muted">
              Verified questions, explanation validation, and syllabus compliance
              tagging.
            </p>
          </div>
        </section>

        <section className="callout">
          <div className="grid">
            <div>
              <h2 className="section-title">Why students choose Quizzera</h2>
              <p className="section-muted">
                Exam-first design, validated MCQs, and scalable access with web
                today and mobile apps planned.
              </p>
            </div>
            <div>
              <h2 className="section-title">Built for every role</h2>
              <p className="section-muted">
                Support cohorts, assignments, analytics, and compliance-ready
                reporting across institutions.
              </p>
            </div>
          </div>
          <div className="grid" style={{ marginTop: 24 }}>
            <div>
              <h2 className="section-title">Live repository snapshot</h2>
              <p className="section-muted">
                {analytics
                  ? `${analytics.mcq_count} MCQs · ${analytics.exam_count} exams · ${analytics.subject_count} subjects`
                  : "Connect the backend to see live MCQ and exam metrics."}
              </p>
            </div>
            <div>
              <h2 className="section-title">Admin-ready insights</h2>
              <p className="section-muted">
                {analytics
                  ? `${analytics.topic_count} topics · ${analytics.subtopic_count} subtopics tracked`
                  : "Analytics overview updates once the API is running."}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025 Quizzera.pk | All Rights Reserved
      </footer>
    </>
  );
}
