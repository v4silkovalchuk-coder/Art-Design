import React from 'react';
import { STUDIO_LOGO_URL, MANAGER_TELEGRAM_URL, MANAGER_TELEGRAM_HANDLE } from '../data/products';
import { Sparkles, Send, ShieldCheck, Zap, Palette, Layers, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onHowToOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onHowToOrderClick }) => {
  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-br from-red-600/20 via-rose-900/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-red-800/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-950/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left / Main Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-800/50 text-red-300 text-xs font-semibold backdrop-blur-sm shadow-[0_0_15px_rgba(220,38,38,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Приймаємо замовлення • Швидке виконання</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Студія оформлення, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-400 via-rose-300 to-red-500 bg-clip-text text-transparent">
                яка втілить твій стиль
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-red-100/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Створимо для тебе унікальний <span className="text-white font-semibold">логотип</span>, аватарку (<span className="text-red-300 font-semibold">мармизку</span>), банер-роздільник, деталізовані арти від скетчу до повноколірного Full Body з атмосферними фонами, стікерпаки та живу анімацію.
            </p>

            {/* Service Tags Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {[
                '🎨 Логотипи & Мармизки',
                '📐 Банери-роздільники',
                '✏️ Скетчі & Лайн-арт',
                '🔥 Арти (по плечі / талію / фул боді)',
                '🌄 Добавка фонів',
                '✨ Анімація & Стікери'
              ].map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs px-3 py-1.5 rounded-lg bg-[#19060b] border border-red-900/40 text-red-200/90 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-3">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                id="hero-catalog-btn"
              >
                <Palette className="w-5 h-5" />
                <span>Переглянути прайс & товари</span>
              </button>

              <a
                href={MANAGER_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1a060d] hover:bg-[#250813] text-red-200 hover:text-white font-semibold text-base border border-red-800/60 hover:border-red-600/80 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-telegram-btn"
              >
                <Send className="w-4 h-4 text-red-400" />
                <span>Зв’язок з менеджером ({MANAGER_TELEGRAM_HANDLE})</span>
              </a>
            </div>

            {/* Ordering quick reminder badge */}
            <div 
              onClick={onHowToOrderClick}
              className="p-4 rounded-xl bg-gradient-to-r from-red-950/80 to-[#1e060d] border border-red-900/50 flex items-start sm:items-center gap-3 cursor-pointer hover:border-red-700 transition-colors group text-left"
              id="hero-order-reminder"
            >
              <div className="p-2 rounded-lg bg-red-900/40 text-red-400 shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-red-200/90 leading-snug">
                <span className="font-bold text-white block sm:inline">Як замовити: </span> 
                Обираєте товар → Оплачуєте за посиланням → У призначенні пишете свій номер або Telegram-юз → Ми пишемо вам!
              </div>
            </div>

          </div>

          {/* Right Visual Card / Studio Emblem Showcase */}
          <div className="w-full max-w-md lg:max-w-md shrink-0 flex flex-col items-center">
            <div className="relative group w-full">
              {/* Outer decorative glow border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-800 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-[#130408] border border-red-700/60 p-7 text-center overflow-hidden shadow-2xl">
                {/* Subtle geometric lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#3d0b16_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                {/* Studio Logo Image */}
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-6 rounded-2xl bg-gradient-to-b from-[#220710] to-[#0a0204] p-3 border border-red-600/40 shadow-[0_0_30px_rgba(220,38,38,0.25)] flex items-center justify-center">
                  <img 
                    src={STUDIO_LOGO_URL} 
                    alt="Art & Design Studio Logo" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
                  />
                  <span className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-red-600 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg border border-red-400/50">
                    Art & Design
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Оригінальний цифровий арт</h3>
                <p className="text-xs text-red-200/70 mb-5">
                  Індивідуальний підхід до кожного замовлення. Скетчі, повноколірні ілюстрації, персонажі та стікери.
                </p>

                {/* Quick features bar */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-red-950/80 text-center">
                  <div className="p-2 rounded-lg bg-red-950/40 border border-red-900/30">
                    <Zap className="w-4 h-4 text-red-400 mx-auto mb-1" />
                    <span className="text-[11px] text-red-200/80 font-medium block">Швидко</span>
                  </div>
                  <div className="p-2 rounded-lg bg-red-950/40 border border-red-900/30">
                    <Sparkles className="w-4 h-4 text-red-400 mx-auto mb-1" />
                    <span className="text-[11px] text-red-200/80 font-medium block">Якісно</span>
                  </div>
                  <div className="p-2 rounded-lg bg-red-950/40 border border-red-900/30">
                    <ShieldCheck className="w-4 h-4 text-red-400 mx-auto mb-1" />
                    <span className="text-[11px] text-red-200/80 font-medium block">IBAN Оплата</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
