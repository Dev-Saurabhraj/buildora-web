import React from 'react';
import { motion } from 'framer-motion';
import stridaImage from '../../assets/strida_catalogue.png';
import bravoImage from '../../assets/work_detail_2.jpg';
import nitroImage from '../../assets/work_detail_3.jpg';
import fargoImage from '../../assets/work_detail_4.jpg';

const projects = [
  { name: 'Strida', category: 'Portfolio · Web', image: stridaImage, href: '/work/strida' },
  { name: 'Bravo', category: 'Product · Web', image: bravoImage, href: '/work/bravo' },
  { name: 'Nitro', category: 'Digital · Identity', image: nitroImage, href: '/work/nitro' },
  { name: 'Fargo', category: 'SaaS · Web app', image: fargoImage, href: '/work/fargo' },
];

export const CaseStudiesSection: React.FC = () => (
  <section className="relative my-36 w-full" id="case-studies">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center gap-4 mb-4"
    >
      <span className="w-16 h-px bg-black/10 dark:bg-white/10" />
      <span className="font-serif-italic text-2xl text-black/50 dark:text-white/50">Our Projects</span>
      <span className="w-16 h-px bg-black/10 dark:bg-white/10" />
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold tracking-tight text-center text-[#111216] dark:text-white mb-14"
    >
      Recent Case Studies
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      {projects.map((project, index) => (
        <motion.a
          key={project.name}
          href={project.href}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: index % 2 ? 0.08 : 0 }}
          className="group block"
        >
          <div className="overflow-hidden rounded-3xl bg-white/50 halo-card">
            <img
              src={project.image}
              alt={`${project.name} project preview`}
              loading="lazy"
              className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
          </div>
          <div className="flex items-center justify-between px-1 pt-4">
            <h3 className="text-lg font-semibold text-[#111216] dark:text-white">{project.name}</h3>
            <span className="text-sm text-[#777b84] dark:text-white/55">{project.category}</span>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);