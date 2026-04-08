import './globals.css';

export const metadata = {
  title: 'AI Ready School — India\'s Complete AI Ecosystem for K-12',
  description: 'AI Ready School gives K-12 institutions a complete, responsible AI ecosystem — from student learning companions to teacher tools and school infrastructure. Trusted by 50+ schools across India.',
  keywords: 'AI education, K-12 AI, school AI tools, edtech India, Cypher, Morpheus, Zion, NEO, Matrix',
  openGraph: {
    title: 'AI Ready School — India\'s Complete AI Ecosystem for K-12',
    description: 'Transform your school with responsible AI. Student companions, teacher tools, and AI infrastructure — one complete platform.',
    type: 'website',
    url: 'https://aireadyschool.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
