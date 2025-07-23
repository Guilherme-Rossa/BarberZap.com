import React from 'react';
import { Clock, TrendingUp, Users, Shield, Zap, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Atendimento 24/7",
      description: "Seus clientes podem agendar a qualquer hora, mesmo quando você está dormindo"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Aumento de 40% na receita",
      description: "Mais agendamentos confirmados significa mais dinheiro no seu bolso"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Zero no-shows",
      description: "Lembretes automáticos reduzem drasticamente as faltas dos clientes"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Dados seguros",
      description: "Todas as informações são criptografadas e protegidas"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Setup em 5 minutos",
      description: "Conecte seu WhatsApp e comece a usar imediatamente"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Clientes mais satisfeitos",
      description: "Resposta rápida e horários organizados deixam todos felizes"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#00D563]/10 to-[#25D366]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-[#25D366]/10 to-[#00D563]/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios que transformam seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o BarberZap pode revolucionar sua barbearia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-[#00D563]/20 transition-all duration-500 hover:border-[#00D563]/20 h-full hover:-translate-y-2 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D563]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                <div className="text-[#00D563] mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#00D563] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#00D563] via-[#25D366] to-[#00D563] rounded-3xl p-8 text-center text-white shadow-2xl shadow-[#00D563]/25" data-aos="zoom-in" data-aos-delay="600">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para transformar sua barbearia?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se a mais de 1.000 barbeiros que já automatizaram seus agendamentos
          </p>
          <a href="https://wa.me/5547996772077?text=Olá! Quero começar a usar o BarberZap agora" className="bg-white text-[#00D563] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block group relative overflow-hidden">
            <span className="relative z-10 group-hover:animate-pulse">
            Começar Agora - Grátis
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D563]/10 to-[#25D366]/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;