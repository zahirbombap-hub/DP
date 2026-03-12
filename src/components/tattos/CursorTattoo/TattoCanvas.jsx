import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

const TattooCanvas = forwardRef(function TattooCanvas(
    { machineOn = true, color = "#ffffff", strokeWidth = 2.5 },
    ref
) {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const lastPos = useRef(null);
    const isDrawing = useRef(false);
    const isTouchDevice = useRef(false);

    useEffect(() => {
        // Detect touch device
        isTouchDevice.current = (
            (typeof window !== 'undefined' &&
                ('ontouchstart' in window ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0)) ||
            (typeof navigator !== 'undefined' &&
                /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|BlackBerry/.test(
                    navigator.userAgent
                ))
        );



        const canvas = canvasRef.current;
        if (!canvas) return;

        const setupCtx = () => {
            const ctx = canvas.getContext("2d", { willReadFrequently: false });
            if (ctx) {
                ctxRef.current = ctx;
                const dpr = window.devicePixelRatio || 1;
                ctx.strokeStyle = color;
                ctx.lineWidth = strokeWidth;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
        };

        const resize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const doc = document.documentElement;
            const width = Math.max(doc.scrollWidth, doc.clientWidth);
            const height = Math.max(doc.scrollHeight, doc.clientHeight);

            const tmp = document.createElement('canvas');
            tmp.width = canvas.width || 1;
            tmp.height = canvas.height || 1;
            const tmpCtx = tmp.getContext('2d');
            if (tmpCtx && canvas.width && canvas.height) tmpCtx.drawImage(canvas, 0, 0);

            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';

            setupCtx();
            if (tmpCtx && ctxRef.current) {
                ctxRef.current.drawImage(tmp, 0, 0, tmp.width, tmp.height, 0, 0, canvas.width, canvas.height);
            }
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('scroll', resize, { passive: true });

        setupCtx();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', resize);
            ctxRef.current = null;
        };
    }, [color, strokeWidth]);

    useEffect(() => {
        // Disable drawing on touch devices
        if (isTouchDevice.current) return;

        const handleDown = (e) => {
            if (e.isPrimary === false || !machineOn) return;
            isDrawing.current = true;
            lastPos.current = { x: e.pageX, y: e.pageY };
        };

        const handleUp = () => {
            isDrawing.current = false;
            lastPos.current = null;
        };

        const draw = (e) => {
            const ctx = ctxRef.current;
            if (!ctx || !isDrawing.current || !machineOn) return;

            const x = e.pageX;
            const y = e.pageY;

            if (!lastPos.current) {
                lastPos.current = { x, y };
                return;
            }

            ctx.beginPath();
            ctx.moveTo(lastPos.current.x, lastPos.current.y);
            ctx.lineTo(x, y);
            ctx.stroke();

            lastPos.current = { x, y };
        };

        window.addEventListener('pointerdown', handleDown, { passive: false });
        window.addEventListener('pointerup', handleUp, { passive: true });
        window.addEventListener('pointermove', draw, { passive: true });

        return () => {
            window.removeEventListener('pointerdown', handleDown);
            window.removeEventListener('pointerup', handleUp);
            window.removeEventListener('pointermove', draw);
            lastPos.current = null;
            isDrawing.current = false;
        };
    }, [machineOn]);

    useImperativeHandle(ref, () => ({
        clear: () => {
            const canvas = canvasRef.current;
            const ctx = ctxRef.current;
            if (canvas && ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                lastPos.current = null;
                isDrawing.current = false;
            }
        }
    }), []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9998
            }}
        />
    );
});

export default TattooCanvas;
