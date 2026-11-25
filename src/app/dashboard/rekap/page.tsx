import { RekapKepegawaianView } from '@/features/pimpinan/components/rekap-kepegawaian-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rekap Kepegawaian - Teralur Kepegawaian DKI'
};

export default function RekapKepegawaianPage() {
  return <RekapKepegawaianView />;
}
