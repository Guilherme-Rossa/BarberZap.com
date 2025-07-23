import React from 'react';
import { Bot, Calendar, MessageSquare, MessageCircle, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0F4C3A] via-[#1A5D4A] to-[#0F4C3A] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/5 to-[#FFD700]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <div className="inline-flex items-center px-4 py-2 bg-[#00D563]/10 border border-[#00D563]/20 rounded-full mb-6">
              <Bot className="h-4 w-4 text-[#00D563] mr-2" />
              <span className="text-sm text-[#00D563] font-medium">IA Avançada para Barbearias</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Automatize sua barbearia
              <span className="block bg-gradient-to-r from-[#00D563] to-[#25D366] bg-clip-text text-transparent">
                com IA
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Agendamentos automáticos 24/7 pelo WhatsApp. Reduza no-shows, aumente sua eficiência e revolucione sua barbearia com inteligência artificial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://wa.me/5547996772077?text=Olá! Gostaria de testar o BarberZap grátis por 7 dias" className="bg-gradient-to-r from-[#00D563] to-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-[#00D563]/25 transform hover:scale-105 transition-all duration-300 text-center animate-pulse hover:animate-none group relative overflow-hidden">
                <span className="relative z-10">
                Teste Grátis por 7 dias
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#00D563] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="https://wa.me/5547996772077?text=Olá! Gostaria de ver uma demonstração do BarberZap" className="border-2 border-[#00D563] text-[#00D563] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00D563] hover:text-white transition-all duration-300 text-center group relative overflow-hidden">
                <span className="relative z-10 group-hover:animate-bounce">
                Ver Demonstração
                </span>
                <div className="absolute inset-0 bg-[#00D563] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-[#00D563]" />
                <span>Agendamento 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-[#00D563]" />
                <span>WhatsApp integrado</span>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D563]/20 to-[#25D366]/20 rounded-3xl blur-xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl p-4 border border-gray-700/50 backdrop-blur-sm max-w-sm mx-auto">
              {/* Header do Chat */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Barbearia do João</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">online</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 text-gray-400">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-3 h-80 overflow-y-auto">
                {/* Mensagem do Cliente */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-[#005C4B] text-white p-2 rounded-lg rounded-br-sm">
                    <p className="text-sm">Oi, preciso agendar um horário 😊</p>
                    <span className="text-xs opacity-75 block mt-1 text-right">14:32 ✓✓</span>
                  </div>
                </div>

                {/* Resposta da IA */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="max-w-xs bg-gray-700 text-white p-2 rounded-lg rounded-bl-sm">
                    <p className="text-sm">Olá! Que bom te ver aqui! 😊</p>
                    <p className="text-sm mt-1">Qual serviço você gostaria de agendar?</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="bg-[#00D563] text-xs px-2 py-1 rounded-full">✂️ Corte</span>
                      <span className="bg-[#00D563] text-xs px-2 py-1 rounded-full">🧔 Barba</span>
                      <span className="bg-[#00D563] text-xs px-2 py-1 rounded-full">✂️🧔 Completo</span>
                    </div>
                    <span className="text-xs opacity-75 block mt-1">14:32</span>
                  </div>
                </div>

                {/* Mensagem do Cliente */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-[#005C4B] text-white p-2 rounded-lg rounded-br-sm">
                    <p className="text-sm">Quero corte + barba</p>
                    <span className="text-xs opacity-75 block mt-1 text-right">14:33 ✓✓</span>
                  </div>
                </div>

                {/* Resposta da IA com horários */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="max-w-xs">
                    <div className="bg-gray-700 text-white p-2 rounded-lg rounded-bl-sm mb-2">
                      <p className="text-sm">Perfeito! Corte + Barba = R$ 35,00</p>
                      <p className="text-sm mt-1">Qual horário prefere? 📅</p>
                      <span className="text-xs opacity-75 block mt-1">14:33</span>
                    </div>
                    <div className="space-y-1">
                      <button className="block w-full bg-[#00D563] hover:bg-[#00C555] text-white px-2 py-1 rounded text-xs transition-colors">
                        📅 Hoje às 16:00
                      </button>
                      <button className="block w-full bg-[#00D563] hover:bg-[#00C555] text-white px-2 py-1 rounded text-xs transition-colors">
                        📅 Amanhã às 09:00
                      </button>
                      <button className="block w-full bg-[#00D563] hover:bg-[#00C555] text-white px-2 py-1 rounded text-xs transition-colors">
                        📅 Amanhã às 14:00
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cliente escolhe horário */}
                <div className="flex justify-end">
                  <div className="max-w-xs bg-[#005C4B] text-white p-2 rounded-lg rounded-br-sm">
                    <p className="text-sm">Amanhã às 14:00 tá perfeito!</p>
                    <span className="text-xs opacity-75 block mt-1 text-right">14:34 ✓✓</span>
                  </div>
                </div>

                {/* Confirmação da IA */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="max-w-xs bg-gray-700 text-white p-2 rounded-lg rounded-bl-sm">
                    <p className="text-sm">✅ <strong>Agendamento Confirmado!</strong></p>
                    <div className="bg-gray-800 p-2 rounded mt-2 text-xs">
                      <p>📅 <strong>Data:</strong> Amanhã (22/01)</p>
                      <p>⏰ <strong>Horário:</strong> 14:00</p>
                      <p>✂️ <strong>Serviço:</strong> Corte + Barba</p>
                      <p>💰 <strong>Valor:</strong> R$ 35,00</p>
                      <p>📍 <strong>Local:</strong> Barbearia do João</p>
                    </div>
                    <p className="text-xs mt-2 opacity-90">Vou te enviar um lembrete 1h antes! 😊</p>
                    <span className="text-xs opacity-75 block mt-1">14:34</span>
                  </div>
                </div>

                {/* Indicador de digitação */}
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center mt-1">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-gray-700 p-2 rounded-lg rounded-bl-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Barra de digitação */}
              <div className="mt-3 pt-3 border-t border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-800 rounded-full px-3 py-2">
                    <span className="text-gray-500 text-sm">Digite uma mensagem...</span>
                  </div>
                  <div className="w-8 h-8 bg-[#00D563] rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
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

export default Hero;