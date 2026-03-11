export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-[-50%] opacity-0 animate-[spiralIn_2.5s_cubic-bezier(0.23,1,0.32,1)_forwards] flex items-center justify-center">
        <div className="absolute w-[150%] h-[150%] opacity-20" style={{ background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, #00ffff 50%, transparent 100%)', filter: 'blur(80px)' }}></div>
        <div className="absolute w-[150%] h-[150%] opacity-20" style={{ background: 'conic-gradient(from 180deg at 50% 50%, transparent 0%, #FF00FF 50%, transparent 100%)', filter: 'blur(80px)' }}></div>
      </div>
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div className="absolute inset-0 opacity-0 animate-[sparkEntry_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 10% 20%, #fff, rgba(0,0,0,0)),
                              radial-gradient(1.5px 1.5px at 30% 50%, #00ffff, rgba(0,0,0,0)),
                              radial-gradient(2px 2px at 70% 30%, #FF00FF, rgba(0,0,0,0)),
                              radial-gradient(1px 1px at 90% 80%, #fff, rgba(0,0,0,0))`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px'
        }}>
          <div className="absolute inset-0 animate-[sparkDrift_60s_linear_infinite]"></div>
        </div>
      </div>
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00ffff]/10 rounded-full blur-[120px]"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FF00FF]/10 rounded-full blur-[150px]"></div>
    </div>
  );
}