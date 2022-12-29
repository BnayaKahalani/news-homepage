import logo from "../assets/images/logo.svg"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-container__logo-container">
          <img src={logo} alt="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  )
}
