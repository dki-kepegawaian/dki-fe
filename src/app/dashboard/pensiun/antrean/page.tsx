import { AntreanPensiunView } from '@/features/pensiun/components/antrean-pensiun-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antrean Pensiun - Teralur Kepegawaian DKI'
};

export default function AntreanPensiunPage() {
  return <AntreanPensiunView />;
}
