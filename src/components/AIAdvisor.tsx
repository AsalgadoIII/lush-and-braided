import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getStyleAdvice } from '../services/gemini';

export default function AIAdvisor() {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const result = await getStyleAdvice(input);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-24 px-6 bg-brand-ink text-brand-cream overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl mb-4 italic">AI Style Consultation</h2>
          <p className="text-brand-rose/80 text-lg max-w-2xl mx-auto">
            Our intelligent system analyzes your preferences to suggest the perfect braid design for your unique look.
          </p>
        </motion.div>

        <div className="glass-card p-8 rounded-3xl bg-white/5 border-white/10">
          <form onSubmit={handleConsult} className="relative mb-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell us about your hair type and the vibe you're going for..."
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-8 pr-16 focus:outline-none focus:border-brand-rose transition-colors text-brand-cream placeholder:text-brand-cream/40"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 bg-brand-rose text-brand-ink px-6 rounded-full font-medium hover:bg-brand-rose/90 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              Consult
            </button>
          </form>

          <AnimatePresence mode="wait">
            {advice && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-rose/20 rounded-lg">
                    <Sparkles className="w-6 h-6 text-brand-rose" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif mb-2 text-brand-rose italic">Your Personalized Advice</h3>
                    <p className="leading-relaxed text-brand-cream/80 whitespace-pre-wrap">
                      {advice}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-rose/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
