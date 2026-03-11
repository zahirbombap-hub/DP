import { Header } from "../components/tejidos/Header.tsx";
import { Hero } from "../components/tejidos/Hero.tsx";
import { Collection } from "../components/tejidos/Collection.tsx";
import { Philosophy } from "../components/tejidos/Philosophy.tsx";
import { Newsletter } from "../components/tejidos/Newsletter.tsx";
import { Footer } from "../components/tejidos/Footer.tsx";

export default function HandmadeWool() {
    return (
        <div className="font-['Manrope',sans-serif] bg-[#E8E3DA] dark:bg-[#211811] text-slate-900 dark:text-slate-100 transition-colors duration-300 animate-[fadeIn_2s_ease-out_forwards]">
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />

            <Header />

            <main>
                <Hero />
                <Collection />
                <Philosophy />
                <Newsletter />
            </main>

            <Footer />
            <style>{`
        .wool-texture {
          background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuAX_04dxUFna21e7wajkiuwBbPXVt2G16Pkay-8ZBcDLgwV1H4msb7TnKifS85dyGCbjaVw_VPqlZod2VqvGntNwkKG3tDPm41DtYxDK267uQHgyztn9iWGUIfjv_maVcz7d4FBTS3cPMoOC7R-2SI5G58vseX0Xy4q6l8hJSGBd-JIOXL2nm3-hA9pmo9x_uDDOXKKPRx0xCfrxXfMU888FoMcvQpVSVsbL2AFVEcIG9JUD4t5jYCc7xKOdiWU04a_5BtSTxuGXHI);
        }
        @keyframes fadeIn {
          0% { opacity: 0; background-color: #FFFDD0; }
          100% { opacity: 1; background-color: transparent; }
        }
        @keyframes blurFocus {
          0% { filter: blur(12px); opacity: 0; transform: translateY(10px); }
          100% { filter: blur(0); opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
