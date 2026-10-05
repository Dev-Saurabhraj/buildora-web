'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ThreeBackground } from '../3d/ThreeBackground';
import { Header } from '../layout/Header';
import { MenuDrawer } from '../layout/MenuDrawer';
import { Footer } from '../layout/Footer';
import { BookingModal } from '../modals/BookingModal';
const portfolioScreen = '/assets/work_detail_1.jpg';
const stridaCatalogue = '/assets/strida_catalogue.png';
const stridaProject = '/assets/strida_project.png';
const stridaAbout = '/assets/strida_about.png';
const bravoScreen = '/assets/work_detail_2.jpg';
const nitroScreen = '/assets/work_detail_3.jpg';
const fargoScreen = '/assets/work_detail_4.jpg';
const walletScreen = '/assets/work_detail_5.jpg';
const conciergeScreen = '/assets/work_detail_6.jpg';
const hobbyPointScreen = '/assets/work_detail_8.jpg';
const studioScreen = '/assets/work_detail_9.jpg';
const learningScreen = '/assets/work_detail_10.jpg';
const identityScreen = '/assets/work_detail_11.png';
const journeyScreen = '/assets/work_detail_12.png';

interface Project {
  name: string;
  category: string;
  year: string;
  services: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  cover: string;
  gallery: string[];
}

const projects: Record<string, Project> = {
  strida: {
    name: 'Strida',
    category: 'Portfolio · Web',
    year: '2025',
    services: 'Positioning, Art direction, UX/UI',
    summary: 'A calmer home for bold work, built to make the story as memorable as the craft.',
    challenge: 'A growing portfolio needed a clearer way to present its range without making every project compete for attention.',
    approach: 'A strong editorial grid, confident type, and an understated navigation system let each project have its own moment.',
    outcome: 'A flexible portfolio foundation with clearer hierarchy, more room for imagery, and a direct path from discovery to contact.',
    cover: stridaCatalogue,
    gallery: [stridaProject, stridaAbout],
  },
  bravo: {
    name: 'Bravo',
    category: 'Product · Fintech',
    year: '2025',
    services: 'Product strategy, UX/UI, Prototyping',
    summary: 'A more human way to understand money, turning dense account details into a calm daily tool.',
    challenge: 'Important financial actions were scattered across screens, making everyday decisions feel harder than they needed to be.',
    approach: 'A clear information hierarchy, quieter surfaces, and focused actions put the most useful details within easy reach.',
    outcome: 'A cohesive interface direction for balances, cards, and payment flows that stays legible as the product grows.',
    cover: bravoScreen,
    gallery: [walletScreen, conciergeScreen, journeyScreen],
  },
  nitro: {
    name: 'Nitro',
    category: 'Mobile · Experience',
    year: '2025',
    services: 'Concept, UX/UI, Interaction design',
    summary: 'A playful discovery experience that helps people find a new hobby and get into it faster.',
    challenge: 'Newcomers needed a welcoming first step through a wide world of activities, gear, and unfamiliar terminology.',
    approach: 'Colorful editorial imagery, simple progress cues, and short guided lessons make exploration feel approachable.',
    outcome: 'A mobile product concept with a distinct visual voice and a clear path from browsing to first-time participation.',
    cover: nitroScreen,
    gallery: [hobbyPointScreen, journeyScreen, learningScreen],
  },
  fargo: {
    name: 'Fargo',
    category: 'SaaS · Web app',
    year: '2025',
    services: 'Product strategy, UX/UI, Design system',
    summary: 'A sharper workspace for complex operations, designed to make system status easy to understand.',
    challenge: 'Teams needed to see what was connected, what needed attention, and where to go next without scanning a wall of data.',
    approach: 'A modular dashboard, clear status language, and consistent interaction patterns turn complexity into a readable workflow.',
    outcome: 'A scalable interface system that helps teams move between overview, detail, and action with less friction.',
    cover: fargoScreen,
    gallery: [learningScreen, identityScreen, portfolioScreen],
  },
};

