import { useState } from 'react';
import './Contacto.css';
import Navbar from './Navbar';

export default function Contacto() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target[0].value,
      correo: e.target[1].value,
      asunto: e.target[2].value,
      mensaje: e.target[3].value,
    };

    fetch("https://script.google.com/macros/s/AKfycbwlByNzo3lchMi1HIvWsIteOnIGSXkG-dkoxiqqvXP9FR8TQjg7CTlieXlpCEBfoaeq/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 4000);
        e.target.reset();
      })
      .catch(() => alert("Error al enviar el mensaje 😥"));
  };

  return (
    <div className="contact-wrapper">
      <Navbar />
      <div className="magic-overlay" />
      <div className="particle particle-blue" />
      <div className="particle particle-purple" />
      <div className="particle particle-pink" />
      <div className="particle particle-cyan" />

      {toastVisible && (
        <div className="toast">
          ✨ Tu mensaje ha sido enviado con éxito ✨
        </div>
      )}

      <div className="contact-section">
        <div className="info-map-section">
          <div className="card-info">
            <img
              src="./yo.jpg"
              alt="Juan Sebastián Carrera Bolaños"
              className="profile-photo"
            />
            <div className="text-info">
              <h2>Juan Sebastián Carrera Bolaños</h2>
              <p className="subtitle">🧑‍🏫 Docente de Ingeniería de Sistemas</p>
              <p>📍 Universidad Mariana</p>
              <p>💻 Lider Celula de Programacion - Ada Kadabra</p>
              <p>📧 juacarrera@umariana.edu.co</p>
              <p>📱 321 828 2201</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Mapa Universidad Mariana"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4537640265637!2d-77.28406892086963!3d1.2242750671228673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed47eda893275%3A0xdd5dd37b8fe470c2!2sUniversidad%20Mariana!5e0!3m2!1ses!2sco!4v1746601369217!5m2!1ses!2sco"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="form-section">
          <h2>Contáctanos</h2>
          <p>Envíanos un correo para poder atenderte de manera eficaz y mágica ✨</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu correo" required />
            <input type="text" placeholder="Asunto" required />
            <textarea placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}
