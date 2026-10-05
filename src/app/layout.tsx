import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '../index.css';

export const metadata: Metadata = {
  title: 'Buildora — Freelance Product, Web & Brand Design',
  description:
    'Buildora is an independent freelance design practice creating thoughtful digital products, websites, and visual identities for growing teams.',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-orange-500 selection:text-white">
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`(function() {
            try {
              var saved = localStorage.getItem('buildora-theme');
              if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.documentElement.setAttribute('data-theme', 'dark');
              } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.setAttribute('data-theme', 'light');
              }
            } catch(e) {}
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
