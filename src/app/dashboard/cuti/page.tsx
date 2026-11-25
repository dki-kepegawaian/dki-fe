import { AntreanCutiView } from '@/features/sudin/components/antrean-cuti-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antrean Cuti - Teralur Kepegawaian DKI'
};

export default function AntreanCutiPage() {
  return <AntreanCutiView />;
}
