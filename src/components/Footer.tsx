import React from 'react';
import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#0F4C3A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/WhatsApp Image 2025-06-21 at 9.36.32 AM (1) copy.jpeg" 
                alt="BarberZap Logo" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">BarberZap</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A revolução da IA chegou às barbearias. Automatize seus agendamentos 
              e foque no que realmente importa: seus clientes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/barberzap.ia?igsh=eWN4OW1pcmpuaWN6&utm_source=qr" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#como-funciona" className="hover:text-[#00D563] transition-colors">Como funciona</a></li>
              <li><a href="#beneficios" className="hover:text-[#00D563] transition-colors">Benefícios</a></li>
              <li><a href="#precos" className="hover:text-[#00D563] transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-[#00D563] transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contatobarberzap@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(55) 47 99677-2077</span>
              </li>
              <li><a href="https://wa.me/5547996772077?text=Olá! Preciso de suporte com o BarberZap" className="hover:text-[#00D563] transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-[#00D563] transition-colors">Central de ajuda</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BarberZap. Todos os direitos reservados. Ferramenta desenvolvida por Botnix.io
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#00D563] text-sm transition-colors">
                Termos de uso
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D563] text-sm transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D563] text-sm transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;