import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a integração com o WhatsApp?",
      answer: "Conectamos diretamente com sua conta do WhatsApp Business através da API oficial. Seus clientes conversam normalmente e nossa IA responde de forma natural e inteligente, como se fosse você mesmo."
    },
    {
      question: "A IA realmente entende diferentes tipos de solicitação?",
      answer: "Sim! Nossa IA é treinada especificamente para barbearias e entende pedidos como 'quero cortar o cabelo', 'preciso de barba', 'tenho que remarcar', e muito mais. Ela aprende com cada conversa."
    },
    {
      question: "E se o cliente fizer uma pergunta que a IA não sabe responder?",
      answer: "Quando a IA não consegue resolver, ela transfere automaticamente para você com todo o contexto da conversa. Você nunca perde o controle do atendimento."
    },
    {
      question: "Posso personalizar as respostas da IA?",
      answer: "Claro! Você pode personalizar o tom de voz, horários de funcionamento, serviços oferecidos, preços e muito mais. A IA vai falar exatamente como você configurar."
    },
    {
      question: "Como funciona a cobrança?",
      answer: "Cobramos mensalmente via cartão de crédito ou PIX. Você pode cancelar quando quiser sem multa. Oferecemos 30 dias grátis para você testar sem compromisso."
    },
    {
      question: "Funciona com mais de um barbeiro?",
      answer: "Sim! Nos planos Professional e Enterprise você pode cadastrar múltiplos barbeiros, cada um com sua agenda própria. A IA gerencia tudo automaticamente."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente! Usamos criptografia de ponta a ponta e seguimos todas as normas da LGPD. Seus dados e de seus clientes estão 100% protegidos."
    },
    {
      question: "Preciso instalar algum aplicativo?",
      answer: "Não! Tudo funciona pelo seu WhatsApp normal. Você só precisa acessar nosso painel web para configurar e acompanhar os resultados."
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