const projectOrder = ['strida', 'bravo', 'nitro', 'fargo'];

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const project = projects[slug];

  if (!project) {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <p className="mb-4 font-serif-italic text-xl text-black/50 dark:text-white/50">Project not found</p>
          <a href="/#case-studies" className="text-sm font-semibold underline underline-offset-4">Back to the work</a>
        </div>
      </main>
    );
  }

  const currentIndex = projectOrder.indexOf(slug);
  const nextSlug = projectOrder[(currentIndex + 1) % projectOrder.length];
  const nextProject = projects[nextSlug];

  return (
    <div className="relative min-h-screen selection:bg-orange-500 selection:text-white">
      <ThreeBackground />
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main className="relative z-10 mx-auto max-w-330 px-6 pt-32">
        <a
          href="/#case-studies"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-black/55 transition hover:text-black dark:text-white/55 dark:hover:text-white"
        >
          <ArrowLeft className="size-4" />
          All projects
        </a>

        <section className="grid gap-10 pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
              Selected work · 0{currentIndex + 1} / 04
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-medium leading-[0.98] tracking-tight text-[#111216] dark:text-white md:text-8xl"
            >
              {project.name}<span className="text-orange-600">.</span>
            </motion.h1>
          </div>
          <div className="max-w-xl pb-1">
            <p className="mb-6 text-xl leading-relaxed text-[#4f5158] dark:text-[#c0c2c8] md:text-2xl">{project.summary}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#777b84] dark:text-white/55">
              <span>{project.category}</span>
              <span>{project.year}</span>
              <span>{project.services}</span>
            </div>
          </div>
        </section>

        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="overflow-hidden rounded-[20px] bg-white/50 halo-card"
        >
          <img src={project.cover} alt={`${project.name} project overview`} className="aspect-[1.55/1] w-full object-cover" />
        </motion.figure>

        <section className="grid gap-10 border-b border-black/10 py-16 dark:border-white/10 md:grid-cols-3 md:gap-12 md:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600 dark:text-orange-400">The challenge</p>
            <h2 className="text-2xl font-medium leading-tight text-[#111216] dark:text-white">Make the important parts feel effortless.</h2>
          </div>
          <p className="text-base leading-relaxed text-[#5f626a] dark:text-[#aeb1ba]">{project.challenge}</p>
          <p className="text-base leading-relaxed text-[#5f626a] dark:text-[#aeb1ba]">{project.approach}</p>
        </section>

        <section className="py-16 md:py-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-2 font-serif-italic text-xl text-black/45 dark:text-white/45">A closer look</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#111216] dark:text-white md:text-4xl">Designed to work beautifully.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#777b84] dark:text-white/55">{project.outcome}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <motion.figure
                key={image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className={`overflow-hidden rounded-2xl bg-white/50 ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={image}
                  alt={`${project.name} design detail ${index + 1}`}
                  loading="lazy"
                  className={`w-full object-cover ${index === 0 ? 'aspect-[1.8/1]' : 'aspect-4/3'}`}
                />
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 border-t border-black/10 py-14 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600 dark:text-orange-400">Have a project in mind?</p>
            <h2 className="text-3xl font-medium tracking-tight text-[#111216] dark:text-white">Let's make it clear.</h2>
          </div>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center gap-3 self-start rounded-full bg-[#111216] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600 dark:bg-white dark:text-black dark:hover:bg-orange-400 sm:self-auto"
          >
            Book a discovery call
            <ArrowUpRight className="size-4" />
          </button>
        </section>

        <a href={`/work/${nextSlug}`} className="group flex items-center justify-between border-t border-black/10 py-8 dark:border-white/10">
          <div>
            <p className="mb-1 text-xs text-[#777b84] dark:text-white/50">Next project</p>
            <span className="text-2xl font-medium text-[#111216] transition group-hover:text-orange-600 dark:text-white">{nextProject.name}</span>
          </div>
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};