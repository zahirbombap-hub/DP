// BHQZ Bosa - Bold Payment Button Component
// Integration with Bold payment gateway

export default function BoldPaymentButton({
  amount,
  productName = "Servicio BHQZ",
  onPaymentClick,
  className = "",
  variant = "primary",
  loading = false,
}) {
  const handlePayment = () => {
    if (onPaymentClick) {
      onPaymentClick({ amount, productName });
    } else {
      console.log(`Opening Bold payment for ${productName}: $${amount}`);
    }
  };

    const baseStyles = "flex items-center justify-center gap-2 px-6 md:px-8 py-1 md:py-1.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary: "text-white hover:shadow-lg hover:opacity-90",
        secondary: "bg-white border-2 hover:opacity-90",
        outline: "bg-transparent border-2 hover:opacity-10",
    };

    const gradientStyle = {
        primary: {
            background: "linear-gradient(135deg, #F04E5E 0%, #9B3080 50%, #1B1464 100%)",
        },
        secondary: {
            borderColor: "#9B3080",
            color: "#9B3080",
        },
        outline: {
            borderColor: "#9B3080",
            color: "#9B3080",
        },
    };

    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            style={gradientStyle[variant]}
            aria-label="Pagar con "
        >
            <span className="text-xs md:text-xs lg:text-sm whitespace-nowrap">
                {loading ? "Procesando..." : "Pagar con"}
            </span>

            <img
                src="/multimedia/BHQZ/logobold.svg"
                alt="Logo Bold"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
            />
        </button>
    );
}