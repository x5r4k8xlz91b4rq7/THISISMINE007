import './globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Dynamically load cursor aura with SSR disabled to prevent hydration errors
const CursorAura = dynamic(() => import('@/components/cursor-aura'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Ai Thumbs Solutions - Advanced AI Technology Services',
  description: 'Transform your business with cutting-edge AI solutions. Expert consulting, custom development, and enterprise AI integration services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            <CursorAura />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}