const navItems = [
  "Governance",
  "MCQs",
  "Exams",
  "Analytics",
  "Billing",
  "System"
];

export default function Navigation({ activeItem, onSelect }) {
  return (
    <nav className="nav">
      {navItems.map((item) => (
        <button
          key={item}
          className={`nav__item ${item === activeItem ? "nav__item--active" : ""}`}
          type="button"
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
