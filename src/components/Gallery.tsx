import React from 'react';
import { motion } from 'motion/react';

const BRAID_STYLES = [
  {
    id: 1,
    title: 'Knotless Jumbo',
    image: '/Gemini_Generated_Image_new.png',
    category: 'Classic',
  },
  {
    id: 2,
    title: 'Goddess Boho',
    image: '/Gemini_Generated_Image_p8o9dyp8o9dyp8o9.png',
    category: 'Intricate',
  },
  {
    id: 3,
    title: 'Tribal Patterns',
    image: '/Gemini_Generated_Image_fkutb3fkutb3fkut.png',
    category: 'Artistic',
  },
  {
    id: 4,
    title: 'Butterfly Locs',
    image: '/Gemini_Generated_Image_niv6u8niv6u8niv6.png',
    category: 'Textured',
  },
  {
    id: 5,
    title: 'Fulani Braids',
    image: '/Gemini_Generated_Image_hsf8i6hsf8i6hsf8.png',
    category: 'Traditional',
  },
  {
    id: 6,
    title: 'Ombre Feed-ins',
    image: '/Gemini_Generated_Image_z3r7etz3r7etz3r7.png',
    category: 'Color',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-rose font-medium tracking-widest uppercase text-sm block mb-4">The Portfolio</span>
            <h2 className="text-5xl md:text-7xl italic">Cool Braid Designs</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-brand-ink/60 text-lg"
          >
            Explore our curated collection of intricate patterns and lush textures, designed to elevate your natural beauty.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAID_STYLES.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-brand-ink"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-rose text-sm uppercase tracking-widest mb-2">{style.category}</span>
                <h3 className="text-brand-cream text-3xl font-serif italic">{style.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
