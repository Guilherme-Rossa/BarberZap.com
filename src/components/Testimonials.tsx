import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Barbearia do Carlos",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Revolucionou minha barbearia! Agora não perco mais nenhum cliente e minha agenda está sempre cheia. O BarberZap pagou o investimento em 1 semana."
    },
    {
      name: "João Pedro",
      business: "JP Hair Studio",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Inacreditável como uma IA pode ser tão inteligente. Meus clientes adoram a praticidade e eu ganho mais tempo para focar no atendimento."
    },
    {
      name: "Ricardo Santos",
      business: "Santos Barber Shop",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Minha receita aumentou 50% em 2 meses. O sistema é muito fácil de usar e meus clientes ficaram impressionados com a tecnologia."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-[#00D563]/10 to-[#25D366]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-[#25D366]/10 to-[#00D563]/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que dizem nossos barbeiros
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-6 hover:border-[#00D563]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00D563]/20 h-full backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D563]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.business}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-6 w-6 text-[#00D563] mb-2" />
                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="450">
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
              <span className="font-semibold text-white">4.9/5</span>
            </div>
            <span>•</span>
            <span>Mais de 1.000 barbeiros satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;