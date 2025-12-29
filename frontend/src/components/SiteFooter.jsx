const footerColumns = [
  {
    title: "Product",
    links: ["MCQ Bank", "Exam Engine", "Analytics", "Mobile App"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Contact"]
  },
  {
    title: "Resources",
    links: ["Help Center", "Guides", "Status", "Community"]
  }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <h3>Quizzera.PK</h3>
          <p>
            Empowering institutions, teachers, and students with an intelligent
            assessment platform built for scale.
          </p>
        </div>
        <div className="site-footer__columns">
          {footerColumns.map((column) => (
            <div key={column.title} className="site-footer__column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2025 Quizzera.PK. All rights reserved.</span>
        <span>Built for educators across Pakistan.</span>
      </div>
    </footer>
  );
}
