export const Logo = () => (
  <div className="flex items-center gap-2">
    {/* Blue swirl SVG logo */}
    <div className="w-8 h-8 flex items-center justify-center">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <radialGradient id="swirlGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
        </radialGradient>
        <circle cx="32" cy="32" r="28" fill="url(#swirlGradient)" />
        <path d="M32 12c11 0 20 9 20 20s-9 20-20 20-20-9-20-20" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M32 52c-8-2-14-10-14-20 0-8 6-16 14-18" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tight">PLCcode.ai</span>
  </div>
);
