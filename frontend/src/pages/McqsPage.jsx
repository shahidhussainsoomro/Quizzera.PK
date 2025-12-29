const taxonomy = [
  { name: "Mathematics", topics: 12, subtopics: 48 },
  { name: "Physics", topics: 8, subtopics: 32 },
  { name: "Chemistry", topics: 6, subtopics: 21 }
];

export default function McqsPage() {
  return (
    <section className="dashboard__section">
      <h2>MCQ Bank</h2>
      <p>Review coverage, moderation queues, and bulk import status.</p>
      <div className="table">
        <div className="table__row table__row--header">
          <span>Subject</span>
          <span>Topics</span>
          <span>Subtopics</span>
        </div>
        {taxonomy.map((row) => (
          <div className="table__row" key={row.name}>
            <span>{row.name}</span>
            <span>{row.topics}</span>
            <span>{row.subtopics}</span>
          </div>
        ))}
      </div>
      <div className="inline-actions">
        <button className="secondary" type="button">
          Manage Taxonomy
        </button>
        <button className="primary" type="button">
          Review Draft MCQs
        </button>
      </div>
    </section>
  );
}
