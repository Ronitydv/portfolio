// next
import { Metadata } from 'next';

// components
import SectionNavigation from '@/components/Layout/SectionNavigation';
import ShowcaseTop from '@/components/Showcase/ShowcaseTop/ShowcaseTop';
import JapanSlider from '@/components/Showcase/JapanSlider/JapanSlider';
import Flowers from '@/components/Showcase/Flowers';
import FlipTiltParallax from '@/components/Showcase/FlipTiltParallax/FlipTiltParallax';
import ParallexScroll from '@/components/Showcase/ParallaxScroll';

// metadata
export const metadata: Metadata = {
  title: 'Ronit Yadav | Showcase',
  description: "Ronit Yadav's Project Showcase",
  keywords:
    'Ronit Yadav, Ronit, Yadav, Showcase, Web Developer, Full-Stack Developer',
  metadataBase: new URL('https://ronitydv.github.io'),
  alternates: {
    canonical: '/showcase',
    languages: {
      'en-US': '/en/showcase',
      'ja-JP': '/ja/showcase',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/showcase',
    title: 'Ronit Yadav | Showcase',
    siteName: 'Ronit Yadav | Portfolio',
    description: "Ronit Yadav's Project Showcase",
    images: {
      url: '/images/screenshots/showcase.webp',
      alt: "Ronit Yadav's Project Showcase",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/showcase.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronit Yadav | Showcase',
    description: "Ronit Yadav's Project Showcase",
    images: '/images/screenshots/showcase.webp',
    creator: '@RONIT_ydv',
    site: '@RONIT_ydv',
  },
};

const Showcase = () => {
  return (
    <>
      <ShowcaseTop />
      <ParallexScroll />
      <JapanSlider />
      <FlipTiltParallax />
      <Flowers />
      <SectionNavigation />
    </>
  );
};

export default Showcase;
