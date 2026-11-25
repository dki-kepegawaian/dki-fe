import { DataGuruView } from '@/features/operator/components/data-guru-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Guru Sekolah - Teralur Kepegawaian DKI'
};

export default function DataGuruPage() {
  return <DataGuruView />;
}
