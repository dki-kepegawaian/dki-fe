import { BuatPengajuanPensiunView } from '@/features/pensiun/components/buat-pengajuan-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buat Pengajuan Pensiun - Teralur Kepegawaian DKI',
  description: 'Langkah 1 dari 2: Pilih guru yang akan pensiun'
};

export default function BuatPengajuanPensiunPage() {
  return <BuatPengajuanPensiunView />;
}
