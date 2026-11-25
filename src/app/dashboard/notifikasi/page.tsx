import { NotifikasiView } from '@/features/sudin/components/notifikasi-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notifikasi - Teralur Kepegawaian DKI'
};

export default function NotifikasiPage() {
  return <NotifikasiView />;
}
