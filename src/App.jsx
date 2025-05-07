// App.jsx
import { Routes, Route } from 'react-router-dom';
import Time from './components/Time';
import Home from './components/Home';
import CodefestInfo from './components/CodefestInfo';
import RegisterForm from './components/RegisterForm';
import Contacto from './components/Contacto';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Time />} />
      <Route path="/home" element={<Home />} />
      <Route path="/codefest" element={<CodefestInfo/>} />
      <Route path="/Register" element={<RegisterForm/>} />
      <Route path="/Contact" element={<Contacto/>} />
    </Routes>
  );
}
