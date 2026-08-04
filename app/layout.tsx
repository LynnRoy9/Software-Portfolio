import type {Metadata} from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Toaster } from 'sonner';
import { ScrollProgress } from '@/components/scroll-progress';
import { Footer } from '@/components/footer';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Elangwe Lynn-Roy Dinyangi | Portfolio',
  description: 'Full-Stack Software and Mobile Application Developer specializing in React, Next.js, and React Native.',
  keywords: ['Frontend Developer', 'Full Stack Developer', 'React', 'Next.js', 'React Native', 'Software Engineer', 'Portfolio', 'Elangwe Lynn-Roy Dinyangi'],
  authors: [{ name: 'Elangwe Lynn-Roy Dinyangi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Elangwe Lynn-Roy Dinyangi | Portfolio',
    description: 'Full-Stack Software and Mobile Application Developer.',
    siteName: 'Elangwe Lynn-Roy Dinyangi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elangwe Lynn-Roy Dinyangi | Portfolio',
    description: 'Full-Stack Software and Mobile Application Developer.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans antialiased selection:bg-indigo-500 selection:text-white" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <Toaster position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}
