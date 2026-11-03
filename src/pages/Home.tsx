import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-24 pb-0 px-4 min-h-[85vh] bg-white overflow-hidden">
      
      {/* Teks Hero ala Apple */}
      <div className="text-center max-w-3xl z-10">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-zinc-400 uppercase mb-3">
          Koleksi Terbaru 2026
        </h2>
        <h1 className="text-7xl md:text-[7rem] font-black text-zinc-900 tracking-tighter mb-4 leading-none">
          VSC Store.
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-600 font-medium mb-10 tracking-tight">
          Halo, masa depan.
        </p>
        
        {/* Tombol Kapsul (Pill-shaped) */}
        <div className="flex items-center justify-center gap-4">
          <Link to="/products">
            <Button variant="primary" size="lg" className="rounded-full px-8 text-base">
              Beli Sekarang
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50">
              Selengkapnya
            </Button>
          </Link>
        </div>
      </div>

      {/* Gambar Showcase bergaya elegan di bagian bawah */}
      <div className="mt-20 w-full max-w-5xl relative">
        {/* Efek gradasi putih untuk menyamarkan batas bawah gambar */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        
        <img 
          // Menggunakan gambar Smart Watch dari data produk kamu sebagai showcase
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80" 
          alt="VSC Store Showcase" 
          className="w-full h-auto object-cover rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-2xl border-t border-x border-zinc-200/60"
          style={{ maxHeight: '550px', objectPosition: 'center 30%' }}
        />
      </div>
    </div>
  );
}