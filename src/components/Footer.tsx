import React from 'react';
import { STUDIO_LOGO_URL, MANAGER_TELEGRAM_URL, MANAGER_TELEGRAM_HANDLE } from '../data/products';
import { Send, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#090204] border-t border-red-950/80 text-red-200/70 text-xs sm:text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Studio info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-900/60 to-black p-1 border border-red-800/40 flex items-center justify-center overflow-hidden">
                <img 
                  src={STUDIO_LOGO_URL} 
                  alt="Art & Design Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                Art & Design Studio
              </span>
            </div>
            <p className="text-xs text-red-200/60 max-w-md leading-relaxed">
              Студія авторського оформлення та графічного арту. Створюємо логотипи, аватарки (мармизки), роздільники, кольорові та скетч арти від плечей до повного зросту, фони, стікерпаки та якісну анімацію.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-red-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Безпечні прямі платежі за банківськими реквізитами IBAN</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Навігація
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('hero')}
                  className="hover:text-red-300 transition-colors cursor-pointer"
                >
                  Головна
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-red-300 transition-colors cursor-pointer"
                >
                  Каталог послуг
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('how-to-order')}
                  className="hover:text-red-300 transition-colors cursor-pointer"
                >
                  Як замовляти
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('faq')}
                  className="hover:text-red-300 transition-colors cursor-pointer"
                >
                  Часті запитання
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Контакти & Зв’язок
            </h4>
            <p className="text-xs text-red-200/60 leading-relaxed">
              Питання, приклади робіт та обговорення індивідуальних замовлень:
            </p>
            <a
              href={MANAGER_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-950/80 hover:bg-red-900/80 text-red-200 hover:text-white border border-red-800/50 text-xs font-medium transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-red-400" />
              <span>Telegram: {MANAGER_TELEGRAM_HANDLE}</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-red-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-red-300/40">
          <div>
            © {new Date().getFullYear()} Art & Design Studio. Всі права захищено.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Створено з душею для творчих людей</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
