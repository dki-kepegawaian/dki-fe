import { StatusPensiunView } from '@/features/pensiun/components/status-pensiun-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Status Pensiun Sekolah - Teralur Kepegawaian DKI',
  description: 'Daftar dan status pengajuan pensiun sekolah'
};

export default function StatusPensiunPage() {
  return <StatusPensiunView />;
}
