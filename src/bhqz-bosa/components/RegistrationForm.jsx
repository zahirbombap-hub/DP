// BHQZ Bosa - Registration Form Component
// Reusable form component with basic validation

import { useState } from 'react';

export default function RegistrationForm({ onSubmit = null }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const formContainerClass = 'bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 max-w-2xl mx-auto w-full';
  const labelClass = 'block text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2';
  const inputClass = 'w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors';
  const errorClass = 'text-xs sm:text-sm text-red-600 mt-1';

  /**
   * Validate form fields
   */
  const validateForm = () => {
    const newErrors = {};

    // Validate nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    // Validate correo
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Por favor ingresa un correo válido';
    }

    // Validate telefono
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{7,}$/.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'Por favor ingresa un teléfono válido';
    }

    // Validate mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    return newErrors;
  };

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Call optional callback
      if (onSubmit) {
        onSubmit(formData);
      }

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          mensaje: '',
        });
        setSubmitted(false);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className={formContainerClass}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
          <p className="text-green-800 font-semibold text-sm sm:text-base">¡Gracias por tu inscripción!</p>
          <p className="text-green-700 text-xs sm:text-sm mt-1">Te contactaremos pronto</p>
        </div>
      </div>
    );
  }

  return (
    <div className={formContainerClass}>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Nombre */}
        <div>
          <label className={labelClass}>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={inputClass}
            placeholder="Tu nombre completo"
          />
          {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Correo Electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className={inputClass}
            placeholder="tu@email.com"
          />
          {errors.correo && <p className={errorClass}>{errors.correo}</p>}
        </div>

        {/* Teléfono */}
        <div>
          <label className={labelClass}>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={inputClass}
            placeholder="123456789"
          />
          {errors.telefono && <p className={errorClass}>{errors.telefono}</p>}
        </div>

        {/* Mensaje */}
        <div>
          <label className={labelClass}>Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            className={`${inputClass} resize-none`}
            placeholder="Cuéntanos más sobre tu interés"
          ></textarea>
          {errors.mensaje && <p className={errorClass}>{errors.mensaje}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors active:bg-blue-800"
        >
          Enviar Inscripción
        </button>
      </form>
    </div>
  );
}
