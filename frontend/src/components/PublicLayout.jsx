import SiteFooter from "./SiteFooter.jsx";
import SiteHeader from "./SiteHeader.jsx";

export default function PublicLayout({ activePage, onNavigate, children }) {
  return (
    <div className="site">
      <SiteHeader activePage={activePage} onNavigate={onNavigate} />
      <main className="site-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
