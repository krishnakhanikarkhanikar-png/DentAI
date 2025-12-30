
import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'neon' | 'light' | 'outline';
  size?: 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  variant = 'neon', 
  size = 'md',
  className = '',
  onClick
}) => {
  const baseStyles = "relative group flex items-center justify-center font-bold transition-all duration-500 rounded-full overflow-hidden isolate";
  
  const sizeStyles = {
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  };

  const variants = {
    neon: "bg-neon text-black hover:scale-105 glow-neon active:scale-95 shadow-[0_0_20px_rgba(190,243,3,0)] hover:shadow-[0_0_30px_rgba(190,243,3,0.4)]",
    light: "bg-white text-black hover:bg-neon hover:scale-105 active:scale-95",
    outline: "bg-transparent border border-white/20 text-white hover:border-neon hover:text-neon hover:scale-105 active:scale-95"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      
      {/* Moving Shine Effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-white/30 skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />
      
      {/* Border Beam (Orbiting Light) */}
      <div className="absolute inset-0 rounded-full p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-full border border-white/40 blur-[1px]" />
      </div>

      {/* Subtle pulse background */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
    </button>
  );
};

export default GlowButton;
