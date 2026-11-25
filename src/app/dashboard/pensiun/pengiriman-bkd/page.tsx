import { PengirimanBkdView } from '@/features/pensiun/components/pengiriman-bkd-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catat Pengiriman ke BKD - Teralur Kepegawaian DKI',
  description: 'Catat pengiriman usulan pensiun ke BKD'
};

export default function PengirimanBkdPage() {
  return <PengirimanBkdView />;
}
