import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Services & Architecture Walkthroughs | SpotXpert AI',
  description:
    'Explore our library of enterprise engineering teardowns, AI system walkthroughs, RAG blueprints, and cloud architecture deep dives. Watch video case studies and technical demos.',
  openGraph: {
    title: 'Video Services & Technical Architecture Walkthroughs | SpotXpert AI',
    description:
      'Watch our engineering leads break down real enterprise AI implementations, model orchestration, and cloud platform blueprints.',
    type: 'website',
  },
};

export default function VideoServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
