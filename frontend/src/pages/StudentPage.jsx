import StudentDashboard from "./StudentDashboard.jsx";
import StudentGoalsPage from "./StudentGoalsPage.jsx";
import StudentPracticePage from "./StudentPracticePage.jsx";
import StudentResultsPage from "./StudentResultsPage.jsx";

const tabs = [
  { key: "overview", label: "Overview", Component: StudentDashboard },
  { key: "practice", label: "Practice", Component: StudentPracticePage },
  { key: "results", label: "Results", Component: StudentResultsPage },
  { key: "goals", label: "Goals", Component: StudentGoalsPage }
];

export default function StudentPage({ activeTab, onTabChange }) {
  const active = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];
  const ActiveComponent = active.Component;

  return (
    <>
      <div className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab ${tab.key === active.key ? "tab--active" : ""}`}
            type="button"
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ActiveComponent />
    </>
  );
}
