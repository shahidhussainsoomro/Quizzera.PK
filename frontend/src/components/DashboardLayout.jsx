import Navigation from "./Navigation.jsx";

export default function DashboardLayout({
  children,
  activeNav,
  onNavChange,
  activeRole,
  onRoleChange
}) {
  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <div className="dashboard__brand">
          <span className="brand__title">Quizzera</span>
          <span className="brand__subtitle">Admin Console</span>
        </div>
        <div className="sidebar__section">
          <p className="sidebar__label">Navigation</p>
          <Navigation activeItem={activeNav} onSelect={onNavChange} />
        </div>
        <div className="sidebar__section">
          <p className="sidebar__label">Role View</p>
          <div className="chip-group chip-group--stack">
            {["Admin", "Teacher", "Student"].map((role) => (
              <button
                key={role}
                type="button"
                className={`chip ${role === activeRole ? "chip--active" : ""}`}
                onClick={() => onRoleChange(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </aside>
      <main className="dashboard__content">
        <header className="dashboard__header">
          <div>
            <h1>Governance & Operations</h1>
            <p>Configure the platform, monitor activity, and manage content.</p>
          </div>
          <button className="primary" type="button">
            Invite Admin
          </button>
        </header>
        {children}
      </main>
    </div>
  );
}
