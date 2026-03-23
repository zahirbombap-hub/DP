import { useEffect } from "react";
import "../components/tejidos/tejidos.css";
import { Header } from "../components/tejidos/Header.jsx";
import { Hero } from "../components/tejidos/Hero.jsx";
import { Collection } from "../components/tejidos/Collection.jsx";
import { Philosophy } from "../components/tejidos/Philosophy.jsx";
import { Newsletter } from "../components/tejidos/Newsletter.jsx";
import { Footer } from "../components/tejidos/Footer.jsx";

export default function HandmadeWool() {
    useEffect(() => {
        document.body.classList.add("wool-body");
        return () => {
            document.body.classList.remove("wool-body");
        };
    }, []);

    return (
        <div className="font-['Manrope',sans-serif] transition-colors duration-300 animate-[fadeIn_2s_ease-out_forwards] wool-page">
            <Header />

            <main>
                <Hero />
                <Collection />
                <Philosophy />
                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
