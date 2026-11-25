import { VerifikasiBerkasView } from '@/features/pensiun/components/verifikasi-berkas-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verifikasi Berkas Pensiun - Teralur Kepegawaian DKI',
  description: 'Verifikasi 14 berkas pengajuan pensiun oleh Staf Sudin'
};

export default function VerifikasiBerkasPage() {
  return <VerifikasiBerkasView />;
}
