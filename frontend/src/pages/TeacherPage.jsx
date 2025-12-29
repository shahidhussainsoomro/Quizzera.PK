import TeacherAnalyticsPage from "./TeacherAnalyticsPage.jsx";
import TeacherAssignmentsPage from "./TeacherAssignmentsPage.jsx";
import TeacherClassesPage from "./TeacherClassesPage.jsx";
import TeacherDashboard from "./TeacherDashboard.jsx";

const tabs = [
  { key: "overview", label: "Overview", Component: TeacherDashboard },
  { key: "classes", label: "Classes", Component: TeacherClassesPage },
  { key: "assignments", label: "Assignments", Component: TeacherAssignmentsPage },
  { key: "analytics", label: "Analytics", Component: TeacherAnalyticsPage }
];

export default function TeacherPage({ activeTab, onTabChange }) {
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
