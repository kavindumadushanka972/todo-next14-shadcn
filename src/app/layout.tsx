import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { ThemeProvider } from '@/components/theme-provider';
import ReduxProvider from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'Created Using Next.js 14 and Ant Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              <div className="flex flex-col min-h-screen">
                <NavBar />

                <div className="flex-1 flex">
                  <SideBar />

                  <div className="flex-1 container pt-4 md:ml-60 ml-0 mt-[60px]">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
