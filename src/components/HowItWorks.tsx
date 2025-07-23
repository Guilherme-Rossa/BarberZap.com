import React from 'react';
import { MessageSquare, Bot, Calendar, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Cliente envia mensagem",
      description: "Seu cliente manda uma mensagem no WhatsApp da barbearia"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "IA responde na hora",
      description: "Nossa IA entende a solicitação e responde automaticamente"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Agenda é verificada",
      description: "Sistema verifica horários disponíveis em tempo real"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Agendamento confirmado",
      description: "Cliente recebe confirmação e lembretes automáticos"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como o BarberZap funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em 4 passos simples, seus agendamentos ficam 100% automatizados
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D563] to-[#25D366] transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D563]/5 to-[#25D366]/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#00D563] transition-all duration-500 hover:shadow-xl hover:shadow-[#00D563]/20 relative z-10 hover:-translate-y-3 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 group-hover:rotate-360 transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00D563] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:animate-bounce">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16" data-aos="zoom-in" data-aos-delay="600">
          <a href="https://wa.me/5547996772077?text=Olá! Quero automatizar minha barbearia com o BarberZap" className="bg-gradient-to-r from-[#00D563] to-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-[#00D563]/25 transform hover:scale-105 transition-all duration-300 inline-block group relative overflow-hidden">
            <span className="relative z-10 group-hover:animate-pulse">
            Quero Automatizar Minha Barbearia
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#00D563] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;