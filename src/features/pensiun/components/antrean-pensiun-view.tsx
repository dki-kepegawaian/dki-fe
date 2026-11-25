'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconDownload,
  IconLoader2,
  IconAlertCircle,
  IconSend,
  IconCheck,
  IconChevronRight
} from '@tabler/icons-react';
import { toast } from 'sonner';

const PENSIUN_DATA = [
  {
    nama: 'Drs. Sutrisno Wibowo, M.Pd.',
    kode: 'PEN-2026-0024',
    sekolah: 'SMA Negeri 16 Jakarta',
    tmt: '1 Februari 2027',
    sub: 'Berkas 14/14 terunggah',
    status: 'Diajukan',
    aksi: 'Tinjau',
    href: '/dashboard/pensiun/verifikasi'
  },
  {
    nama: 'Hj. Rukmini, S.Pd.SD.',
    kode: 'PEN-2026-0025',
    sekolah: 'SD Negeri Rawa Buaya 09',
    tmt: '1 Maret 2027',
    sub: 'Berkas 14/14 terunggah',
    status: 'Diajukan',
    aksi: 'Tinjau',
    href: '/dashboard/pensiun/verifikasi'
  },
  {
    nama: 'Dewi Anggraini, S.Pd.Gr.',
    kode: 'PEN-2026-0022',
    sekolah: 'SMK Negeri 13 Jakarta',
    tmt: '1 Januari 2027',
    sub: '1 berkas tidak valid',
    status: 'Perlu Perbaikan',
    aksi: 'Buka',
    href: '/dashboard/pensiun/verifikasi'
  },
  {
    nama: 'Bambang Supriyadi, S.Pd.',
    kode: 'PEN-2026-0023',
    sekolah: 'SMP Negeri 45 Jakarta',
    tmt: '1 Januari 2027',
    sub: '2 berkas belum diunggah',
    status: 'Perlu Perbaikan',
    aksi: 'Buka',
    href: '/dashboard/pensiun/verifikasi'
  },
  {
    nama: 'Ahmad Fauzi, S.Pd.',
    kode: 'PEN-2026-0021',
    sekolah: 'SMA Negeri 16 Jakarta',
    tmt: '1 Desember 2026',
    sub: 'Berkas 14/14 valid',
    status: 'Terverifikasi',
    aksi: 'Buka',
    href: '/dashboard/pensiun/pengiriman-bkd'
  },
  {
    nama: 'Yuliana Siregar, S.Pd.',
    kode: 'PEN-2026-0018',
    sekolah: 'SD Negeri Kembangan Selatan 05',
    tmt: '1 Desember 2026',
    sub: 'Dikirim ke BKD 14 Okt 2026',
    status: 'Diusulkan ke BKD',
    aksi: 'Buka',
    href: '/dashboard/pensiun/unggah-sk'
  },
  {
    nama: 'Suharti, S.Pd.',
    kode: 'PEN-2026-0016',
    sekolah: 'SMP Negeri 45 Jakarta',
    tmt: '1 November 2026',
    sub: 'SK pensiun diterima 20 Okt',
    status: 'Selesai',
    aksi: 'Buka',
    href: '/dashboard/pensiun/status'
  }
];

export function AntreanPensiunView() {
  const [filter, setFilter] = useState('Semua');
  const filtered = PENSIUN_DATA.filter((d) => filter === 'Semua' || d.status === filter);

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Antrean Pensiun
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
            Pengajuan pensiun guru Jakarta Barat · 14 berkas per pengajuan
          </p>
        </div>

        <button
          type='button'
          onClick={() => toast.success('Mengunduh rekap antrean pensiun...')}
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
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>2</p>
          <p className='text-xs text-slate-400 mt-1'>Berkas lengkap menunggu verifikasi</p>
        </div>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Menunggu perbaikan sekolah</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>2</p>
          <p className='text-xs text-slate-400 mt-1'>Catatan sudah dikirim ke operator</p>
        </div>
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs'>
          <p className='text-xs text-slate-500 font-medium'>Di BKD</p>
          <p className='text-2xl font-extrabold text-slate-900 mt-1'>1</p>
          <p className='text-xs text-slate-400 mt-1'>Usulan dikirim, menunggu SK pensiun</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className='flex flex-wrap items-center gap-2'>
        {[
          { label: 'Semua', count: 7 },
          { label: 'Diajukan', count: 2 },
          { label: 'Perlu Perbaikan', count: 2 },
          { label: 'Terverifikasi', count: 1 },
          { label: 'Diusulkan ke BKD', count: 1 },
          { label: 'Selesai', count: 1 }
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

      {/* Mobile Card List (< md) */}
      <div className='md:hidden bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden'>
        {filtered.map((row) => (
          <Link
            key={row.kode}
            href={row.href}
            className='flex items-center justify-between gap-3 p-4 hover:bg-slate-50/60 transition-colors'
          >
            <div className='space-y-1.5 min-w-0'>
              <p className='text-sm font-bold text-slate-900 truncate'>{row.nama}</p>
              <p className='text-xs text-slate-500 truncate'>
                {row.kode} · {row.sekolah}
              </p>
              <div>
                {row.status === 'Diajukan' || row.status === 'Terverifikasi' ? (
                  <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-semibold'>
                    <IconLoader2 className='w-3 h-3' />
                    {row.status}
                  </span>
                ) : row.status === 'Perlu Perbaikan' ? (
                  <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold'>
                    <IconAlertCircle className='w-3 h-3' />
                    {row.status}
                  </span>
                ) : row.status === 'Diusulkan ke BKD' ? (
                  <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-semibold'>
                    <IconSend className='w-3 h-3' />
                    {row.status}
                  </span>
                ) : (
                  <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold'>
                    <IconCheck className='w-3 h-3' />
                    {row.status}
                  </span>
                )}
              </div>
            </div>
            <IconChevronRight className='w-4 h-4 text-slate-400 shrink-0' />
          </Link>
        ))}
      </div>

      {/* Desktop Table (>= md) */}
      <div className='hidden md:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-slate-100 text-[11px] font-semibold text-slate-500 bg-slate-50/50'>
                <th className='py-3.5 px-5'>Pegawai · nomor</th>
                <th className='py-3.5 px-5'>Sekolah</th>
                <th className='py-3.5 px-5'>TMT pensiun</th>
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
                    <p className='font-medium text-slate-800'>{row.tmt}</p>
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
                    ) : row.status === 'Diusulkan ke BKD' ? (
                      <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                        <IconSend className='w-3.5 h-3.5' />
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
                    <Link
                      href={row.href}
                      className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a]'
                    >
                      <span>{row.aksi}</span>
                      <IconChevronRight className='w-3.5 h-3.5' />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='px-5 py-3 border-t border-slate-100 text-[11px] text-slate-400'>
          Menampilkan {filtered.length} dari 7 · nama pegawai dan sekolah adalah data contoh
        </div>
      </div>
    </div>
  );
}
