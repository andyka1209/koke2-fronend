import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { products, formatRupiah } from '../data/products';

export default function Products({ onAddToCart }: { onAddToCart: (id: number) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-2 text-zinc-900">Semua Produk</h1>
      <p className="text-zinc-500 mb-8">Pilih dan temukan barang favoritmu.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border border-zinc-100 p-4 rounded-2xl bg-white shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-xl mb-4 bg-zinc-50"/>
            <div className="mb-4">
              <span className="text-xs text-zinc-400 font-semibold uppercase">{p.category}</span>
              <h3 className="font-bold text-lg text-zinc-900 mt-1">{p.name}</h3>
              <p className="text-blue-600 font-extrabold mt-1">{formatRupiah(p.price)}</p>
            </div>
            <div className="flex gap-2">
              <Link to={`/products/${p.id}`} className="flex-1">
                <Button variant="outline" className="w-full">Detail</Button>
              </Link>
              <Button variant="primary" className="flex-1" onClick={() => onAddToCart(p.id)}>Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}