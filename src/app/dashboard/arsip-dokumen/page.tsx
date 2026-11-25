import { ArsipDokumenView } from '@/features/operator/components/arsip-dokumen-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arsip Dokumen - Teralur Kepegawaian DKI'
};

export default function ArsipDokumenPage() {
  return <ArsipDokumenView />;
}
