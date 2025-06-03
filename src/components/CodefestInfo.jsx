import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './CodefestInfo.css';

export default function CodefestInfo() {

  const navigate = useNavigate();
  return (
    <div className="codefest-landing">
      <div className="magic-overlay" />
      <div className="particle particle-blue" />
      <div className="particle particle-purple" />
      <div className="particle particle-pink" />
      <div className="particle particle-cyan" />

      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">✨ Codefest - Ada Kadabra</h1>
          <p className="hero-subtitle">
            Una competencia de programación mágica para estudiantes de 10° y 11° de colegios en Pasto organizada por la celula de programacion Ada-Kadaba de la Universidad Mariana.
          </p>
          <ul className="hero-details">
            <li>👥 Equipos conformados por 3 estudiantes + 1 docente responsable</li>
            <li>📍 Universidad Mariana, Bloque Maria Inmaculada Salones 601, 603 y 604 </li>
            <li>📆 Fecha: 13 de Junio</li>
          </ul>
          <div className="hero-benefits">
            <div className="benefit-tag">🏅 Premios mágicos para los mejores equipos</div>
            <div className="benefit-tag">📜 Certificados oficiales de participación</div>
          </div>
          <div className="hero-buttons">
            <button className="btn-magic" onClick={() => navigate('/register')}>🧙‍♂️ Inscribirme</button>
          </div>
        </div>

        {/* Metodología Detallada */}
        <div className="hero-right methodology-box">
          <h3 className="method-title">🧪 Metodología</h3>
          <table className="method-table">
            <tbody>
              <tr><td>🔮</td><td><strong>Retos progresivos:</strong> los desafíos incrementan su dificultad a medida que avanza el evento.</td></tr>
              <tr><td>🎨</td><td><strong>Creatividad e innovación:</strong> se fomenta el pensamiento fuera de lo común y la generación de ideas novedosas.</td></tr>
              <tr><td>🤝</td><td><strong>Trabajo colaborativo:</strong> los equipos deben repartirse roles y cooperar eficientemente.</td></tr>
              <tr><td>🧠</td><td><strong>Presentación técnica:</strong> cada proyecto será expuesto ante un jurado evaluador con retroalimentación crítica.</td></tr>
              <tr><td>💬</td><td><strong>Documentación:</strong> los participantes deben justificar y argumentar sus decisiones técnicas.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <h2 className="timeline-title">🕓 Fases del Evento</h2>
        <div className="timeline-line">
          <div className="timeline-step">
            <span className="step-icon">📥</span>
            <p><strong>Fase 1:</strong> Registro y Bienvenida<br /><small>30 min</small><br />
              Registro de los equipos y charla motivacional sobre el impacto de la programación en la sociedad.
            </p>
          </div>
          <div className="timeline-step">
            <span className="step-icon">💡</span>
            <p><strong>Fase 2:</strong> Planteamiento de la Idea<br /><small>45 min</small><br />
              Los equipos proponen una solución creativa a un problema real y reciben mentoría para afinar la propuesta.
            </p>
          </div>
          <div className="timeline-step">
            <span className="step-icon">🛠️</span>
            <p><strong>Fase 3:</strong> Desarrollo del Proyecto I<br /><small>1h 20m</small><br />
              Se inicia la programación del prototipo. Se fomenta la asignación de tareas y la validación de ideas.
            </p>
          </div>
          <div className="timeline-step">
            <span className="step-icon">☕</span>
            <p><strong>Fase 4:</strong> Pausa Activa<br /><small>20 min</small><br />
              Espacio para socializar, despejar la mente y recargar energía.
            </p>
          </div>
          <div className="timeline-step">
            <span className="step-icon">🧪</span>
            <p><strong>Fase 5:</strong> Desarrollo del Proyecto II<br /><small>1h 20m</small><br />
              Se culmina el desarrollo. Se prepara la presentación final y se documentan los avances.
            </p>
          </div>
          <div className="timeline-step">
            <span className="step-icon">🎤</span>
            <p><strong>Fase 6:</strong> Exposición y Evaluación<br /><small>1h</small><br />
              Cada equipo expone su solución ante el jurado, respondiendo preguntas técnicas y argumentativas.
            </p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>Organiza la Célula de Programación Ada Kadabra - Universidad Mariana</p>
      </footer>
    </div>
  );
}
