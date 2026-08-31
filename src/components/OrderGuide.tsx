import React, { useState } from 'react';
import { ORDER_STEPS, MANAGER_TELEGRAM_URL, MANAGER_TELEGRAM_HANDLE } from '../data/products';
import { MousePointerClick, CreditCard, MessageSquare, Send, Check, Copy, HelpCircle, ShieldCheck } from 'lucide-react';

const STEP_ICONS = [MousePointerClick, CreditCard, MessageSquare, Send];

export const OrderGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const samplePaymentFormat = 'Оплата за арт/лого. Telegram: @my_username, тел: +380991234567';

  const handleCopy = () => {
    navigator.clipboard.writeText(samplePaymentFormat);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="how-to-order" className="py-16 md:py-24 bg-[#0e0307]/80 border-y border-red-950/60 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-900/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Проста та прозора інструкція</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Як зробити замовлення
          </h2>
          <p className="mt-3 text-sm sm:text-base text-red-200/75">
            Усього 4 простих кроки від ідеї до готового арту чи оформлення
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ORDER_STEPS.map((stepItem, idx) => {
            const Icon = STEP_ICONS[idx] || MousePointerClick;
            const isHighlight = stepItem.step === 3;

            return (
              <div
                key={stepItem.step}
                className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#240810] to-[#16050b] border-2 border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.25)] scale-[1.02]'
                    : 'bg-[#140408] border border-red-900/40 hover:border-red-800/60'
                }`}
                id={`order-step-${stepItem.step}`}
              >
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base shadow-sm ${
                    isHighlight
                      ? 'bg-red-600 text-white'
                      : 'bg-red-950/90 text-red-300 border border-red-800/50'
                  }`}>
                    0{stepItem.step}
                  </span>
                  <div className="p-2 rounded-lg bg-red-950/60 text-red-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-red-200/75 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>

                {isHighlight && (
                  <div className="mt-4 pt-3 border-t border-red-800/60">
                    <span className="inline-block text-[11px] font-bold text-rose-300 bg-red-900/50 px-2 py-0.5 rounded">
                      ⚠️ Ключовий момент!
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlighted Notice & Copy Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#20060e] via-[#2a0914] to-[#1a050b] border border-red-700/60 p-6 sm:p-8 shadow-[0_4px_30px_rgba(220,38,38,0.15)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Призначення платежу</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Не забудьте вказати контактні дані
              </h3>
              <p className="text-xs sm:text-sm text-red-200/80 max-w-xl">
                У формі вашого банку напишіть свій Telegram-юзернейм (наприклад <span className="text-white font-semibold">@nick_name</span>) або контактний телефон. Ми одразу побачимо оплату та напишемо вам!
              </p>
            </div>

            {/* Quick Copy Snippet */}
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-2">
              <button
                onClick={handleCopy}
                className="w-full md:w-auto px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="copy-payment-note-btn"
              >
                {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Скопійовано в буфер!' : 'Скопіювати зразок опису'}</span>
              </button>

              <a
                href={MANAGER_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-red-300 hover:text-white underline underline-offset-4 flex items-center gap-1 transition-colors"
              >
                <span>Або напишіть менеджеру напряму</span>
                <Send className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
