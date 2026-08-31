import React from 'react';
import { STUDIO_LOGO_URL, MANAGER_TELEGRAM_URL, MANAGER_TELEGRAM_HANDLE } from '../data/products';
import { Send, Sparkles, MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0407]/90 backdrop-blur-md border-b border-red-950/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNav('hero')}
          className="flex items-center gap-3.5 cursor-pointer group"
          id="header-brand-logo"
        >
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-900/60 to-black p-1 border border-red-800/40 group-hover:border-red-500/80 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.2)] flex items-center justify-center overflow-hidden">
            <img 
              src={STUDIO_LOGO_URL} 
              alt="Art & Design Logo" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-red-400 transition-colors">
                Art & Design
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-red-950/80 text-red-400 border border-red-800/50">
                Studio
              </span>
            </div>
            <p className="text-xs text-red-200/60 font-medium">Цифрове оформлення та арт</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-red-100/75">
          <button 
            onClick={() => handleNav('catalog')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-catalog"
          >
            Каталог послуг
          </button>
          <button 
            onClick={() => handleNav('how-to-order')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-how-to-order"
          >
            Як замовляти
          </button>
          <button 
            onClick={() => handleNav('faq')}
            className="hover:text-white transition-colors cursor-pointer"
            id="nav-faq"
          >
            Питання (FAQ)
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={MANAGER_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-sm font-semibold shadow-[0_4px_20px_rgba(220,38,38,0.35)] hover:shadow-[0_4px_25px_rgba(239,68,68,0.5)] transition-all duration-300 border border-red-500/40 cursor-pointer"
            id="header-telegram-btn"
          >
            <Send className="w-4 h-4" />
            <span>Менеджер ({MANAGER_TELEGRAM_HANDLE})</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={MANAGER_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-red-900/40 text-red-300 border border-red-800/40"
            title="Telegram"
          >
            <Send className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-red-950/60 border border-red-900/40 text-red-200 hover:text-white"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#110408] border-b border-red-900/50 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNav('catalog')}
            className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-red-100/90 hover:bg-red-950/60"
          >
            Каталог послуг
          </button>
          <button
            onClick={() => handleNav('how-to-order')}
            className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-red-100/90 hover:bg-red-950/60"
          >
            Як замовляти
          </button>
          <button
            onClick={() => handleNav('faq')}
            className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-red-100/90 hover:bg-red-950/60"
          >
            Питання (FAQ)
          </button>
          <div className="pt-2 border-t border-red-950">
            <a
              href={MANAGER_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-700 hover:bg-red-600 text-white text-sm font-semibold shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Написати менеджеру в Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
