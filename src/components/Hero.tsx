import React, { useState, useEffect } from 'react';
import { Bot, Calendar, MessageSquare, Clock, User, Scissors, Check } from 'lucide-react';

const Hero = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const barbeiros = [
    { id: 1, name: 'João Silva', specialty: 'Especialista em cortes clássicos' },
    { id: 2, name: 'Pedro Santos', specialty: 'Expert em barbas e bigodes' },
    { id: 3, name: 'Carlos Lima', specialty: 'Cortes modernos e degradês' }
  ];

  const servicos = [
    { id: 1, name: 'Corte', price: 'R$ 25', icon: '✂️' },
    { id: 2, name: 'Barba', price: 'R$ 20', icon: '🧔' },
    { id: 3, name: 'Corte + Barba', price: 'R$ 35', icon: '✂️🧔' },
    { id: 4, name: 'Sobrancelha', price: 'R$ 15', icon: '👁️' },
    { id: 5, name: 'Pigmentação', price: 'R$ 80', icon: '🎨' }
  ];

  const datas = [
    { id: 1, day: 'Sex', date: '09/08', full: '09/08/2025' },
    { id: 2, day: 'Sáb', date: '10/08', full: '10/08/2025' },
    { id: 3, day: 'Seg', date: '12/08', full: '12/08/2025' },
    { id: 4, day: 'Ter', date: '13/08', full: '13/08/2025' },
    { id: 5, day: 'Qua', date: '14/08', full: '14/08/2025' }
  ];

  const horarios = [
    '08:00', '08:45', '09:30', '10:15', '11:00', 
    '13:30', '14:15', '15:00', '15:45', '16:30', '17:15', '18:00', '18:45'
  ];

  // Initialize with first message
  useEffect(() => {
    setCurrentStep(1);
  }, []);

  const handleStartChat = () => {
    setCurrentStep(2);
  };

  const handleBarberSelect = (barber: any) => {
    setSelectedBarber(barber.name);
    setCurrentStep(3);
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(`${service.name} - ${service.price}`);
    setCurrentStep(4);
  };

  const handleDateSelect = (date: any) => {
    setSelectedDate(date.full);
    setCurrentStep(5);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep(6);
  };

  const BotMessage = ({ text }: { text: string }) => (
    <div className="flex items-start space-x-3 mb-4">
      <div className="w-8 h-8 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div className="bg-gray-700 text-white p-3 rounded-lg rounded-bl-sm max-w-sm">
        <p className="text-sm whitespace-pre-line">{text}</p>
        <span className="text-xs opacity-75 block mt-1">agora</span>
      </div>
    </div>
  );

  const UserMessage = ({ text }: { text: string }) => (
    <div className="flex justify-end mb-4">
      <div className="max-w-sm bg-[#005C4B] text-white p-3 rounded-lg rounded-br-sm">
        <p className="text-sm">{text}</p>
        <span className="text-xs opacity-75 block mt-1 text-right">agora ✓✓</span>
      </div>
    </div>
  );

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
          {/* Left side - Text content */}
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

          {/* Right side - Interactive Chat */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D563]/20 to-[#25D366]/20 rounded-3xl blur-xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl p-4 border border-gray-700/50 backdrop-blur-sm max-w-md mx-auto">
              {/* Header do Chat */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00D563] to-[#25D366] rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Veja como seu cliente será atendido</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">online</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto space-y-4 mb-4">
                {/* Step 1: Welcome */}
                {currentStep >= 1 && (
                  <BotMessage text="💬 Olá! Bem-vindo à nossa barbearia! Vamos agendar seu horário em poucos cliques?" />
                )}

                {currentStep === 1 && (
                  <div className="mb-4">
                    <button
                      onClick={handleStartChat}
                      className="w-full bg-[#00D563] hover:bg-[#00C555] text-white p-3 rounded-lg transition-colors text-sm font-semibold"
                    >
                      🚀 Vamos começar!
                    </button>
                  </div>
                )}

                {/* Step 2: User starts */}
                {currentStep >= 2 && (
                  <UserMessage text="🚀 Vamos começar!" />
                )}

                {/* Step 2: Choose barber */}
                {currentStep >= 2 && (
                  <BotMessage text="💬 Escolha seu barbeiro ideal 💇‍♂️&#10;👇 Clique abaixo para ver as opções de barbeiros disponíveis" />
                )}

                {currentStep === 2 && (
                  <div className="space-y-2 mb-4">
                    {barbeiros.map((barber) => (
                      <button
                        key={barber.id}
                        onClick={() => handleBarberSelect(barber)}
                        className="w-full bg-[#00D563] hover:bg-[#00C555] text-white p-3 rounded-lg text-left transition-colors text-sm"
                      >
                        <div className="font-semibold">{barber.name}</div>
                        <div className="text-xs opacity-90">{barber.specialty}</div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 3: User chooses barber */}
                {currentStep >= 3 && selectedBarber && (
                  <UserMessage text={`Escolho o ${selectedBarber}! 👨‍💼`} />
                )}

                {/* Step 3: Choose service */}
                {currentStep >= 3 && (
                  <BotMessage text="💬 Escolha o serviço ✂️&#10;👇 Veja abaixo as opções disponíveis e escolha o serviço ideal para você." />
                )}

                {currentStep === 3 && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {servicos.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service)}
                        className="bg-[#00D563] hover:bg-[#00C555] text-white p-2 rounded-lg transition-colors text-xs"
                      >
                        <div>{service.icon} {service.name}</div>
                        <div className="font-semibold">{service.price}</div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 4: User chooses service */}
                {currentStep >= 4 && selectedService && (
                  <UserMessage text={`Quero ${selectedService}! ✂️`} />
                )}

                {/* Step 4: Choose date */}
                {currentStep >= 4 && (
                  <BotMessage text="💬 Para qual dia você quer agendar?&#10;📅 Toque abaixo e selecione o dia da semana que você prefere 💈" />
                )}

                {currentStep === 4 && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {datas.map((date) => (
                      <button
                        key={date.id}
                        onClick={() => handleDateSelect(date)}
                        className="bg-[#00D563] hover:bg-[#00C555] text-white p-2 rounded-lg transition-colors text-xs text-center"
                      >
                        <div className="font-semibold">{date.day}</div>
                        <div>{date.date}</div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 5: User chooses date */}
                {currentStep >= 5 && selectedDate && (
                  <UserMessage text={`Prefiro o dia ${selectedDate}! 📅`} />
                )}

                {/* Step 5: Choose time */}
                {currentStep >= 5 && (
                  <BotMessage text="💬 Esses são os horários disponíveis para o dia selecionado:&#10;🕐 Escolha um horário e clique no botão correspondente!" />
                )}

                {currentStep === 5 && (
                  <div className="grid grid-cols-3 gap-1 text-xs mb-4">
                    {horarios.map((time, timeIndex) => (
                      <button
                        key={timeIndex}
                        onClick={() => handleTimeSelect(time)}
                        className="p-2 rounded transition-colors bg-gray-600 text-gray-300 hover:bg-gray-500"
                      >
                        ⏰ {time}
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 6: User chooses time */}
                {currentStep >= 6 && selectedTime && (
                  <UserMessage text={`Escolho às ${selectedTime}! ⏰`} />
                )}

                {/* Final summary */}
                {currentStep >= 6 && selectedTime && (
                  <div className="p-3 bg-[#00D563] rounded-lg text-white text-center">
                    <div className="text-sm font-semibold mb-2">✅ Resumo do Agendamento</div>
                    <div className="text-xs space-y-1">
                      <div>👨‍💼 Barbeiro: {selectedBarber}</div>
                      <div>✂️ Serviço: {selectedService}</div>
                      <div>📅 Data: {selectedDate}</div>
                      <div>⏰ Horário: {selectedTime}</div>
                    </div>
                    <a 
                      href={`https://wa.me/5547996772077?text=Olá! Quero agendar: ${selectedService} com ${selectedBarber} no dia ${selectedDate} às ${selectedTime}`}
                      className="block mt-3 bg-white text-[#00D563] py-2 px-4 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                    >
                      Confirmar pelo WhatsApp 📱
                    </a>
                  </div>
                )}
              </div>
              
              {/* Input area */}
              <div className="border-t border-gray-700 pt-3">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-800 rounded-full px-3 py-2">
                    <span className="text-gray-500 text-sm">Interaja com os botões acima...</span>
                  </div>
                  <div className="w-8 h-8 bg-[#00D563] rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
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