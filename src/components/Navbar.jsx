import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';

export default function Navbar() {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <div className='menu'>
      <nav ref={navRef}>
        <button className="nav__close" onClick={showNavbar}>
          <CloseIcon />
        </button>
        <a href="#" className="header-container__home">Home</a>
        <a href="#" className="header-container__new">New</a>
        <a href="#" className="header-container__popular">Popular</a>
        <a href="#" className="header-container__trending">Trending</a>
        <a href="#" className="header-container__categories">Categories</a>
      </nav>
      <button className="hamburger" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </div>
  )
}
