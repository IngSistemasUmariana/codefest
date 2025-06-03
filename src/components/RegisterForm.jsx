import { useState } from 'react';
import './RegisterForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';

export default function RegisterForm() {
  const [step, setStep] = useState(0);
  const [currentStudent, setCurrentStudent] = useState(0);
  const [errorField, setErrorField] = useState('');
  const [formData, setFormData] = useState({
    teamName: '',
    school: '',
    students: [
      { name: '', grade: '10', id: '' },
      { name: '', grade: '10', id: '' },
      { name: '', grade: '10', id: '' },
    ],
    teacher: { name: '', id: '', phone: '', email: '' },
  });

  const handleChange = (e, index, field, isStudent = false) => {
    const value = e.target.value;
    if (isStudent) {
      const updatedStudents = [...formData.students];
      updatedStudents[index][field] = value;
      setFormData({ ...formData, students: updatedStudents });
    } else if (field.startsWith('teacher')) {
      const key = field.replace('teacher', '').toLowerCase();
      setFormData({ ...formData, teacher: { ...formData.teacher, [key]: value } });
    } else {
      setFormData({ ...formData, [field]: value });
    }
    setErrorField('');
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateCedula = (id) => /^\d{10}$/.test(id);

  const validateStep = () => {
    if (step === 0) {
      if (!formData.teamName.trim()) {
        setErrorField('teamName');
        toast.error('❌ El nombre del equipo es obligatorio');
        return false;
      }
      if (!formData.school.trim()) {
        setErrorField('school');
        toast.error('❌ El nombre de la institución es obligatorio');
        return false;
      }
    } else if (step === 1) {
      const student = formData.students[currentStudent];
      if (!student.name.trim()) {
        setErrorField(`studentName${currentStudent}`);
        toast.error(`❌ El nombre del estudiante ${currentStudent + 1} es obligatorio`);
        return false;
      }
      if (!validateCedula(student.id)) {
        setErrorField(`studentId${currentStudent}`);
        toast.error(`❌ La cédula del estudiante ${currentStudent + 1} debe tener 10 dígitos`);
        return false;
      }
    } else if (step === 2) {
      const { name, phone, email } = formData.teacher;
      if (!name.trim()) {
        setErrorField('teacherName');
        toast.error('❌ El nombre del docente es obligatorio');
        return false;
      }
      if (!validateCedula(phone)) {
        setErrorField('teacherPhone');
        toast.error('❌ El teléfono del docente debe tener 10 dígitos');
        return false;
      }
      if (!validateEmail(email)) {
        setErrorField('teacherEmail');
        toast.error('❌ El correo electrónico del docente no es válido');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step === 1 && currentStudent < formData.students.length - 1) {
      setCurrentStudent(currentStudent + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 1 && currentStudent > 0) {
      setCurrentStudent(currentStudent - 1);
    } else {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbySYd6sivb5voN8LHtFVpWsnOfLs1S0PmJB3fsrw1-1X7wRiQscbDhjlkOgTrXTmdq0Qw/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      toast.success("✅ Inscripción enviada exitosamente ✨");

      // EmailJS: Enviar correo de confirmación al docente
      const studentLines = formData.students.map((s, i) =>
        `Estudiante ${i + 1}:\n  Nombre: ${s.name}\n  Grado: ${s.grade}\n  ID: ${s.id}`
      ).join('\n\n');

      await emailjs.send('service_o7sv4cy', 'template_lmt79oh', {
        teamName: formData.teamName,
        school: formData.school,
        students: studentLines,
        teacherName: formData.teacher.name,
        teacherId: formData.teacher.id,
        teacherPhone: formData.teacher.phone,
        teacherEmail: formData.teacher.email,
      }, 'JofbPOd0j3-L7EVS6');

      // Resetear formulario
      setFormData({
        teamName: '',
        school: '',
        students: [
          { name: '', grade: '10', id: '' },
          { name: '', grade: '10', id: '' },
          { name: '', grade: '10', id: '' },
        ],
        teacher: { name: '', id: '', phone: '', email: '' },
      });
      setStep(0);
      setCurrentStudent(0);
      setErrorField('');
    } catch (error) {
      toast.error("❌ Error al enviar los datos");
      console.error(error);
    }
  };

  return (
    <div className="form-page-container">
      <Navbar />
      <div className="magic-overlay" />
      <div className="particle particle-blue" />
      <div className="particle particle-purple" />
      <div className="particle particle-pink" />
      <div className="particle particle-cyan" />
      <ToastContainer position="top-center" />
      <form className="card-wrapper" onSubmit={handleSubmit}>
      <div className="form-header-with-logo">
        <img src="./logo.png" alt="Logo Codefest" className="form-logo" />
        <h1 className="form-main-title">Inscripciones al Codefest Ada Kadabra</h1>
        <p className="form-subtitle">Forma tu equipo, representa tu institución y demuestra tu magia en el código. ¡La aventura comienza aquí! ✨</p>
      </div>
     


        <div className="form-tabs">
          <span className={`tab-title ${step === 0 ? 'active' : ''}`}>📋 Info General</span>
          <span className={`tab-title ${step === 1 ? 'active' : ''}`}>👩‍🎓 Estudiantes</span>
          <span className={`tab-title ${step === 2 ? 'active' : ''}`}>👨‍🏫 Docente</span>
        </div>

        {step === 0 && (
          <div className="form-body">
            <label>🚀 Nombre del Equipo</label>
            <input
              type="text"
              placeholder="Nombre del Equipo"
              value={formData.teamName}
              onChange={(e) => handleChange(e, null, 'teamName')}
              className={errorField === 'teamName' ? 'input-error' : ''}
            />
            <label>🏫 Institución Educativa</label>
            <input
              type="text"
              placeholder="Institución Educativa"
              value={formData.school}
              onChange={(e) => handleChange(e, null, 'school')}
              className={errorField === 'school' ? 'input-error' : ''}
            />
            <div className="form-buttons">
              <button type="button" className="btn-magic" onClick={handleNext}>Siguiente →</button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="form-body">
            <h2 className="form-title">Estudiante {currentStudent + 1}</h2>
            <label>👤 Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={formData.students[currentStudent].name}
              onChange={(e) => handleChange(e, currentStudent, 'name', true)}
              className={errorField === `studentName${currentStudent}` ? 'input-error' : ''}
            />
            <label>🎓 Grado</label>
            <select
              value={formData.students[currentStudent].grade}
              onChange={(e) => handleChange(e, currentStudent, 'grade', true)}
            >
              <option value="10">Grado 10</option>
              <option value="11">Grado 11</option>
            </select>
            <label>🆔 TI /CC</label>
            <input
              type="text"
              placeholder="Cédula"
              value={formData.students[currentStudent].id}
              onChange={(e) => handleChange(e, currentStudent, 'id', true)}
              className={errorField === `studentId${currentStudent}` ? 'input-error' : ''}
            />
            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={handleBack}>← Anterior</button>
              <button type="button" className="btn-magic" onClick={handleNext}>
                {currentStudent === formData.students.length - 1 ? 'Siguiente →' : 'Siguiente Estudiante →'}
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-body">
            <label>👨‍🏫 Nombre del Docente</label>
            <input
              type="text"
              placeholder="Nombre del Docente"
              value={formData.teacher.name}
              onChange={(e) => handleChange(e, null, 'teacherName')}
              className={errorField === 'teacherName' ? 'input-error' : ''}
            />
            <label>🆔 Cédula</label>
            <input
              type="text"
              placeholder="Cédula"
              value={formData.teacher.id}
              onChange={(e) => handleChange(e, null, 'teacherId')}
              className={errorField === 'teacherId' ? 'input-error' : ''}
            />
            <label>📞 Teléfono</label>
            <input
              type="text"
              placeholder="Teléfono"
              value={formData.teacher.phone}
              onChange={(e) => handleChange(e, null, 'teacherPhone')}
              className={errorField === 'teacherPhone' ? 'input-error' : ''}
            />
            <label>📧 Correo electrónico</label>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={formData.teacher.email}
              onChange={(e) => handleChange(e, null, 'teacherEmail')}
              className={errorField === 'teacherEmail' ? 'input-error' : ''}
            />
            <div className="form-buttons">
              <button type="button" className="btn-outline" onClick={handleBack}>← Anterior</button>
              <button type="submit" className="btn-magic">✨ Enviar Inscripción</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
