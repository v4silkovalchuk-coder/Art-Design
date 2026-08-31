import React, { useState, useMemo } from 'react';
import { CategoryType } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const priceA = a.price ?? 9999;
        const priceB = b.price ?? 9999;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = a.price ?? 0;
        const priceB = b.price ?? 0;
        return priceB - priceA;
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Повний прайс-лист</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Каталог послуг & товарів
          </h2>
          <p className="mt-3 text-sm sm:text-base text-red-200/70">
            Оберіть потрібну послугу та натисніть «Замовити» для швидкого оформлення.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mb-8 space-y-4">
          
          {/* Top Control Bar: Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#130408] border border-red-950/80 p-3 rounded-2xl">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Пошук (наприклад: скетч, стікери, фон...)"
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#1e070e] border border-red-900/50 rounded-xl text-white placeholder-red-300/40 focus:outline-none focus:border-red-500 transition-colors"
                id="search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-400 hover:text-white"
                >
                  Очистити
                </button>
              )}
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-red-200/60 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Сортування:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#1e070e] border border-red-900/50 rounded-xl text-white text-xs sm:text-sm px-3 py-2 focus:outline-none focus:border-red-500 cursor-pointer"
                id="sort-select"
              >
                <option value="default">За замовчуванням</option>
                <option value="price-asc">Ціна: від меншої</option>
                <option value="price-desc">Ціна: від більшої</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as CategoryType)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                      : 'bg-[#15050a] text-red-200/70 border-red-950 hover:border-red-800/60 hover:text-white'
                  }`}
                  id={`category-tab-${cat.id}`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-red-950 text-red-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#140408] border border-red-950">
            <Filter className="w-12 h-12 text-red-500/40 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Товарів не знайдено</h3>
            <p className="text-xs sm:text-sm text-red-200/60 mb-4">
              Спробуйте змінити пошуковий запит або вибрати іншу категорію.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-semibold cursor-pointer"
            >
              Скинути всі фільтри
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
