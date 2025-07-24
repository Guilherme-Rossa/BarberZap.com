import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
    question: "Como funciona a integração com o WhatsApp?",
    answer: "Nosso chatbot se conecta diretamente à sua conta do WhatsApp Business por meio da API oficial. Seus clientes mandam mensagem normalmente e a IA responde automaticamente como se fosse você, de forma natural e eficiente."
  },
  {
    question: "Preciso instalar algum aplicativo para usar?",
    answer: "Você não precisa instalar nada para usar o chatbot. O barbeiro apenas precisa ter o aplicativo do Google Agenda instalado no celular para acompanhar os agendamentos. Seus clientes continuam usando o WhatsApp normalmente."
  },
  {
    question: "O cliente precisa instalar algum aplicativo?",
    answer: "Não! O cliente conversa diretamente pelo WhatsApp, como de costume. Todo o atendimento é feito por lá, sem necessidade de baixar nenhum outro app."
  },
  {
    question: "A IA entende pedidos diferentes?",
    answer: "Sim! O chatbot é treinado especialmente para barbearias. Ele entende pedidos como 'quero cortar o cabelo', 'posso fazer barba amanhã?', ou 'quero remarcar meu horário', e muito mais."
  },
  {
    question: "E se a IA não souber responder?",
    answer: "Se surgir uma pergunta que o chatbot não conseguir responder, ele transfere a conversa automaticamente para você, com todo o histórico. Assim, você continua o atendimento sem perder o contexto."
  },
  {
    question: "Posso configurar as respostas da IA?",
    answer: "Sim! Você pode personalizar o tom de voz, os horários de funcionamento, os serviços, preços e outras informações da sua barbearia. A IA vai responder do jeito que você preferir."
  },
  {
    question: "Como são os agendamentos?",
    answer: "Os agendamentos feitos pelo cliente via WhatsApp são automaticamente salvos no Google Agenda do barbeiro. Você só precisa instalar o app do Google Agenda para acompanhar sua agenda atualizada em tempo real."
  },
  {
    question: "Funciona com mais de um barbeiro?",
    answer: "Sim! Você pode cadastrar vários barbeiros, cada um com sua agenda separada. O chatbot organiza os horários de forma automática, sem confusão."
  },
  {
    question: "Meus dados estão protegidos?",
    answer: "Com certeza. Usamos criptografia de ponta e seguimos a LGPD. Todas as informações suas e dos seus clientes estão totalmente seguras."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "A cobrança é mensal, por cartão de crédito ou PIX. Você pode cancelar a qualquer momento, sem multas. Oferecemos 30 dias grátis para você testar a ferramenta."
  }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o BarberZap
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 50}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#00D563] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="400">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas?
          </p>
          <a href="https://wa.me/5547996772077?text=Olá! Tenho algumas dúvidas sobre o BarberZap" className="bg-gradient-to-r from-[#00D563] to-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00D563]/25 transition-all duration-300 inline-block">
            Falar com nosso time
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;