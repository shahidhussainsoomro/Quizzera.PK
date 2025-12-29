const navItems = ["Home", "About", "Privacy", "Terms", "Refund"];

export default function SiteHeader({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <span className="site-header__logo">Quizzera.PK</span>
        <span className="site-header__tagline">Smart learning for every learner</span>
      </div>
      <nav className="site-header__nav">
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`site-header__link ${
              activePage === item ? "site-header__link--active" : ""
            }`}
            onClick={() => onNavigate(item)}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="site-header__actions">
        <button className="ghost" type="button" onClick={() => onNavigate("Sign In")}>
          Sign in
        </button>
        <button
          className="ghost"
          type="button"
          onClick={() => onNavigate("Sign Out")}
        >
          Sign out
        </button>
        <button
          className="primary"
          type="button"
          onClick={() => onNavigate("Sign Up")}
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
