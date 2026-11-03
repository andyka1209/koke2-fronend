import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'danger' | 'primary';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary': variantStyles = "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/20"; break;
    case 'outline': variantStyles = "border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-800"; break;
    case 'ghost': variantStyles = "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"; break;
    case 'danger': variantStyles = "bg-red-50 text-red-600 hover:bg-red-100 border border-red-100"; break;
    default: variantStyles = "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm";
  }

  let sizeStyles = "";
  switch (size) {
    case 'sm': sizeStyles = "h-9 px-3 text-xs gap-1.5"; break;
    case 'lg': sizeStyles = "h-12 px-6 text-base gap-2.5 rounded-2xl"; break;
    case 'icon': sizeStyles = "h-9 w-9 p-0 rounded-xl"; break;
    default: sizeStyles = "h-10 px-4 text-sm gap-2";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}