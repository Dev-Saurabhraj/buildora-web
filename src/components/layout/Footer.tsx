import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 border-t border-black/8 dark:border-white/10 py-12 px-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10">
        <div>
          <span className="font-extrabold text-xl tracking-tight text-[#111216] dark:text-white block mb-1">
            Buildora
          </span>
          <p className="text-xs text-[#8e929d]">
            Freelance product, web, and brand design.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-[#5d6069] dark:text-[#9ea2ae]">
          <a href="/#showcase" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
          <a href="/#process" className="hover:text-black dark:hover:text-white transition-colors">Process</a>
          <a href="/#case-studies" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="/#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="/#pricing" className="hover:text-black dark:hover:text-white transition-colors">Pricing</a>
          <a href="/#faq" className="hover:text-black dark:hover:text-white transition-colors">FAQ</a>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-black/4 dark:border-white/5 text-xs text-[#8e929d]">
        <p>&copy; 2026 Buildora Design. All rights reserved.</p>
        <a href="/#contact" className="font-medium text-[#5d6069] transition-colors hover:text-black dark:text-[#9ea2ae] dark:hover:text-white">
          Start a project with Buildora
        </a>
      </div>
    </footer>
  );
};
