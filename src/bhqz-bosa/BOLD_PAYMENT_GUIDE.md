// BHQZ Bosa - Payment Button Integration Guide
// Examples of how to use BoldPaymentButton in different contexts

import { BoldPaymentButton } from '../components/index.jsx';

/**
 * EJEMPLO 1: Botón básico en un formulario de registro
 */
export function RegistrationWithPayment() {
  const handlePaymentClick = ({ amount, productName }) => {
    // Aquí integras con la API de Bold
    // Envías: amount (precio), productName (nombre del producto)
    fetch('/api/bold-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        amount, 
        productName,
        // Otros datos necesarios...
      }),
    })
      .then(res => res.json())
      .then(data => {
        // Redirige al checkout de Bold
        window.location.href = data.checkoutUrl;
      });
  };

  return (
    <div>
      <h2>Completar Pago</h2>
      <BoldPaymentButton
        amount={50000} // En centavos si es necesario
        productName="Programa Especializado BHQZ"
        onPaymentClick={handlePaymentClick}
        variant="primary"
      />
    </div>
  );
}

/**
 * EJEMPLO 2: Botón con variantes de estilo
 */
export function PaymentButtonVariants() {
  return (
    <div className="space-y-4">
      {/* Variante primaria (recomendada) */}
      <BoldPaymentButton
        amount={100000}
        productName="Membresía Annual"
        variant="primary"
      />

      {/* Variante secundaria */}
      <BoldPaymentButton
        amount={50000}
        productName="Clase única"
        variant="secondary"
      />

      {/* Variante outline */}
      <BoldPaymentButton
        amount={25000}
        productName="Workshop"
        variant="outline"
      />
    </div>
  );
}

/**
 * EJEMPLO 3: Botón con estado de carga
 */
export function PaymentButtonWithLoading() {
  const [loading, setLoading] = React.useState(false);

  const handlePayment = ({ amount, productName }) => {
    setLoading(true);
    // Simula procesamiento
    setTimeout(() => {
      console.log(`Pagando ${amount} por ${productName}`);
      setLoading(false);
    }, 2000);
  };

  return (
    <BoldPaymentButton
      amount={75000}
      productName="Membresía Mensual"
      onPaymentClick={handlePayment}
      loading={loading}
      variant="primary"
    />
  );
}

/**
 * EJEMPLO 4: En una página de pago completa
 */
export function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = React.useState('monthly');

  const plans = {
    monthly: { price: 50000, name: 'Plan Mensual' },
    quarterly: { price: 120000, name: 'Plan Trimestral' },
    annual: { price: 400000, name: 'Membresía Anual' },
  };

  const plan = plans[selectedPlan];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="z7-section-title text-4xl font-bold mb-8">
        Elige tu Plan
      </h1>

      {/* Plan Selection */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Object.entries(plans).map(([key, p]) => (
          <button
            key={key}
            onClick={() => setSelectedPlan(key)}
            className={`p-4 rounded-lg border-2 transition ${
              selectedPlan === key
                ? 'border-yellow-600 bg-yellow-50'
                : 'border-gray-300 hover:border-yellow-300'
            }`}
          >
            <p className="font-semibold">{p.name}</p>
            <p className="text-lg mt-2">
              ${(p.price / 100).toLocaleString()}
            </p>
          </button>
        ))}
      </div>

      {/* Payment Button */}
      <div className="flex justify-center">
        <BoldPaymentButton
          amount={plan.price}
          productName={plan.name}
          variant="primary"
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
}

/**
 * USO EN COMPONENTES EXISTENTES:
 * 
 * 1. En Home.jsx - agregar botón en secciones de programas
 * 2. En Inscripciones.jsx - botón de pago final
 * 3. En cards de programas - botón para comprar
 * 4. En RegistrationForm.jsx - botón de confirmación de pago
 */
