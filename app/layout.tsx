import { ClerkProvider } from '@clerk/nextjs'

import './globals.css';

import { GeistSans } from 'geist/font/sans';
import { TopNav } from './_components/topnav';

let title = 'Biophilic Assessments for your spaces';
let description =
  'This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.';

export const metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.variable}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
