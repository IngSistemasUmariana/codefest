import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Time.css';

export default function Time() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // FECHA: 8 de mayo, 23:59 hora Colombia (UTC-5) → UTC = 04:59 del 9 de mayo
    const colombiaEndDateUTC = new Date(Date.UTC(2025, 6, 6, 4, 59, 0)); // ⚠️ Mes 4 = mayo (0-indexed)

    const interval = setInterval(() => {
      const nowUTC = new Date();
      const remaining = Math.max(colombiaEndDateUTC.getTime() - nowUTC.getTime(), 0);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        setIsCompleted(true);
        clearInterval(interval);
        setTimeout(() => navigate('/'), 5000);
      }
    }, 1000);

    setTimeout(() => setLogoVisible(true), 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="time-container">
      <div className="magic-overlay" />

      {/* Partículas mágicas */}
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />

      {/* Logo mágico */}
      {logoVisible && (
        <img src="./logo.png" alt="Ada Kadabra" className="magic-logo" />
      )}

      {!isCompleted ? (
        <div className="timer-box">
        <h1 className="title">Cierre de Inscripciones</h1>
        <p className="countdown">{formatTime(timeLeft)}</p>
        <p className="date-info">🕒 Las inscripciones cierran el <strong> 26 de mayo</strong> a las <strong>11:59 p.m.</strong> (hora Colombia).</p>
        <button className="magic-button" onClick={() => navigate('/home')}>
            Ver más
        </button>
        </div>
     
      ) : (
        <div className="completion-message">
          <h2>✨ ¡Las inscripciones han cerrado! ✨</h2>
          <p>Redirigiendo a la página principal...</p>
        </div>
      )}
    </div>
  );
}
