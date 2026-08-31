import React from 'react';
import { ProductItem } from '../types';
import { ExternalLink, Check, Sparkles, Send } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isCustomPrice = product.price === null;

  return (
    <div 
      className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#16050a] to-[#0f0307] border border-red-900/40 hover:border-red-600/70 p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] group"
      id={`product-card-${product.id}`}
    >
      {/* Popular tag */}
      {product.isPopular && (
        <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1 border border-red-400/40">
          <Sparkles className="w-3 h-3" />
          <span>Популярне</span>
        </div>
      )}

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-950/80 text-red-300 border border-red-900/60">
            {product.categoryLabel}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors leading-snug mb-2">
          {product.title}
        </h3>

        <p className="text-xs text-red-200/75 leading-relaxed mb-4 min-h-[36px]">
          {product.description}
        </p>

        {/* Feature List */}
        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5 mb-6 pt-2 border-t border-red-950/60">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-red-100/70">
                <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Price and Direct Order Link */}
      <div className="pt-4 border-t border-red-900/30">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-xs text-red-200/60 font-medium">Вартість:</span>
          <span className="text-2xl font-extrabold text-white tracking-tight">
            {product.priceLabel}
          </span>
        </div>

        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-bold shadow-[0_2px_15px_rgba(220,38,38,0.35)] hover:shadow-[0_4px_22px_rgba(239,68,68,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.01]"
          id={`order-btn-${product.id}`}
        >
          {isCustomPrice ? (
            <>
              <Send className="w-4 h-4" />
              <span>Замовити в Telegram</span>
            </>
          ) : (
            <>
              <span>Замовити</span>
              <ExternalLink className="w-4 h-4 text-red-200" />
            </>
          )}
        </a>
      </div>
    </div>
  );
};
