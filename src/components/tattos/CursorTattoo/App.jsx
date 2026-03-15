import { useRef, useEffect, useState } from "react";
import TattooCursor from "./TattooCursor.jsx";
import TattooCanvas from "./TattoCanvas.jsx";
// use public assets for images

export default function App() {
    const canvasRef = useRef(null);
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMachineOn, setIsMachineOn] = useState(true);
    const [selectedColor, setSelectedColor] = useState("#ffffff");
    const [strokeWidth, setStrokeWidth] = useState(2.5);
    const [isDesktop, setIsDesktop] = useState(true);

    const colors = ["#ffffff", "#ff3d4d", "#00ffff", "#ffff00", "#00ff00", "#ff00ff"];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 800px)');
        const handleResize = () => {
            setIsDesktop(mediaQuery.matches);
        };

        mediaQuery.addEventListener('change', handleResize);
        handleResize(); // Initial check

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    useEffect(() => {
        // Apaga la máquina automáticamente en pantallas no-desktop para que el interruptor refleje el estado.
        if (!isDesktop) {
            setIsMachineOn(false);
        }
    }, [isDesktop]);

    // useEffect(() => {
    //     // Hide native cursor so the image cursor is used as default
    //     const prev = document.body.style.cursor;
    //     document.body.style.cursor = "none";
    //     return () => { document.body.style.cursor = prev; };
    // }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    const clearTattoos = () => {
        if (canvasRef.current?.clear) canvasRef.current.clear();
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setIsMenuOpen(false);
    };

    const handleToggleMachine = () => {
        setIsMachineOn(!isMachineOn);
    };

    return (
        <>
                <div className="tattoo-controls" style={{ position: "fixed", bottom: 20, right: 20, zIndex: 10000, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div className="tattoo-clear-wrap">
                        <button
                            className="tattoo-clear"
                            onClick={clearTattoos}
                            aria-label="Limpiar tatuajes"
                            title="Limpiar tatuajes"
                        >
                            <img src="/multimedia/borrador.webp" alt="Limpiar tatuajes" />
                        </button>
                    </div>
                    <div ref={menuRef} style={{ position: 'relative' }}>
                        <button
                            className={`tattoo-menu-btn ${isMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{ 
                                '--btn-color': (isMachineOn ? selectedColor : '#555555')
                            }}
                            aria-label="Configurar máquina de tatuaje"
                            title="Configurar máquina"
                        >
                            <img src="/multimedia/tintero.png" alt="Configurar" />
                        </button>

                        {isMenuOpen && (
                            <div className="tattoo-menu">
                                <h3 className="tattoo-menu-title">CURSOR TATUADOR</h3>
                                
                                <div className="tattoo-menu-section">
                                    <label className="tattoo-toggle-label">
                                        <input 
                                            type="checkbox" 
                                            checked={isMachineOn}
                                            onChange={handleToggleMachine}
                                            className="tattoo-toggle-input"
                                        />
                                        <span className="tattoo-toggle-slider"></span>
                                        <span className="tattoo-toggle-text">{isMachineOn ? 'ENCENDIDO' : 'APAGADO'}</span>
                                    </label>
                                </div>

                                <div className="tattoo-menu-section">
                                    <label className="tattoo-menu-label">COLOR:</label>
                                    <div className="tattoo-color-palette">
                                        {colors.map((color) => (
                                            <button
                                                key={color}
                                                className={`tattoo-color-btn ${selectedColor === color ? 'active' : ''}`}
                                                style={{ backgroundColor: color }}
                                                onClick={() => handleColorSelect(color)}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="tattoo-menu-section">
                                    <label className="tattoo-menu-label">GROSOR:</label>
                                    <div className="tattoo-slider-container">
                                        <input
                                            type="range"
                                            min="1"
                                            max="8"
                                            step="0.5"
                                            value={strokeWidth}
                                            onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                                            className="tattoo-slider"
                                        />
                                        <span className="tattoo-slider-value">{strokeWidth.toFixed(1)}px</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            <style>{`
                @media (min-width: 1025px) {
                    * {
                        cursor: none !important;
                    }
                }
                @media (max-width: 800px) {
                    * {
                        cursor: auto !important;
                    }
                    .tattoo-controls {
                        display: none !important;
                    }
                    .tattoo-custom-cursor {
                        display: none !important;
                    }
                }
                .tattoo-menu-btn {
                    position: relative;
                    border-radius: 14px;
                    padding: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, rgba(249,115,22,0.10), rgba(99,102,241,0.06));
                    border: none;
                    cursor: none;
                    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease, background 0.3s ease, opacity 0.3s ease;
                    box-shadow: 0 8px 22px rgba(2,6,23,0.12);
                    outline: none;
                    opacity: 0.5;
                }

                .tattoo-menu-btn::before {
                    content: '';
                    position: absolute;
                    inset: -6px;
                    border-radius: 18px;
                    background: radial-gradient(circle at 30% 30%, rgba(249,115,22,0.10), transparent 25%), radial-gradient(circle at 70% 70%, rgba(99,102,241,0.06), transparent 30%);
                    opacity: 0.9;
                    filter: blur(6px);
                    z-index: -1;
                    transition: opacity 0.3s ease;
                }

                .tattoo-menu-btn:hover, .tattoo-menu-btn.active {
                    transform: translateY(-6px) scale(1.08);
                    box-shadow: 0 18px 50px rgba(138,0,18,0.35);
                    background: 
                        linear-gradient(135deg, rgba(249,115,22,0.18), rgba(99,102,241,0.12)),
                        var(--btn-color, #555555);
                    opacity: 1;
                }

                .tattoo-menu-btn:active {
                    transform: translateY(-2px) scale(1.04);
                    box-shadow: 0 8px 16px rgba(138,0,18,0.25);
                }

                .tattoo-menu-btn img {
                    width: 44px;
                    height: 44px;
                    border-radius: 8px;
                    display: block;
                    object-fit: contain;
                    transition: filter 0.3s ease;
                    position: relative;
                    z-index: 1;
                }

                .tattoo-menu-btn:hover img {
                    filter: brightness(1.2) drop-shadow(0 0 8px rgba(138,0,18,0.6));
                }

                @media (prefers-reduced-motion: no-preference) {
                    .tattoo-menu-btn::after {
                        content: '';
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 80%;
                        height: 80%;
                        transform: translate(-50%, -50%);
                        border-radius: 50%;
                        background: radial-gradient(circle, rgba(249,115,22,0.08), rgba(99,102,241,0.02));
                        opacity: 0;
                        animation: pulse 2400ms infinite;
                        pointer-events: none;
                    }
                }

                .tattoo-menu {
                    position: absolute;
                    bottom: 60px;
                    right: 0;
                    background: linear-gradient(135deg, rgba(20,20,30,0.98), rgba(35,35,50,0.98));
                    backdrop-filter: blur(10px);
                    border: 2px solid #8a0012;
                    border-radius: 12px;
                    padding: 16px;
                    width: 280px;
                    box-shadow: 0 20px 60px rgba(138,0,18,0.4);
                    z-index: 10001;
                    animation: slideUp 0.3s ease-out;
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .tattoo-menu-title {
                    margin: 0 0 16px 0;
                    font-size: 12px;
                    font-weight: 900;
                    color: #ff3d4d;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    border-bottom: 2px solid #8a0012;
                    padding-bottom: 8px;
                }

                .tattoo-menu-section {
                    margin-bottom: 16px;
                }

                .tattoo-menu-label {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    color: #ffffff;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 8px;
                }

                .tattoo-toggle-label {
                    display: flex;
                    align-items: center;
                    cursor: none;
                    gap: 10px;
                }

                .tattoo-toggle-input {
                    display: none;
                }

                .tattoo-toggle-slider {
                    width: 40px;
                    height: 20px;
                    background-color: #555;
                    border-radius: 10px;
                    position: relative;
                    transition: background-color 0.3s ease;
                    border: 2px solid #333;
                }

                .tattoo-toggle-input:checked + .tattoo-toggle-slider {
                    background-color: #8a0012;
                    border-color: #ff3d4d;
                }

                .tattoo-toggle-slider::after {
                    content: '';
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    background-color: white;
                    border-radius: 50%;
                    top: 2px;
                    left: 2px;
                    transition: left 0.3s ease;
                }

                .tattoo-toggle-input:checked + .tattoo-toggle-slider::after {
                    left: 22px;
                }

                .tattoo-toggle-text {
                    font-size: 10px;
                    font-weight: 900;
                    color: #ffffff;
                    text-transform: uppercase;
                }

                .tattoo-color-palette {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                }

                .tattoo-color-btn {
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 8px;
                    border: 3px solid transparent;
                    cursor: none;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
                }

                .tattoo-color-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 12px rgba(138,0,18,0.5);
                }

                .tattoo-color-btn.active {
                    border-color: #ffffff;
                    box-shadow: 0 0 12px currentColor, 0 4px 8px rgba(0,0,0,0.4);
                }

                .tattoo-slider-container {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }

                .tattoo-slider {
                    flex: 1;
                    height: 4px;
                    border-radius: 2px;
                    background: linear-gradient(90deg, #555, #8a0012);
                    outline: none;
                    -webkit-appearance: none;
                }

                .tattoo-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #ff3d4d;
                    cursor: none;
                    box-shadow: 0 2px 6px rgba(255,61,77,0.6);
                    border: 2px solid #ffffff;
                    transition: all 0.2s ease;
                }

                .tattoo-slider::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 4px 10px rgba(255,61,77,0.8);
                }

                .tattoo-slider::-moz-range-thumb {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #ff3d4d;
                    cursor: none;
                    box-shadow: 0 2px 6px rgba(255,61,77,0.6);
                    border: 2px solid #ffffff;
                    transition: all 0.2s ease;
                }

                .tattoo-slider-value {
                    min-width: 40px;
                    font-size: 10px;
                    font-weight: 900;
                    color: #ff3d4d;
                    text-align: right;
                }

                .tattoo-clear-wrap {
                    position: relative; 
                    border-radius:14px; 
                    padding:6px; 
                    display:inline-block; 
                    background: linear-gradient(135deg, rgba(249,115,22,0.10), rgba(99,102,241,0.06)); 
                    box-shadow: 0 8px 22px rgba(2,6,23,0.12); 
                    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease, background 0.3s ease, opacity 0.3s ease;
                    cursor: none;
                    opacity: 0.5;
                }
                .tattoo-clear-wrap::before{ 
                    content:''; 
                    position:absolute; 
                    inset: -6px; 
                    border-radius:18px; 
                    background: radial-gradient(circle at 30% 30%, rgba(249,115,22,0.10), transparent 25%), radial-gradient(circle at 70% 70%, rgba(99,102,241,0.06), transparent 30%); 
                    opacity:.9; 
                    filter: blur(6px); 
                    z-index: -1; 
                    transition: opacity 0.3s ease; 
                }
                .tattoo-clear-wrap:hover{ 
                    transform: translateY(-6px) scale(1.08); 
                    box-shadow: 0 18px 50px rgba(138,0,18,0.35);
                    background: linear-gradient(135deg, rgba(249,115,22,0.18), rgba(99,102,241,0.12));
                    opacity: 1;
                }
                .tattoo-clear-wrap:active { 
                    transform: translateY(-2px) scale(1.04);
                    box-shadow: 0 8px 16px rgba(138,0,18,0.25);
                }
                .tattoo-clear{ 
                    background: transparent; 
                    border: none; 
                    padding:0; 
                    margin:0; 
                    display:flex; 
                    align-items:center; 
                    justify-content:center; 
                    cursor: none;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.2s ease;
                }
                .tattoo-clear:active {
                    transform: scale(0.95);
                }
                .tattoo-clear img{ 
                    width:44px; 
                    height:44px; 
                    border-radius:8px; 
                    display:block; 
                    object-fit:contain;
                    transition: filter 0.3s ease;
                }
                .tattoo-clear-wrap:hover .tattoo-clear img {
                    filter: brightness(1.2) drop-shadow(0 0 8px rgba(138,0,18,0.6));
                }
                @media (prefers-reduced-motion: no-preference){
                  .tattoo-clear-wrap::after{ 
                    content:''; 
                    position:absolute; 
                    left:50%; 
                    top:50%; 
                    width:80%; 
                    height:80%; 
                    transform:translate(-50%,-50%); 
                    border-radius:50%; 
                    background: radial-gradient(circle, rgba(249,115,22,0.08), rgba(99,102,241,0.02)); 
                    opacity:0; 
                    animation: pulse 2400ms infinite; 
                    pointer-events:none; 
                  }
                  @keyframes pulse{ 
                    0%{ opacity:0 } 
                    40%{ opacity:0.26 } 
                    100%{ opacity:0 } 
                  }
                }
            `}</style>

            <TattooCanvas 
                ref={canvasRef} 
                machineOn={isMachineOn && isDesktop}
                color={selectedColor}
                strokeWidth={strokeWidth}
            />
            <TattooCursor />

            {/* resto de tu app */}
        </>
    );
}
