import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { products } from './data/products';

function AppContent() {
  const navigate = useNavigate();
  // State keranjang diawali dengan 4 barang 
  const [cart, setCart] = useState<{ [key: number]: number }>({ 1: 2, 2: 2 });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    if (product) showToast(`1 item "${product.name}" ditambahkan`);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      if (currentQty <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: currentQty - 1 };
    });
  };

  const handleClearItem = (id: number) => setCart((prev) => { const updated = { ...prev }; delete updated[id]; return updated; });

  const handleCheckout = () => {
    setCart({});
    showToast("Pembayaran Berhasil! Pesanan sedang diproses.");
    navigate('/'); 
  };

  const totalCartCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 font-sans">
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center space-x-3 font-bold animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-6 h-6 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      <Navbar totalCartCount={totalCartCount} />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={
            <Cart 
              cart={cart} 
              onAddToCart={handleAddToCart} 
              onRemoveFromCart={handleRemoveFromCart} 
              onClearItem={handleClearItem} 
              onCheckout={handleCheckout} 
            />
          } />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}