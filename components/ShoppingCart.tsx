import React from 'react';
import { XIcon, PlusIcon, MinusIcon, TrashIcon } from './icons/Icons';

export type CartItem = {
  id: string;
  title: string;
  price: string;
  priceNumeric: number;
  quantity: number;
};

type ShoppingCartProps = {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const totalPrice = items.reduce((sum, item) => sum + item.priceNumeric * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Cart Panel */}
      <div className="fixed top-0 right-0 h-full w-96 bg-[#0f1334] border-l border-cyan-400/30 shadow-2xl z-50 transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
          <h2 className="text-xl font-bold text-white">Carrito</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3H3m4 10v6a1 1 0 001 1h10a1 1 0 001-1v-6"
                  />
                </svg>
              </div>
              <p className="text-slate-400">Tu carrito está vacío</p>
              <p className="text-sm text-slate-500 mt-2">Añade servicios para comenzar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-400 hover:text-red-400 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="w-8 h-8 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center"
                      >
                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center"
                      >
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-cyan-400 font-semibold">{item.price}</p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-slate-400">
                          Total: {item.priceNumeric * item.quantity}€
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-slate-700/50 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-white">Total:</span>
              <span className="text-2xl font-bold text-cyan-400">{totalPrice}€</span>
            </div>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transform transition-all duration-300">
              Proceder al Checkout
            </button>

            <p className="text-xs text-slate-500 text-center">
              * Los precios son orientativos. Se confirmará el precio final por email.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
