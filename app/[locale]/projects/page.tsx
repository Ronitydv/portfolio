// next
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// components
import ProjectsTop from '@/components/Projects/ProjectsTop';
const MoreProjects = dynamic(
  () => import('@/components/Projects/MoreProjects/MoreProjects'),
);

// metadata
export const metadata: Metadata = {
  title: 'Ronit Yadav | Projects',
  description: "Ronit Yadav's Projects",
  keywords:
    'Ronit Yadav, Ronit, Yadav, Projects, Web Developer, Full-Stack Developer',
  metadataBase: new URL('https://ronitydv.github.io'),
  alternates: {
    canonical: '/projects',
    languages: {
      'en-US': '/en/projects',
      'ja-JP': '/ja/projects',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/projects',
    title: 'Ronit Yadav | Projects',
    siteName: 'Ronit Yadav | Portfolio',
    description: "Ronit Yadav's Projects",
    images: {
      url: '/images/screenshots/projects.webp',
      alt: "Ronit Yadav's Projects",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/projects.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronit Yadav | Projects',
    description: "Ronit Yadav's Projects",
    images: '/images/screenshots/projects.webp',
    creator: '@RONIT_ydv',
    site: '@RONIT_ydv',
  },
};

const Projects = () => {
  return (
    <>
      <ProjectsTop />
      <MoreProjects />
    </>
  );
};

export default Projects;
