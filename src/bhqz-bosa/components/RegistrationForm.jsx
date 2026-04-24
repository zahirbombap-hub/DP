// BHQZ Bosa - Registration Form Component
// Reusable form component with basic validation

import { useState } from 'react';

export default function RegistrationForm({ onSubmit = null, initialData = {} }) {
  const [formData, setFormData] = useState(() => ({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
    ...initialData,
  }));

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const formContainerClass = 'bg-white rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8 max-w-2xl mx-auto w-full shadow-sm';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';
  const inputClass = 'w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow';
  const errorClass = 'text-sm text-red-600 mt-1';

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
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nombre" className={labelClass}>Nombre</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={inputClass}
              placeholder="Tu nombre completo"
              aria-invalid={errors.nombre ? 'true' : 'false'}
            />
            {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
          </div>

          <div>
            <label htmlFor="correo" className={labelClass}>Correo Electrónico</label>
            <input
              id="correo"
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className={inputClass}
              placeholder="tu@email.com"
              aria-invalid={errors.correo ? 'true' : 'false'}
            />
            {errors.correo && <p className={errorClass}>{errors.correo}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="telefono" className={labelClass}>Teléfono</label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={inputClass}
              placeholder="123456789"
              aria-invalid={errors.telefono ? 'true' : 'false'}
            />
            {errors.telefono && <p className={errorClass}>{errors.telefono}</p>}
          </div>

          <div>
            <label htmlFor="mensaje" className={labelClass}>Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              className={`${inputClass} resize-none`}
              placeholder="Cuéntanos más sobre tu interés"
              aria-invalid={errors.mensaje ? 'true' : 'false'}
            ></textarea>
            {errors.mensaje && <p className={errorClass}>{errors.mensaje}</p>}
          </div>
        </div>

        <button
          type="submit"
          className={`inline-flex items-center justify-center w-full rounded-lg px-6 py-2 font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm`}
        >
          Enviar Inscripción
        </button>
      </form>
    </div>
  );
}
