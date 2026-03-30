"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "M. G.",
    text: "Un percorso che ha letteralmente cambiato la mia prospettiva di vita. Fin dal primo incontro mi sono sentito totalmente accolto, ascoltato in modo profondo e mai giudicato. Consigliatissimo."
  },
  {
    name: "A. C.",
    text: "La delicatezza, la professionalità e l'empatia dimostrate sono state fondamentali per superare uno dei momenti più difficili della mia vita. Non potevo fare scelta migliore per me stessa."
  },
  {
    name: "F. R.",
    text: "Un ambiente sicuro ed estremamente rassicurante. Riuscire a parlare dei propri nodi emotivi non è facile, ma qui ho trovato l'esatta combinazione di competenza e umanità che cercavo."
  }
];

export function ReviewsSection() {
  return (
    <section className="py-24 bg-secondary/5 border-t border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-primary/80 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Dicono di me
          </span>
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            L'esperienza dei Pazienti
          </h2>
          <p className="text-lg text-foreground/80">
            Le parole di chi ha già intrapreso e vissuto questo cammino di consapevolezza e crescita personale.
          </p>
        </motion.div>

        <div className="md:hidden flex items-center justify-end text-[13px] uppercase tracking-wider text-primary/70 font-semibold mb-4 pr-2">
          Scorri <ArrowRight className="w-4 h-4 ml-2" />
        </div>

        {/* Carousel per Mobile / Grid per Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory px-6 md:px-0 pb-8 -mx-6 md:mx-0 hide-scrollbar md:grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative w-[85vw] md:w-auto shrink-0 snap-center bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-secondary/50 mb-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent/80 text-accent/80" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed text-lg font-medium italic mb-8">
                  &quot;{review.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-primary font-semibold">
                  {review.name.charAt(0)}
                </div>
                <p className="font-semibold text-foreground tracking-wide">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
