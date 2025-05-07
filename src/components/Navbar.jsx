
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';


export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <img src="./logo.png" alt="Ada Kadabra" className="logo-navbar" />
      <nav className="nav-links">
        <a href="/home">Inicio</a>
        <a href="/codefest">Sobre Codefest</a>
        <a href="/register">Inscricpiones</a>
        <a href="/contact">Contacto</a>
      </nav>
      <button className="nav-button" onClick={() => navigate('/')}>
        Tiempo
      </button>
    </header>
  );
}
