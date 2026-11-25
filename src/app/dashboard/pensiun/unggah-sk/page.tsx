import { UnggahSkView } from '@/features/pensiun/components/unggah-sk-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unggah SK Pensiun - Teralur Kepegawaian DKI',
  description: 'Catat SK dari BKD untuk menyelesaikan pengajuan pensiun'
};

export default function UnggahSkPage() {
  return <UnggahSkView />;
}
