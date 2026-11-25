export interface GuruPensiun {
  nip: string;
  nama: string;
  gelar: string;
  jabatan: string;
  sekolah: string;
  pangkatGol: string;
  tanggalLahir: string;
  masaKerja: string;
  tmtPensiun: string;
  batasUsia: number;
}

export interface ProgressStepItem {
  id: number;
  title: string;
  subtitle?: string;
  status: 'completed' | 'active' | 'pending';
}

export const MOCK_GURU_PENSIUN: GuruPensiun = {
  nip: '19670305 199003 1 007',
  nama: 'Ahmad Fauzi',
  gelar: 'S.Pd.',
  jabatan: 'Guru Mapel Matematika',
  sekolah: 'SMP Negeri 45 Jakarta',
  pangkatGol: 'Pembina, IV/a',
  tanggalLahir: '5 Maret 1967',
  masaKerja: '38 tahun 8 bulan',
  tmtPensiun: '1 April 2027',
  batasUsia: 60
};

export const DAFTAR_14_BERKAS = [
  { id: 1, nama: 'Salinan SK CPNS dilegalisir', wajib: true },
  { id: 2, nama: 'Salinan SK PNS dilegalisir', wajib: true },
  { id: 3, nama: 'Salinan SK Pangkat/Golongan Terakhir', wajib: true },
  { id: 4, nama: 'Salinan SK Jabatan Fungsional Terakhir', wajib: true },
  { id: 5, nama: 'Salinan Penilaian Prestasi Kerja (SKP) 2 Tahun Terakhir', wajib: true },
  { id: 6, nama: 'Salinan Surat Nikah/Akta Nikah dilegalisir', wajib: true },
  { id: 7, nama: 'Salinan Kartu Keluarga (KK) terbaru dilegalisir', wajib: true },
  { id: 8, nama: 'Salinan Akta Kelahiran Anak (usia < 25 tahun & belum menikah)', wajib: false },
  { id: 9, nama: 'Daftar Susunan Keluarga (Model C)', wajib: true },
  { id: 10, nama: 'Surat Pernyataan Tidak Pernah Dijatuhi Hukuman Disiplin', wajib: true },
  { id: 11, nama: 'Surat Keterangan Bebas Temuan / Bebas Hutang dari Kasda', wajib: true },
  { id: 12, nama: 'Pasfoto Berwarna terbaru ukuran 3x4 (4 lembar)', wajib: true },
  { id: 13, nama: 'Salinan Kartu Pegawai (KARPEG) & KTP', wajib: true },
  { id: 14, nama: 'Surat Permohonan Pensiun dari Guru yang bersangkutan', wajib: true }
];
