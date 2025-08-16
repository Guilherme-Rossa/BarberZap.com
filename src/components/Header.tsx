import React from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          <div className="flex items-center space-x-2">
            <img 
              src="/LOGO BARBER ZAP 1.PNG"
              alt="BarberZap Logo"
              className={`rounded-lg object-cover transition-all duration-300
                ${isScrolled 
                  ? 'w-24 sm:w-24 md:w-28 lg:w-32 h-auto' 
                  : 'w-24 sm:w-28 md:w-32 lg:w-36 h-auto'
                } min-w-[90px]`}
            />
          </div>


          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-gray-700 hover:text-[#00D563] transition-colors">Como Funciona</a>
            <a href="#beneficios" className="text-gray-700 hover:text-[#00D563] transition-colors">Benefícios</a>
            <a href="#precos" className="text-gray-700 hover:text-[#00D563] transition-colors">Preços</a>
            <a href="#contato" className="text-gray-700 hover:text-[#00D563] transition-colors">Contato</a>
            <a href="https://wa.me/5547996772077?text=Olá! Gostaria de testar o BarberZap grátis" className={`bg-gradient-to-r from-[#00D563] to-[#25D366] text-white rounded-full hover:shadow-lg hover:shadow-[#00D563]/25 transition-all duration-300 transform hover:scale-105 ${
              isScrolled ? 'px-4 py-1.5 text-sm' : 'px-6 py-2'
            }`}>
              <span className="flex items-center space-x-1">
                <MessageCircle className={`${isScrolled ? 'h-3 w-3' : 'h-4 w-4'}`} />
                <span>Teste Grátis</span>
              </span>
            </a>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <a href="https://wa.me/5547996772077?text=Olá! Gostaria de testar o BarberZap grátis" className="bg-gradient-to-r from-[#00D563] to-[#25D366] text-white p-2 rounded-full hover:shadow-lg hover:shadow-[#00D563]/25 transition-all duration-300">
              <MessageCircle className="h-4 w-4" />
            </a>
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#como-funciona" className="block px-3 py-2 text-gray-700 hover:text-[#00D563] transition-colors" onClick={() => setIsMenuOpen(false)}>Como Funciona</a>
              <a href="#beneficios" className="block px-3 py-2 text-gray-700 hover:text-[#00D563] transition-colors" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
              <a href="#precos" className="block px-3 py-2 text-gray-700 hover:text-[#00D563] transition-colors" onClick={() => setIsMenuOpen(false)}>Preços</a>
              <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-[#00D563] transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <a href="https://wa.me/5547996772077?text=Olá! Gostaria de testar o BarberZap grátis" className="w-full mt-2 bg-gradient-to-r from-[#00D563] to-[#25D366] text-white py-2 rounded-full text-center block flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Teste Grátis</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>

    </>
  );
};

export default Header;