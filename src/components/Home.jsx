// src/components/Home.jsx
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="magic-overlay" />
      <div className="particle particle-blue" />
      <div className="particle particle-purple" />
      <div className="particle particle-small-blue" />
      <div className="particle particle-small-purple" />

      <Navbar />

      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="tagline">- CIENCIA ✦ MAGIA ✦ TECNOLOGÍA</p>
            <h1>El mejor lugar para <br />despertar tu poder de programar</h1>
            <p className="description">
              Descubre el universo encantado de Ada Kadabra, donde el código se convierte en hechizo y la creatividad es tu varita.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/')}>✨ Contador mágico</button>
              <button className="btn-secondary" onClick={() => navigate('/codefest')}>CodeFest Info</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="./logo.png" alt="Mockup Mágico" />
          </div>
        </div>
      </section>

      {/* Sección Codefest */}
      <section className="codefest-section">
        <h2>Codefest Ada Kadabra</h2>
        <p>
          Una competencia de programación llena de hechizos y creatividad, organizada por la Universidad Mariana
          y dirigida a estudiantes de grados 10 y 11 de instituciones educativas de Pasto. Únete al evento donde
          la lógica se mezcla con la magia del código.
        </p>
      </section>

      <footer className="trusted-footer">
        <p>Organizado por la Célula de Programación Ada Kadabra - Ingeniería de Sistemas, Universidad Mariana</p>
      </footer>
    </div>
  );
}
