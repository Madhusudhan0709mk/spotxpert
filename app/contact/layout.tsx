import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Book Consultation | SpotXpert AI',
  description:
    'Schedule a 30-minute technical strategy consultation with SpotXpert AI principal architects. Discuss AI transformation, cloud modernization, and dedicated agile pods.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
