import React from 'react';
import { Check, Zap, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const basicFeatures = [
    "Agendamentos ilimitados",
    "Integração WhatsApp",
    "IA básica para agendamentos",
    "Suporte por email"
  ];

  const proFeatures = [
    "Agendamentos ilimitados",
    "Integração WhatsApp",
    "IA avançada e personalizada",
    "Lembretes automáticos",
    "Analytics detalhados",
    "Múltiplos barbeiros",
    "Transferência para atendente",
    "Suporte prioritário",
    "Integração com agenda Google"
  ];

  const enterpriseFeatures = [
    "Tudo do plano Pro incluído",
    "Aplicativo móvel exclusivo",
    "Gestão financeira completa",
    "Relatórios avançados de receita",
    "Controle de estoque",
    "Gestão de funcionários",
    "Dashboard executivo",
    "API personalizada",
    "Suporte dedicado 24/7",
    "Treinamento personalizado"
  ];

  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-[#00D563]/10 to-[#25D366]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-purple-500/10 to-[#00D563]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Esses são nossos planos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para automatizar sua barbearia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:shadow-gray-500/20 hover:scale-105 hover:border-gray-300 transition-all duration-300 flex flex-col h-fit backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center mb-6">
              <div className="inline-flex p-3 rounded-full mb-4 bg-gray-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">BarberZap Básico</h3>
              <p className="text-gray-600 mb-4">Essencial para sua barbearia</p>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-gray-900">R$ 49,90</span>
                <span className="text-gray-600 ml-1">/mês</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/5547996772077?text=Olá! Quero contratar o plano BarberZap Básico" className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 bg-gray-600 text-white hover:bg-gray-700 text-lg text-center block">
              Começar Básico
            </a>
          </div>

          {/* Pro Plan */}
          <div className="relative group hover:scale-110 transition-all duration-500 transform scale-105 animate-float" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00D563] to-[#25D366] text-white px-6 py-2 rounded-full text-sm font-semibold z-20">
              Mais Popular
            </div>
            
            <div className="bg-gradient-to-br from-white via-green-50/50 to-white rounded-2xl p-8 shadow-2xl border-2 border-[#00D563] shadow-[#00D563]/30 hover:shadow-2xl hover:shadow-[#00D563]/40 transition-all duration-500 relative overflow-hidden hover:-translate-y-4 backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D563]/10 to-[#25D366]/10 rounded-2xl group-hover:animate-pulse"></div>
              <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-full mb-4 bg-[#00D563] text-white group-hover:animate-spin">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">BarberZap Pro</h3>
                <p className="text-gray-600 mb-4">Tudo incluído para sua barbearia</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">R$ 59,90</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-[#00D563] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/5547996772077?text=Olá! Quero contratar o plano BarberZap Pro" className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-[#00D563] to-[#25D366] text-white hover:shadow-xl hover:shadow-[#00D563]/40 transform hover:scale-110 text-lg text-center block animate-pulse">
                Começar Pro
              </a>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:shadow-purple-600/20 hover:scale-105 hover:border-purple-300 transition-all duration-300 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-full mb-4 bg-purple-600 text-white">
                  <Crown className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">BarberZap Enterprise</h3>
                <p className="text-gray-600 mb-4">Solução completa para sua barbearia</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-gray-900">Sob consulta</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Preço personalizado</p>
              </div>

              <p className="text-gray-600 mb-4">Solução empresarial completa</p>
              <ul className="space-y-3 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/5547996772077?text=Olá! Gostaria de solicitar um orçamento para o plano Enterprise" className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg hover:shadow-purple-600/25 transform hover:scale-105 text-lg text-center block">
                Solicitar Orçamento
              </a>
          </div>
        </div>

        <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="400">
          <p className="text-gray-600 mb-4">
            💡 Todos os planos incluem <strong>7 dias de graça</strong> para testar
          </p>
          <p className="text-sm text-gray-500">
            Sem compromisso • Cancele quando quiser • Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;