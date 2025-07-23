import React from 'react';
import { Clock, PhoneOff, Calendar, Frown } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: <PhoneOff className="h-8 w-8" />,
      title: "Ligações perdidas",
      description: "Clientes ligam fora do horário comercial e você perde agendamentos"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "No-shows frequentes",
      description: "Clientes faltam sem avisar e você fica com horários vagos"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Tempo perdido",
      description: "Você gasta muito tempo organizando agenda em vez de cortar cabelo"
    },
    {
      icon: <Frown className="h-8 w-8" />,
      title: "Clientes insatisfeitos",
      description: "Demora para responder e confirmar agendamentos gera frustração"
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Problemas que todo barbeiro conhece
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quantas vezes você já perdeu clientes por não conseguir atender no momento certo?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-6 h-full hover:border-[#00D563]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00D563]/20 backdrop-blur-sm">
                <div className="text-red-400 mb-4 group-hover:text-red-300 transition-colors">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="zoom-in" data-aos-delay="400">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00D563]/10 to-[#25D366]/10 border border-[#00D563]/20 rounded-full">
            <span className="text-[#00D563] font-semibold">
              ✨ O BarberZap resolve todos esses problemas automaticamente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;