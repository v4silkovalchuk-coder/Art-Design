import React, { useState } from 'react';
import { FAQ_ITEMS, MANAGER_TELEGRAM_URL, MANAGER_TELEGRAM_HANDLE } from '../data/products';
import { ChevronDown, HelpCircle, MessageCircle, Send, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-[#0d0306]/70 border-t border-red-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Відповіді на запитання</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Часті запитання (FAQ)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-red-200/70">
            Усе, що потрібно знати про процес створення арту, оплату та зв'язок
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#140408] border border-red-900/40 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-red-300 font-bold text-base transition-colors cursor-pointer"
                  id={`faq-btn-${idx}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-red-300' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-red-200/80 leading-relaxed border-t border-red-950/60 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Special Notice Banner: Examples & Direct Manager Contact */}
        <div className="rounded-2xl bg-gradient-to-r from-[#2a0812] via-[#350b18] to-[#1e060d] border border-red-600/60 p-6 sm:p-8 shadow-[0_0_35px_rgba(220,38,38,0.2)] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-300">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Потрібні приклади робіт або індивідуальне замовлення?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Зв’яжіться з нашим менеджером
            </h3>
            <p className="text-xs sm:text-sm text-red-200/80 max-w-lg">
              Приклади всіх товарів, портфоліо робіт, узгодження складних анімацій або додаткові питання — пишіть менеджеру в Telegram.
            </p>
          </div>

          <a
            href={MANAGER_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] flex items-center gap-2 transition-all cursor-pointer"
            id="faq-manager-cta"
          >
            <Send className="w-4 h-4" />
            <span>Написати {MANAGER_TELEGRAM_HANDLE}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
