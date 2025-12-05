
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,215,0,.1) 35px, rgba(255,215,0,.1) 70px)`
        }}></div>
      </div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="text-right space-y-6">
            <div className="inline-block">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-l from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                أسرة محمد علي
              </h3>
              <div className="h-1 w-24 bg-gradient-to-l from-amber-400 to-transparent mr-auto"></div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              استكشاف التاريخ الغني وإرث الأسرة التي شكلت مصر الحديثة من 1805 إلى 1953. تعرف على حكام مصر وإنجازاتهم العظيمة.
            </p>
            <div className="flex gap-3 justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50">
                <Facebook className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50">
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50">
                <Instagram className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50">
                <Youtube className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-6 text-amber-400 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-amber-400"></div>
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-center">
              {['الرئيسية', 'شجرة العائلة', 'الجدول الزمني', 'المعرض', 'الإنجازات', 'تواصل معنا'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Important Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-6 text-amber-400 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-amber-400"></div>
              معلومات مهمة
            </h4>
            <ul className="space-y-3 text-center">
              {['من نحن', 'سياسة الخصوصية', 'الشروط والأحكام', 'الأسئلة الشائعة', 'الشركاء', 'الدعم'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-xl font-bold mb-6 text-amber-400 flex items-center justify-end gap-2">
              <div className="h-px w-8 bg-amber-400"></div>
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <div className="flex items-start justify-end gap-3 group">
                <div className="text-right">
                  <p className="text-slate-300 text-sm group-hover:text-amber-400 transition-colors duration-300">
                    info@mohamedali-dynasty.com
                  </p>
                  <p className="text-slate-500 text-xs mt-1">للاستفسارات العامة</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-400 group-hover:text-slate-900" />
                </div>
              </div>
              
              <div className="flex items-start justify-end gap-3 group">
                <div className="text-right">
                  <p className="text-slate-300 text-sm group-hover:text-amber-400 transition-colors duration-300">
                    +20 123 456 789
                  </p>
                  <p className="text-slate-500 text-xs mt-1">الدعم الفني</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-400 group-hover:text-slate-900" />
                </div>
              </div>
              
              <div className="flex items-start justify-end gap-3 group">
                <div className="text-right">
                  <p className="text-slate-300 text-sm group-hover:text-amber-400 transition-colors duration-300">
                    القاهرة، مصر
                  </p>
                  <p className="text-slate-500 text-xs mt-1">المقر الرئيسي</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400 group-hover:text-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm text-center md:text-right order-2 md:order-1">
            <p>جميع الحقوق محفوظة © {currentYear} أسرة محمد علي</p>
            <p className="text-xs mt-1 text-slate-500">تم التصميم والتطوير بكل فخر واعتزاز</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 order-1 md:order-2"
            aria-label="العودة للأعلى"
          >
            <ChevronUp className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>
      
      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent blur-sm"></div>
    </footer>
  );
};

export default Footer;