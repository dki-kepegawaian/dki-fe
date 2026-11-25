import { TugasSayaView } from '@/features/sudin/components/tugas-saya-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tugas Saya - Teralur Kepegawaian DKI'
};

export default function TugasSayaPage() {
  return <TugasSayaView />;
}
