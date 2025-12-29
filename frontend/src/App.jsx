import { useState } from "react";
import { useState } from "react";
import DashboardLayout from "./components/DashboardLayout.jsx";
import PublicLayout from "./components/PublicLayout.jsx";
import {
  AdminDashboard,
  AnalyticsPage,
  AboutPage,
  BillingPage,
  ForgotPasswordPage,
  ExamsPage,
  GovernancePage,
  HomePage,
  McqsPage,
  PrivacyPage,
  RefundPage,
  SignInPage,
  SignOutPage,
  SignUpPage,
  StudentPage,
  SystemPage,
  TermsPage,
  TeacherPage
} from "./pages/index.js";
import "./styles/dashboard.css";
import "./styles/public.css";

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
  const [view, setView] = useState("site");
  const [activePublicPage, setActivePublicPage] = useState("Home");
  const [activeNav, setActiveNav] = useState("Governance");
  const [activeRole, setActiveRole] = useState("Admin");
  const [teacherTab, setTeacherTab] = useState("overview");
  const [studentTab, setStudentTab] = useState("overview");

  const ActiveNavPage = primaryPages[activeNav] ?? GovernancePage;
  const ActiveRolePage = rolePages[activeRole] ?? AdminDashboard;
  const publicPages = {
    Home: HomePage,
    About: AboutPage,
    Privacy: PrivacyPage,
    Terms: TermsPage,
    Refund: RefundPage,
    "Sign In": SignInPage,
    "Sign Out": SignOutPage,
    "Sign Up": SignUpPage,
    "Forgot Password": ForgotPasswordPage
  };
  const ActivePublicPage = publicPages[activePublicPage] ?? HomePage;

  return (
    <div className="app-shell">
      <div className="app-shell__toggle">
        <button
          type="button"
          className={`chip ${view === "site" ? "chip--active" : ""}`}
          onClick={() => setView("site")}
        >
          Website
        </button>
        <button
          type="button"
          className={`chip ${view === "console" ? "chip--active" : ""}`}
          onClick={() => setView("console")}
        >
          Admin Console
        </button>
      </div>
      {view === "site" ? (
        <PublicLayout
          activePage={activePublicPage}
          onNavigate={setActivePublicPage}
        >
          <ActivePublicPage />
        </PublicLayout>
      ) : (
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
                    className={`chip ${
                      role === activeRole ? "chip--active" : ""
                    }`}
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
      )}
    </div>
  );
}
