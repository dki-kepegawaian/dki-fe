import { AntreanKenaikanPangkatView } from '@/features/sudin/components/antrean-kenaikan-pangkat-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antrean Kenaikan Pangkat - Teralur Kepegawaian DKI'
};

export default function AntreanKenaikanPangkatPage() {
  return <AntreanKenaikanPangkatView />;
}
