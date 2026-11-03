import React from 'react';
import { ShoppingBag, Trash2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import QuantityControl from '../components/QuantityControl';
import { products, formatRupiah } from '../data/products';

interface CartProps {
  cart: { [key: number]: number };
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  onClearItem: (id: number) => void;
  onCheckout: () => void;
}

export default function Cart({ cart, onAddToCart, onRemoveFromCart, onClearItem, onCheckout }: CartProps) {
  const cartItems = products.filter((p) => (cart[p.id] || 0) > 0).map((p) => ({ ...p, quantity: cart[p.id] }));
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-zinc-900 mb-2">Keranjang Belanja</h1>
      <p className="text-zinc-500 mb-8">{totalItems} barang di dalam keranjang Anda.</p>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl border border-zinc-100 p-12 text-center shadow-xs">
          <ShoppingBag className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-zinc-800 mb-4">Keranjang belanja masih kosong</h3>
          <Link to="/products"><Button variant="primary" size="lg">Mulai Belanja</Button></Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-bold text-zinc-900">{item.name}</h3>
                    <p className="text-zinc-900 font-bold">{formatRupiah(item.price)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-4">
                  <Button variant="ghost" size="icon" onClick={() => onClearItem(item.id)} className="text-zinc-400 hover:text-red-500"><Trash2 className="w-5 h-5" /></Button>
                  <QuantityControl qty={item.quantity} onIncrement={() => onAddToCart(item.id)} onDecrement={() => onRemoveFromCart(item.id)} />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[380px]">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-lg sticky top-24">
              <h2 className="text-lg font-bold text-zinc-900 mb-4 pb-4 border-b border-zinc-100">Ringkasan Belanja</h2>
              <div className="flex justify-between mb-4"><span className="text-zinc-600">Total Harga</span><span className="font-semibold">{formatRupiah(totalPrice)}</span></div>
              <div className="flex justify-between mb-6 pb-6 border-b border-zinc-100"><span className="text-base font-bold text-zinc-900">Total Tagihan</span><span className="text-xl font-extrabold text-blue-600">{formatRupiah(totalPrice)}</span></div>
              <Button variant="primary" size="lg" className="w-full py-6" onClick={onCheckout}><ShieldCheck className="w-5 h-5 mr-2" /> Bayar Sekarang</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}