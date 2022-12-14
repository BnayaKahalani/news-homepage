
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-container__logo-container">
          <span>W.</span>
        </div>
        <nav>
          <a href="#" className="header-container__home">Home</a>
          <a href="#" className="header-container__new">New</a>
          <a href="#" className="header-container__popular">Popular</a>
          <a href="#" className="header-container__trending">Trending</a>
          <a href="#" className="header-container__categories">Ccategories</a>
        </nav>
      </div>
    </header>
  )
}
