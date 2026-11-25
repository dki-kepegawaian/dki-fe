import { UnggahBerkasView } from '@/features/pensiun/components/unggah-berkas-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unggah 14 Berkas Pensiun - Teralur Kepegawaian DKI',
  description: 'Langkah 2 dari 2: Unggah 14 berkas pengajuan pensiun'
};

export default function UnggahBerkasPage() {
  return <UnggahBerkasView />;
}
