import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/button';
import { products, formatRupiah } from '../data/products';

export default function ProductDetail({ onAddToCart }: { onAddToCart: (id: number) => void }) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="py-20 text-center font-bold">Produk tidak ditemukan.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link to="/products" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Katalog
      </Link>
      <div className="bg-white rounded-3xl border border-zinc-100 p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={product.image} alt={product.name} className="w-full h-auto aspect-square object-cover rounded-2xl bg-zinc-50" />
        <div>
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">{product.category}</span>
          <h1 className="text-3xl font-extrabold text-zinc-900 mt-3 mb-2">{product.name}</h1>
          <p className="text-2xl font-black text-blue-600 mb-6">{formatRupiah(product.price)}</p>
          <p className="text-zinc-600 mb-8">{product.description}</p>
          <Button variant="primary" size="lg" className="w-full" onClick={() => onAddToCart(product.id)}>Tambahkan ke Keranjang</Button>
        </div>
      </div>
    </div>
  );
}