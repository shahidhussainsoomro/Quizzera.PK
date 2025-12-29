import { useState } from "react";
import DashboardLayout from "./components/DashboardLayout.jsx";
import {
  AdminDashboard,
  AnalyticsPage,
  BillingPage,
  ExamsPage,
  GovernancePage,
  McqsPage,
  StudentPage,
  SystemPage,
  TeacherPage
} from "./pages/index.js";
import "./styles/dashboard.css";

const primaryPages = {
  Governance: GovernancePage,
  MCQs: McqsPage,
  Exams: ExamsPage,
  Analytics: AnalyticsPage,
  Billing: BillingPage,
  System: SystemPage
};

const rolePages = {
  Admin: AdminDashboard,
  Teacher: TeacherPage,
  Student: StudentPage
};

export default function App() {
  const [activeNav, setActiveNav] = useState("Governance");
  const [activeRole, setActiveRole] = useState("Admin");
  const [teacherTab, setTeacherTab] = useState("overview");
  const [studentTab, setStudentTab] = useState("overview");

  const ActiveNavPage = primaryPages[activeNav] ?? GovernancePage;
  const ActiveRolePage = rolePages[activeRole] ?? AdminDashboard;

  return (
    <DashboardLayout
      activeNav={activeNav}
      onNavChange={setActiveNav}
      activeRole={activeRole}
      onRoleChange={setActiveRole}
    >
      <section className="dashboard__section">
        <div className="section__header">
          <div>
            <h2>Role Workspaces</h2>
            <p>Switch between admin, teacher, and student views.</p>
          </div>
          <div className="chip-group">
            {Object.keys(rolePages).map((role) => (
              <button
                key={role}
                type="button"
                className={`chip ${role === activeRole ? "chip--active" : ""}`}
                onClick={() => setActiveRole(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
        {activeRole === "Teacher" ? (
          <TeacherPage activeTab={teacherTab} onTabChange={setTeacherTab} />
        ) : null}
        {activeRole === "Student" ? (
          <StudentPage activeTab={studentTab} onTabChange={setStudentTab} />
        ) : null}
        {activeRole === "Admin" ? <ActiveRolePage /> : null}
      </section>
      <ActiveNavPage />
    </DashboardLayout>
  );
}
