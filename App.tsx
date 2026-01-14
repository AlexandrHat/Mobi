
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Smartphone, AlertTriangle, CreditCard, Wallet, Coins, Search, Menu, Check, Globe, Play, ChevronDown, X, Mail, User, Phone, Maximize, Battery, Cpu, LayoutGrid, MapPin, ExternalLink } from 'lucide-react';
import { Product, Language, CheckoutData } from './types';
import { LOCALIZED_DATA } from './constants';

const VideoSection: React.FC<{ title: string; text: string; reverse?: boolean }> = ({ title, text, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16`}>
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h3>
        <p className="text-slate-400 text-lg leading-relaxed">{text}</p>
      </div>
      <div className="flex-1 w-full aspect-video bg-slate-900 rounded-3xl border border-slate-800 relative group overflow-hidden shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/20 group-hover:bg-slate-800/10 transition-colors z-10">
          <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>
        <img 
          src={`https://picsum.photos/seed/${title.slice(0, 5)}/1280/720`} 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity" 
          alt="Video Thumbnail"
        />
      </div>
    </div>
  );
};

const ProductDetailView: React.FC<{ product: Product; onClose: () => void; onBuy: (p: Product) => void; ui: any }> = ({ product, onClose, onBuy, ui }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto custom-scrollbar animate-in fade-in duration-300">
      <nav className="sticky top-0 z-50 glass-effect border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={onClose} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
            <span className="font-bold uppercase tracking-widest text-sm">Назад</span>
          </button>
          <div className="font-bold text-cyan-500 uppercase">{product.name}</div>
          <button onClick={() => onBuy(product)} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-bold transition-all">
            {ui.buyNow}
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-800">
              <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={`https://picsum.photos/seed/${product.id}-2/400/500`} className="rounded-2xl border border-slate-800" alt="Alternate 1" />
              <img src={`https://picsum.photos/seed/${product.id}-3/400/500`} className="rounded-2xl border border-slate-800" alt="Alternate 2" />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-extrabold mb-4">{product.name}</h1>
              <div className="text-3xl font-bold text-cyan-400 mb-6">{product.price} {product.currency}</div>
              <p className="text-xl text-slate-400 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b border-slate-800 pb-4">Технические параметры</h2>
              <div className="grid gap-y-4">
                {Object.entries(product.fullSpecs).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-800/50 pb-4 gap-2">
                    <span className="text-slate-500 font-medium capitalize text-sm">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-slate-200 text-sm sm:text-right max-w-md">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800 space-y-6">
               <h3 className="text-xl font-bold">Особенности</h3>
               <div className="grid sm:grid-cols-2 gap-4">
                 {product.features.map((f, i) => (
                   <div key={i} className="flex items-center gap-3 text-slate-300">
                     <Check className="w-5 h-5 text-cyan-500" />
                     {f}
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex gap-4 pt-8">
               <button onClick={() => onBuy(product)} className="flex-1 py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-cyan-600/30 transition-all">
                  {ui.buyNow}
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseAccordion: React.FC<{ title: string; content: string; source: string }> = ({ title, content, source }) => {
  return (
    <details className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 open:bg-slate-900">
      <summary className="list-none flex justify-between items-center cursor-pointer p-6 font-bold text-lg hover:bg-slate-800/50 transition-colors">
        <span className="group-open:text-cyan-400 transition-colors pr-8">{title}</span>
        <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform text-slate-500 flex-shrink-0" />
      </summary>
      <div className="px-6 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2">
        <p className="text-slate-400 leading-relaxed italic border-l-2 border-cyan-500/50 pl-4">
          "{content}"
        </p>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">— {source}</span>
          <a href={`https://www.google.com/search?q=${encodeURIComponent(source)}`} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </details>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ru');
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [selectedPaymentProduct, setSelectedPaymentProduct] = useState<Product | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [checkoutForm, setCheckoutForm] = useState<CheckoutData>({
    fullName: '', email: '', address: '', city: '', country: '', zip: '', phone: '', comments: ''
  });

  useEffect(() => {
    const userLang = navigator.language.split('-')[0];
    if (userLang === 'en') setLang('en');
    else setLang('ru');
  }, []);

  const data = LOCALIZED_DATA[lang] || LOCALIZED_DATA.en;
  const ui = data.ui;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const openPaymentModal = (product: Product) => {
    setSelectedPaymentProduct(product);
    setIsPaymentModalOpen(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => { 
      setOrderComplete(true); 
      setIsCheckoutOpen(false); 
    }, 600);
  };

  const InputField: React.FC<{ label: string, id: keyof CheckoutData, type?: string, required?: boolean, icon?: React.ReactNode, placeholder?: string }> = ({ label, id, type = 'text', required = false, icon, placeholder }) => (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{label} {required && <span className="text-red-500">*</span>}</label>
      <div className="relative group">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-500 transition-colors">{icon}</div>}
        <input id={id} type={type} required={required} placeholder={placeholder} value={checkoutForm[id]} onChange={(e) => setCheckoutForm(prev => ({ ...prev, [id]: e.target.value }))} className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 ${icon ? 'pl-12' : 'px-4'} pr-4 text-slate-100 outline-none focus:border-cyan-500/50 transition-all`} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <nav className="sticky top-0 z-50 glass-effect border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Shield className="w-8 h-8 text-cyan-500" />
            <span className="text-xl font-bold tracking-tighter uppercase">Bastyon <span className="text-cyan-500">Mobi</span></span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#problem" onClick={(e) => scrollToSection(e, 'problem')} className="hover:text-cyan-500 transition-colors">{ui.navThreat}</a>
            <a href="#solution" onClick={(e) => scrollToSection(e, 'solution')} className="hover:text-cyan-500 transition-colors">{ui.navSolution}</a>
            <a href="#store" onClick={(e) => scrollToSection(e, 'store')} className="hover:text-cyan-500 transition-colors">{ui.navStore}</a>
            <a href="#cases" onClick={(e) => scrollToSection(e, 'cases')} className="hover:text-cyan-500 transition-colors">{ui.navEvidence}</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-4 bg-slate-800/50 p-1 rounded-lg">
              {(['ru', 'en'] as Language[]).map(l => (
                <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${lang === l ? 'bg-cyan-600 text-white' : 'text-slate-500'}`}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              {ui.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">{ui.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#store" onClick={(e) => scrollToSection(e, 'store')} className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-cyan-600/20">{ui.heroCTA}</a>
              <a href="#problem" onClick={(e) => scrollToSection(e, 'problem')} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all">{ui.heroSecondary}</a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-24 bg-slate-900/50 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-bold border border-red-500/20 uppercase tracking-widest">
                  <AlertTriangle className="w-4 h-4" /> {ui.navThreat}
                </div>
                <h2 className="text-4xl font-bold">Большинство смартфонов созданы для капитализма слежки.</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Ваши данные — это новая нефть. Корпорации собирают каждый ваш шаг, каждое слово и каждую транзакцию, чтобы продать этот цифровой портрет рекламным гигантам.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                    <div className="text-4xl font-bold text-red-500 mb-2">88%</div>
                    <p className="text-slate-500 text-sm">Приложений для здоровья передают личные данные третьим лицам.</p>
                  </div>
                  <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                    <div className="text-4xl font-bold text-red-500 mb-2">~120</div>
                    <p className="text-slate-500 text-sm">Трекеров обнаруживается в среднем смартфоне при ежедневном использовании.</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center">
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-cyan-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img src="https://picsum.photos/seed/surv/600/800" className="relative rounded-[2.5rem] object-cover w-full max-w-md border border-slate-700 shadow-2xl" alt="Surveillance" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Sections */}
        <section id="solution" className="py-24 border-y border-slate-800/50 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <VideoSection 
              title="Почему Bastyon Mobi?" 
              text="Мы не просто меняем интерфейс. Мы вырезаем код Google на уровне операционной системы. Никаких GMS, никакой слежки за геолокацией в фоне, никакого рекламного ID." 
            />
            <VideoSection 
              title="В чем отличие от iPhone?" 
              text="Apple контролирует ваше устройство. Мы возвращаем контроль вам. На Bastyon Mobi вы решаете, какие данные передавать, а какие — нет." 
              reverse 
            />
          </div>
        </section>

        {/* Store Section */}
        <section id="store" className="py-24 bg-slate-950 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">{ui.storeTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.products.map(product => (
                <div key={product.id} className="bg-slate-800 border border-slate-700 rounded-[2.5rem] overflow-hidden flex flex-col group">
                  <div className="relative aspect-[4/5] overflow-hidden cursor-pointer" onClick={() => setSelectedProductForDetail(product)}>
                    <img src={product.image} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt={product.name} />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                       <span className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                         <Maximize className="w-4 h-4" /> {ui.details}
                       </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-3 bg-slate-900/50 rounded-xl flex items-center gap-3">
                         <Smartphone className="w-5 h-5 text-cyan-500" />
                         <span className="text-[10px] text-slate-300 font-bold uppercase">{product.shortSpecs.display}</span>
                      </div>
                      <div className="p-3 bg-slate-900/50 rounded-xl flex items-center gap-3">
                         <Cpu className="w-5 h-5 text-cyan-500" />
                         <span className="text-[10px] text-slate-300 font-bold uppercase">{product.shortSpecs.ram}/{product.shortSpecs.storage}</span>
                      </div>
                      <div className="p-3 bg-slate-900/50 rounded-xl flex items-center gap-3 col-span-2">
                         <Battery className="w-5 h-5 text-cyan-500" />
                         <span className="text-[10px] text-slate-300 font-bold uppercase">{product.shortSpecs.battery}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-auto">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl font-bold text-cyan-400">{product.price} {product.currency}</span>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => openPaymentModal(product)} className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/20 transition-all">{ui.buyNow}</button>
                      </div>
                      <button onClick={() => setSelectedProductForDetail(product)} className="text-xs text-slate-500 hover:text-cyan-500 font-bold uppercase tracking-widest pt-2 flex items-center justify-center gap-1">
                        {ui.details} <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence Section - Accordion */}
        <section id="cases" className="py-24 bg-slate-900/50 scroll-mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
               <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
                 <Search className="w-8 h-8 text-cyan-500" /> {ui.evidenceTitle}
               </h2>
               <p className="text-slate-400">Реальные примеры того, как ваши данные используются против вас.</p>
            </div>
            <div className="space-y-4">
              {data.cases.map((c, i) => (
                <CaseAccordion key={i} title={c.title} content={c.content} source={c.source} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">{ui.faqTitle}</h2>
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 open:border-cyan-500/50 transition-all">
                  <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-lg">
                    {faq.question}
                    <Menu className="w-5 h-5 group-open:rotate-90 transition-transform text-slate-500" />
                  </summary>
                  <p className="mt-4 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-500" />
            <span className="text-lg font-bold tracking-tighter">BASTYON <span className="text-cyan-500">MOBI</span></span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-bold uppercase tracking-widest">
            <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-white transition-colors">Вверх</a>
            <a href="#store" onClick={(e) => scrollToSection(e, 'store')} className="hover:text-white transition-colors">Магазин</a>
          </div>
          <p className="text-slate-500 text-sm max-w-sm text-center md:text-right">{ui.footerRights}</p>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProductForDetail && (
        <ProductDetailView 
          product={selectedProductForDetail} 
          onClose={() => setSelectedProductForDetail(null)} 
          onBuy={(p) => { setSelectedProductForDetail(null); openPaymentModal(p); }}
          ui={ui}
        />
      )}

      {/* Payment Selection Modal */}
      {isPaymentModalOpen && selectedPaymentProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsPaymentModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">{ui.paymentTitle}</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="p-2 hover:bg-slate-700 rounded-full transition-colors"><X className="w-6 h-6" /></button>
            </div>
            <div className="grid gap-4">
               {[
                 { id: 'stripe', name: ui.paymentStripe, icon: <CreditCard className="text-blue-500" /> },
                 { id: 'crypto', name: ui.paymentCrypto, icon: <Coins className="text-orange-500" /> },
                 { id: 'rub', name: ui.paymentRUB, icon: <Wallet className="text-emerald-500" /> }
               ].map(method => (
                 <button key={method.id} onClick={() => { setIsPaymentModalOpen(false); setIsCheckoutOpen(true); }} className="flex items-center gap-4 p-5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl group transition-all text-left">
                    <div className="p-3 bg-slate-950 rounded-xl group-hover:scale-110 transition-transform">{method.icon}</div>
                    <div className="font-bold text-slate-100">{method.name}</div>
                 </button>
               ))}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && selectedPaymentProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" onClick={() => setIsCheckoutOpen(false)} />
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-800/20">
              <h2 className="text-2xl font-bold flex items-center gap-3"><LayoutGrid className="w-6 h-6 text-cyan-500" />{ui.checkoutTitle}</h2>
              <button onClick={() => setIsCheckoutOpen(false)} className="p-2 hover:bg-slate-700 rounded-full"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              <form onSubmit={handleCheckoutSubmit} className="flex-grow overflow-y-auto p-8 space-y-6 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label={ui.fullNameLabel} id="fullName" required icon={<User className="w-5" />} placeholder="Имя Фамилия" />
                  <InputField label={ui.emailLabel} id="email" type="email" required icon={<Mail className="w-5" />} placeholder="email@example.com" />
                  <InputField label={ui.phoneLabel} id="phone" type="tel" required icon={<Phone className="w-5" />} placeholder="+7 ..." />
                  <InputField label={ui.countryLabel} id="country" required icon={<Globe className="w-5" />} placeholder="Россия" />
                </div>
                <InputField label={ui.addressLabel} id="address" required icon={<MapPin className="w-5" />} placeholder="Адрес доставки" />
                <button type="submit" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold text-xl shadow-xl shadow-cyan-600/20 flex items-center justify-center gap-3 transition-all">
                  <Check className="w-6 h-6" /> {ui.placeOrder}
                </button>
              </form>
              <div className="w-full md:w-80 bg-slate-950/50 p-8 border-l border-slate-800 hidden md:block">
                 <h3 className="text-lg font-bold mb-6">Ваш заказ</h3>
                 <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-slate-800">
                   <img src={selectedPaymentProduct.image} className="w-full h-full object-cover" alt={selectedPaymentProduct.name} />
                 </div>
                 <div className="font-bold text-slate-100">{selectedPaymentProduct.name}</div>
                 <div className="text-cyan-400 font-bold text-2xl mt-2">{selectedPaymentProduct.price} {selectedPaymentProduct.currency}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {orderComplete && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={() => setOrderComplete(false)} />
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse"><Check className="w-12 h-12 text-cyan-400" /></div>
            <h2 className="text-3xl font-bold mb-4">{ui.orderSuccess}</h2>
            <p className="text-slate-400 leading-relaxed mb-10">{ui.orderSuccessText}</p>
            <button onClick={() => setOrderComplete(false)} className="px-12 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all">OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
