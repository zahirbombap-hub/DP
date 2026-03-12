import { useEffect, useState } from "react";
const cursorImg = '/multimedia/cursorTatto2.png';
const cursorImg2 = '/multimedia/cursorTatto.png';

export default function TattooCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [useSecondaryColor, setUseSecondaryColor] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const onOver = (e) => {
            const t = e.target;
            if (!t) return;
            
            // Elementos que deben mantener el cursor personalizado
            const keepCustomCursor = t.closest('.dp-logo-mark, a[href="#work"], a[href="#booking"], .tattoo-clear, .tattoo-menu-btn, .tattoo-menu, .welcome-subtitle-btn, .booking-submit-btn');
            if (keepCustomCursor) {
                setUseSecondaryColor(true);
            } else {
                setUseSecondaryColor(false);
            }
        };

        const onOut = (e) => {
            const related = e.relatedTarget;
            if (related && related.closest) {
                const keepCustomCursor = related.closest('.dp-logo-mark, a[href="#work"], a[href="#booking"], .tattoo-clear, .tattoo-menu-btn, .tattoo-menu, .welcome-subtitle-btn');
                if (keepCustomCursor) {
                    // saliendo de elemento con cursor personalizado a otro - mantener visible
                    setUseSecondaryColor(true);
                    return;
                }
            }
            setUseSecondaryColor(false);
        };

        window.addEventListener('pointermove', move);
        window.addEventListener('pointerover', onOver);
        window.addEventListener('pointerout', onOut);

        return () => {
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerover', onOver);
            window.removeEventListener('pointerout', onOut);
        };
    }, []);

    return (
        <img
            className="tattoo-custom-cursor"
            src={useSecondaryColor ? cursorImg2 : cursorImg}
            alt="Cursor personalizado"
            aria-hidden="true"
            style={{
                position: "fixed",
                left: pos.x,
                top: pos.y,
                width: 48,
                pointerEvents: "none",
                transform: "translate(0%, -100%) rotate(15deg)",
                zIndex: 10002
            }}
        />
    );
}
