import { ProfilAkunView } from '@/features/sudin/components/profil-akun-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kelola Profil Akun - Teralur Kepegawaian DKI'
};

export default function ProfilAkunPage() {
  return <ProfilAkunView />;
}
