import BlueprintBuilder from "../components/BlueprintBuilder.jsx";
import McqImportForm from "../components/McqImportForm.jsx";
import UserManagementForm from "../components/UserManagementForm.jsx";

export default function AdminDashboard() {
  return (
    <>
      <section className="dashboard__section">
        <div>
          <h2>Admin Control Center</h2>
          <p>
            Welcome to Quizzera. Manage governance, MCQ banks, exam blueprints,
            analytics, and billing from one place.
          </p>
        </div>
      </section>
      <section className="dashboard__grid">
        <div className="dashboard__card">
          <h3>MCQ Bulk Import</h3>
          <McqImportForm />
        </div>
        <div className="dashboard__card">
          <h3>User Management</h3>
          <UserManagementForm />
        </div>
        <div className="dashboard__card dashboard__card--wide">
          <h3>Blueprint Builder</h3>
          <BlueprintBuilder />
        </div>
      </section>
    </>
  );
}
