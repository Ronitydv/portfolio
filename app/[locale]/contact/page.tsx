// next
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// components
import ContactTop from '@/components/Contact/ContactTop/ContactTop';
const Social = dynamic(() => import('@/components/Contact/Social/Social'));

// metadata
export const metadata: Metadata = {
  title: 'Ronit Yadav | Contact Information',
  description: "Ronit Yadav's Contact Information",
  keywords:
    'Ronit Yadav, Ronit, Yadav, Contact Information, Web Developer, Full-Stack Developer',
  metadataBase: new URL('https://ronitydv.github.io'),
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en/contact',
      'ja-JP': '/ja/contact',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/contact',
    title: 'Ronit Yadav | Contact Information',
    siteName: 'Ronit Yadav | Portfolio',
    description: "Ronit Yadav's Contact Information",
    images: {
      url: '/images/screenshots/contact.webp',
      alt: "Ronit Yadav's Contact Information",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/contact.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronit Yadav | Contact Information',
    description: "Ronit Yadav's Contact Information",
    images: '/images/screenshots/contact.webp',
    creator: '@RONIT_ydv',
    site: '@RONIT_ydv',
  },
};

const Contact = () => {
  return (
    <>
      <ContactTop />
      <Social />
    </>
  );
};

export default Contact;
