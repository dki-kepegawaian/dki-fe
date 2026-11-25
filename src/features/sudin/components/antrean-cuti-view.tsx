'use client';

import React, { useState } from 'react';
import {
  IconDownload,
  IconLoader2,
  IconAlertCircle,
  IconClock,
  IconCheck,
  IconChevronRight
} from '@tabler/icons-react';
import { toast } from 'sonner';

const CUTI_DATA = [
  {
    nama: 'Siti Rahmawati, S.Pd.',
    kode: 'CUT-2026-0142',
    sekolah: 'SMP Negeri 45 Jakarta',
    jenis: 'Cuti tahunan',
    tgl: '3–7 Nov 2026 · 5 hari kerja',
    status: 'Diajukan',
    aksi: 'Tinjau'
  },
  {
    nama: 'Rahmat Hidayat',
    kode: 'CUT-2026-0145',
    sekolah: 'SD Negeri Rawa Buaya 09',
    jenis: 'Cuti sakit',
    tgl: '28 Okt–6 Nov 2026 · 8 hari kerja',
    status: 'Diajukan',
    aksi: 'Tinjau'
  },
  {
    nama: 'Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.',
    kode: 'CUT-2026-0146',
    sekolah: 'SMA Negeri 16 Jakarta',
    jenis: 'Cuti alasan penting',
    tgl: '2–4 Nov 2026 · 3 hari kerja',
    status: 'Diajukan',
    aksi: 'Tinjau'
  },
  {
    nama: 'Dewi Anggraini, S.Pd.Gr.',
    kode: 'CUT-2026-0143',
    sekolah: 'SMK Negeri 13 Jakarta',
    jenis: 'Cuti melahirkan',
    tgl: '16 Nov 2026–15 Feb 2027 · 3 bulan',
    status: 'Perlu Perbaikan',
    aksi: 'Buka'
  },
  {
    nama: 'Ahmad Fauzi, S.Pd.',
    kode: 'CUT-2026-0140',
    sekolah: 'SMA Negeri 16 Jakarta',
    jenis: 'Cuti tahunan',
    tgl: '9–13 Nov 2026 · 5 hari kerja',
    status: 'Menunggu Surat Fisik',
    aksi: 'Tinjau'
  },
  {
    nama: 'Nur Aini Fitriani',
    kode: 'CUT-2026-0138',
    sekolah: 'SD Negeri Kembangan Selatan 05',
    jenis: 'Cuti tahunan',
    tgl: '10–12 Nov 2026 · 3 hari kerja',
    status: 'Menunggu Surat Fisik',
    aksi: 'Tinjau'
  },
  {
    nama: 'Siti Rahmawati, S.Pd.',
    kode: 'CUT-2026-0131',
    sekolah: 'SMP Negeri 45 Jakarta',
    jenis: 'Cuti alasan penting',
    tgl: '29–30 Okt 2026 · 2 hari kerja',
    status: 'Diproses Sudin',
    aksi: 'Buka'
  },
  {
    nama: 'Rahmat Hidayat',
    kode: 'CUT-2026-0124',
    sekolah: 'SD Negeri Rawa Buaya 09',
    jenis: 'Cuti tahunan',
    tgl: '19–21 Okt 2026 · 3 hari kerja',
    status: 'Disetujui',
    aksi: 'Buka'
  }
];

export function AntreanCutiView() {
  const [filter, setFilter] = useState('Semua');
  const filtered = CUTI_DATA.filter((d) => filter === 'Semua' || d.status === filter);

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Antrean Cuti
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
            Pengajuan cuti guru Jakarta Barat · Oktober 2026
          </p>
        </div>

        <button
          type='button'
          onClick={() => toast.success('Mengunduh rekap antrean cuti...')}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 shadow-xs self-start sm:self-center'
        >
          <IconDownload className='w-4 h-4' />
          <span>Unduh rekap</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Perlu diperiksa</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>3</p>
          <p className='text-xs text-slate-400 mt-1'>Berkas digital baru dari sekolah</p>
        </div>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Menunggu surat fisik</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>2</p>
          <p className='text-xs text-slate-400 mt-1'>Surat bertanda tangan belum diterima</p>
        </div>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Menunggu keputusan</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>1</p>
          <p className='text-xs text-slate-400 mt-1'>Di meja pejabat penanda tangan</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className='flex flex-wrap items-center gap-2'>
        {[
          { label: 'Semua', count: 8 },
          { label: 'Diajukan', count: 3 },
          { label: 'Perlu Perbaikan', count: 1 },
          { label: 'Menunggu Surat Fisik', count: 2 },
          { label: 'Diproses Sudin', count: 1 },
          { label: 'Disetujui', count: 1 }
        ].map((tab) => {
          const active = filter === tab.label;
          return (
            <button
              key={tab.label}
              type='button'
              onClick={() => setFilter(tab.label)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                active
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className='bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-slate-100 text-[11px] font-semibold text-slate-500 bg-slate-50/50'>
                <th className='py-3.5 px-5'>Pegawai · nomor</th>
                <th className='py-3.5 px-5'>Sekolah</th>
                <th className='py-3.5 px-5'>Jenis & tanggal</th>
                <th className='py-3.5 px-5'>Status</th>
                <th className='py-3.5 px-5 text-right'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100 text-xs sm:text-sm'>
              {filtered.map((row) => (
                <tr key={row.kode} className='hover:bg-slate-50/60 transition-colors'>
                  <td className='py-4 px-5'>
                    <p className='font-bold text-slate-900'>{row.nama}</p>
                    <p className='text-xs text-slate-500 mt-0.5'>{row.kode}</p>
                  </td>
                  <td className='py-4 px-5 text-slate-700'>{row.sekolah}</td>
                  <td className='py-4 px-5'>
                    <p className='font-medium text-slate-800'>{row.jenis}</p>
                    <p className='text-xs text-slate-500 mt-0.5'>{row.tgl}</p>
                  </td>
                  <td className='py-4 px-5 whitespace-nowrap'>
                    {row.status === 'Diajukan' || row.status === 'Diproses Sudin' ? (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                        <IconLoader2 className='w-3.5 h-3.5' />
                        {row.status}
                      </span>
                    ) : row.status === 'Perlu Perbaikan' ? (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold'>
                        <IconAlertCircle className='w-3.5 h-3.5' />
                        {row.status}
                      </span>
                    ) : row.status === 'Menunggu Surat Fisik' ? (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold'>
                        <IconClock className='w-3.5 h-3.5' />
                        {row.status}
                      </span>
                    ) : (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold'>
                        <IconCheck className='w-3.5 h-3.5' />
                        {row.status}
                      </span>
                    )}
                  </td>
                  <td className='py-4 px-5 text-right whitespace-nowrap'>
                    <button
                      type='button'
                      onClick={() => toast.info(`Membuka ${row.kode}`)}
                      className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a]'
                    >
                      <span>{row.aksi}</span>
                      <IconChevronRight className='w-3.5 h-3.5' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='px-5 py-3 border-t border-slate-100 text-[11px] text-slate-400'>
          Menampilkan {filtered.length} dari 8 · nama pegawai dan sekolah adalah data contoh
        </div>
      </div>
    </div>
  );
}
