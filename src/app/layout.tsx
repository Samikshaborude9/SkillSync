import './globals.css';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'AI Career Assistant - Your Path to Success',
  description: 'AI-powered career development platform with resume building, mock interviews, and skill certification',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
        {/* 👇 Google Font Link */}
        <link
         href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  
      </head>

      <body className="antialiased font-jakarta bg-gray-50 text-gray-900" >
       <Navigation/>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}