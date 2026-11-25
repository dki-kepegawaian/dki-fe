'use client';

import React, { useState } from 'react';
import { IconSend, IconLoader2, IconAlertCircle, IconChevronRight } from '@tabler/icons-react';
import { toast } from 'sonner';

const KP_DATA = [
  {
    nama: 'Rahmat Hidayat',
    kode: 'KP-2027-0031',
    sekolah: 'SD Negeri Rawa Buaya 09',
    usulan: 'III/a → III/b',
    sub: 'Reguler · berkas 9/9 terunggah',
    status: 'Diajukan',
    aksi: 'Tinjau'
  },
  {
    nama: 'Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.',
    kode: 'KP-2027-0032',
    sekolah: 'SMA Negeri 16 Jakarta',
    usulan: 'IV/a → IV/b',
    sub: 'Fungsional · PAK 2026 terlampir',
    status: 'Diajukan',
    aksi: 'Tinjau'
  },
  {
    nama: 'Dewi Anggraini, S.Pd.Gr.',
    kode: 'KP-2027-0028',
    sekolah: 'SMK Negeri 13 Jakarta',
    usulan: 'III/b → III/c',
    sub: 'SKP 2025 belum ditandatangani',
    status: 'Perlu Perbaikan',
    aksi: 'Buka'
  },
  {
    nama: 'Siti Rahmawati, S.Pd.',
    kode: 'KP-2027-0025',
    sekolah: 'SMP Negeri 45 Jakarta',
    usulan: 'III/c → III/d',
    sub: 'Fungsional · berkas 9/9 valid',
    status: 'Terverifikasi',
    aksi: 'Buka'
  },
  {
    nama: 'Fajar Nugroho, S.Pd.',
    kode: 'KP-2027-0026',
    sekolah: 'SMP Negeri 45 Jakarta',
    usulan: 'III/b → III/c',
    sub: 'Reguler · berkas 9/9 valid',
    status: 'Terverifikasi',
    aksi: 'Buka'
  },
  {
    nama: 'Lestari Handayani, S.Pd.SD.',
    kode: 'KP-2027-0027',
    sekolah: 'SD Negeri Kembangan Selatan 05',
    usulan: 'III/a → III/b',
    sub: 'Reguler · berkas 9/9 valid',
    status: 'Terverifikasi',
    aksi: 'Buka'
  },
  {
    nama: 'Agus Prasetyo, S.Kom.',
    kode: 'KP-2027-0019',
    sekolah: 'SMK Negeri 13 Jakarta',
    usulan: 'III/c → III/d',
    sub: 'Dikirim ke BKD 20 Okt 2026',
    status: 'Diusulkan ke BKD',
    aksi: 'Buka'
  }
];

export function AntreanKenaikanPangkatView() {
  const [filter, setFilter] = useState('Semua');
  const filtered = KP_DATA.filter((d) => filter === 'Semua' || d.status === filter);

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Antrean Kenaikan Pangkat
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
            Usulan periode April 2027 · batas usul sekolah 15 Januari 2027
          </p>
        </div>

        <button
          type='button'
          onClick={() => toast.success('3 usulan siap dikirim ke BKD')}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 shadow-xs self-start sm:self-center'
        >
          <IconSend className='w-4 h-4' />
          <span>Kirim usulan ke BKD (3)</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Perlu diverifikasi</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>2</p>
          <p className='text-xs text-slate-400 mt-1'>Berkas usulan baru dari sekolah</p>
        </div>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Menunggu perbaikan sekolah</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>1</p>
          <p className='text-xs text-slate-400 mt-1'>Catatan sudah dikirim ke operator</p>
        </div>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Siap diusulkan ke BKD</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>3</p>
          <p className='text-xs text-slate-400 mt-1'>Terverifikasi, belum dikirim</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className='flex flex-wrap items-center gap-2'>
        {[
          { label: 'Semua', count: 7 },
          { label: 'Diajukan', count: 2 },
          { label: 'Perlu Perbaikan', count: 1 },
          { label: 'Terverifikasi', count: 3 },
          { label: 'Diusulkan ke BKD', count: 1 }
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
                <th className='py-3.5 px-5'>Usulan</th>
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
                    <p className='font-medium text-slate-800'>{row.usulan}</p>
                    <p
                      className={`text-xs mt-0.5 ${
                        row.status === 'Perlu Perbaikan' ? 'text-amber-600' : 'text-slate-500'
                      }`}
                    >
                      {row.sub}
                    </p>
                  </td>
                  <td className='py-4 px-5 whitespace-nowrap'>
                    {row.status === 'Diajukan' || row.status === 'Terverifikasi' ? (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                        <IconLoader2 className='w-3.5 h-3.5' />
                        {row.status}
                      </span>
                    ) : row.status === 'Perlu Perbaikan' ? (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold'>
                        <IconAlertCircle className='w-3.5 h-3.5' />
                        {row.status}
                      </span>
                    ) : (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                        <IconSend className='w-3.5 h-3.5' />
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
          Menampilkan {filtered.length} dari 7 · pengiriman ke BKD dilakukan di luar sistem melalui
          surat pengantar Sudin · data contoh
        </div>
      </div>
    </div>
  );
}
