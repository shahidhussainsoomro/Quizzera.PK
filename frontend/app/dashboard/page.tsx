type AdminOverview = { modules: string[] };

const sections = [
  {
    title: "Admin Panel",
    items: [
      "Role-based access, onboarding, verification, and audit logs.",
      "Multi-tenant institution and license management.",
      "Central MCQ repository with bulk import and taxonomy control.",
      "Exam blueprint mapping, time rules, and negative marking.",
      "Moderation workflows, analytics, and revenue monitoring.",
    ],
  },
  {
    title: "Teacher & Mentor Dashboard",
    items: [
      "Create MCQs with explanations and syllabus tagging.",
      "Build quizzes, assignments, and randomized practice sets.",
      "Monitor class-wise progress and weak-area insights.",
      "Provide feedback and publish remedial recommendations.",
    ],
  },
  {
    title: "Student Dashboard",
    items: [
      "Topic-wise practice, mock exams, and exam-specific tracks.",
      "Real exam simulation with timers and review flags.",
      "Performance analytics and personalized study plans.",
      "Badges, certificates, and mentor feedback access.",
    ],
  },
  {
    title: "Cross-role Platform Features",
    items: [
      "Secure authentication, multilingual support, and accessibility.",
      "Web platform now with Android & iOS apps planned.",
      "Data privacy and exam integrity safeguards.",
    ],
  },
];

async function getAdminOverview(): Promise<AdminOverview | null> {
  const apiBase =
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    process.env.API_BASE_URL ??
    "http://localhost:8001";
  try {
    const response = await fetch(`${apiBase}/admin/overview`, {
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

export default async function DashboardPage() {
  const overview = await getAdminOverview();

  return (
    <main className="container hero">
      <span className="badge">Role-based dashboards</span>
      <h1>Manage every exam journey with clarity</h1>
      <p>
        Quizzera gives admins, teachers, mentors, and students the tools they
        need to design, deliver, and measure exam-ready learning experiences.
      </p>

      <section className="grid" style={{ marginTop: 32 }}>
        {sections.map((section) => (
          <div className="card" key={section.title}>
            <h2 className="section-title">{section.title}</h2>
            <ul className="section-muted">
              {section.items.map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="callout" style={{ marginTop: 32 }}>
        <h2 className="section-title">Admin modules connected</h2>
        <p className="section-muted">
          {overview?.modules?.length
            ? overview.modules.join(" · ")
            : "Connect the backend service to surface admin module availability."}
        </p>
      </section>
    </main>
  );
}
