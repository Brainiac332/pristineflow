"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/data";
import { ChevronDown, ChevronUp, ChevronRight, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Group FAQs by category
  const categories = [...new Set(FAQS.map((f) => f.category))];

  return (
    <section
      id="faq"
      className="bg-cream"
      aria-labelledby="faq-title"
    >
      <div className="container-site py-20 lg:py-28">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-emerald-600 bg-emerald-50 rounded-full mb-4">
            Common Questions
          </span>
          <h2 id="faq-title" className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-ink-900 tracking-tight text-balance mb-4">
            Frequently Asked{" "}
            <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Quick answers to the questions we hear most. Can't find what you need?
            <a href="#contact" className="text-emerald-600 hover:underline ml-1">Contact us</a>.
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-medium text-lg shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-all duration-200"
          >
            Still Have Questions? Contact Us
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  faq: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <details className="group">
        <summary
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
          className="flex items-center justify-between w-full p-6 bg-white rounded-2xl border border-line cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <div className="flex items-center gap-4 flex-1 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <HelpCircle className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-ink-900 group-open:text-emerald-700 transition-colors pr-10">
              {faq.question}
            </h3>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cream flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-ink-600" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-5 w-5 text-ink-600" aria-hidden="true" />
            )}
          </div>
        </summary>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={`faq-answer-${faq.id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 px-6 pb-6"
            >
              <div className="border-t border-line pt-4">
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </details>
    </motion.div>
  );
}