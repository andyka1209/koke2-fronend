import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ totalCartCount }: { totalCartCount: number }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">V</div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">VSC Store<span className="text-blue-600">.</span></span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link to="/" className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors ${currentPath === '/' ? 'text-blue-600 bg-blue-50/70' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'}`}>Home</Link>
          <Link to="/products" className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors ${currentPath.startsWith('/products') ? 'text-blue-600 bg-blue-50/70' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'}`}>Products</Link>
          <Link to="/cart" className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold transition-colors ${currentPath === '/cart' ? 'text-blue-600 bg-blue-50/70' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'}`}>
            <ShoppingBag className="w-4 h-4" />
            <span>Cart</span>
            {totalCartCount > 0 && <span className="bg-blue-600 text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full min-w-[20px] text-center shadow-xs">{totalCartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}