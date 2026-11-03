import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Case Studies & Enterprise Transformations | SpotXpert AI',
  description:
    'Explore real-world client case studies and measurable enterprise results across AI engineering, LLM adoption, modern data platforms, and cloud modernization.',
  openGraph: {
    title: 'Client Case Studies & Enterprise AI Transformations | SpotXpert AI',
    description:
      'Real-world case studies detailing how leading enterprises transform operations, eliminate manual toil, and scale with AI-native engineering.',
    type: 'website',
  },
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
