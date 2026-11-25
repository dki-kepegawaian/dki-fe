'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IconAlertCircle, IconClock, IconChevronRight } from '@tabler/icons-react';

type TugasStatus = 'Perlu tindakan' | 'Menunggu fisik' | 'Menunggu TTD';

const TUGAS_DATA = [
  {
    nama: 'Siti Rahmawati, S.Pd.',
    kode: 'CUT-2026-0142',
    modul: 'Cuti',
    tindakLanjut: 'Periksa berkas digital',
    status: 'Perlu tindakan' as TugasStatus,
    tenggat: '26 Okt 2026',
    tenggatSub: 'Terlewat 1 hari',
    overdue: true,
    aksi: 'Tinjau',
    href: '/dashboard/cuti'
  },
  {
    nama: 'Dewi Anggraini, S.Pd.Gr.',
    kode: 'PEN-2026-0022',
    modul: 'Pensiun',
    tindakLanjut: 'Periksa catatan per berkas',
    status: 'Perlu tindakan' as TugasStatus,
    tenggat: '27 Okt 2026',
    tenggatSub: 'Hari ini',
    overdue: false,
    aksi: 'Tinjau',
    href: '/dashboard/pensiun/verifikasi'
  },
  {
    nama: 'Ahmad Fauzi, S.Pd.',
    kode: 'CUT-2026-0140',
    modul: 'Cuti',
    tindakLanjut: 'Terima surat fisik & nota dinas',
    status: 'Menunggu fisik' as TugasStatus,
    tenggat: '25 Okt 2026',
    tenggatSub: 'Terlewat 2 hari',
    overdue: true,
    aksi: 'Tinjau',
    href: '/dashboard/cuti'
  },
  {
    nama: 'Siti Rahmawati, S.Pd.',
    kode: '0187/PK.01.02/2027',
    modul: 'Surat & Arsip',
    tindakLanjut: 'Unggah pindaian surat bertanda tangan',
    status: 'Menunggu TTD' as TugasStatus,
    tenggat: '28 Okt 2026',
    tenggatSub: 'Besok',
    overdue: false,
    aksi: 'Unggah',
    href: '/dashboard/pensiun/unggah-sk'
  },
  {
    nama: 'Rahmat Hidayat',
    kode: 'KP-2027-0031',
    modul: 'Kenaikan Pangkat',
    tindakLanjut: 'Verifikasi berkas usulan periode April',
    status: 'Perlu tindakan' as TugasStatus,
    tenggat: '29 Okt 2026',
    tenggatSub: '2 hari lagi',
    overdue: false,
    aksi: 'Tinjau',
    href: '/dashboard/kenaikan-pangkat'
  },
  {
    nama: 'Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.',
    kode: 'CUT-2026-0138',
    modul: 'Cuti',
    tindakLanjut: 'Terima surat fisik dari sekolah',
    status: 'Menunggu fisik' as TugasStatus,
    tenggat: '30 Okt 2026',
    tenggatSub: '3 hari lagi',
    overdue: false,
    aksi: 'Tinjau',
    href: '/dashboard/cuti'
  },
  {
    nama: 'Nur Aini Fitriani',
    kode: 'P3K-2026-0112',
    modul: 'Kinerja P3K PW',
    tindakLanjut: 'Unggah pindaian penilaian bertanda tangan',
    status: 'Menunggu TTD' as TugasStatus,
    tenggat: '3 Nov 2026',
    tenggatSub: '7 hari lagi',
    overdue: false,
    aksi: 'Unggah',
    href: '/dashboard/pensiun/unggah-sk'
  }
];

export function TugasSayaView() {
  const [filter, setFilter] = useState<'Semua' | TugasStatus>('Semua');
  const [modulFilter, setModulFilter] = useState<string>('Semua');

  const filtered = TUGAS_DATA.filter((item) => {
    const matchStatus = filter === 'Semua' || item.status === filter;
    const matchModul = modulFilter === 'Semua' || item.modul === modulFilter;
    return matchStatus && matchModul;
  });

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
          Tugas Saya
        </h1>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          7 tugas lintas modul · urut menurut tenggat terdekat
        </p>
      </div>

      {/* Filter Bar */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
        <div className='flex flex-wrap items-center gap-2'>
          {[
            { label: 'Semua', count: 7 },
            { label: 'Perlu tindakan', count: 3 },
            { label: 'Menunggu fisik', count: 2 },
            { label: 'Menunggu TTD', count: 2 }
          ].map((tab) => {
            const active = filter === tab.label;
            return (
              <button
                key={tab.label}
                type='button'
                onClick={() => setFilter(tab.label as typeof filter)}
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

        <select
          value={modulFilter}
          onChange={(e) => setModulFilter(e.target.value)}
          className='px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none self-start sm:self-center'
        >
          <option value='Semua'>Modul: Semua</option>
          <option value='Cuti'>Modul: Cuti</option>
          <option value='Pensiun'>Modul: Pensiun</option>
          <option value='Kenaikan Pangkat'>Modul: Kenaikan Pangkat</option>
          <option value='Surat & Arsip'>Modul: Surat & Arsip</option>
        </select>
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
                {row.kode} · {row.modul}
              </p>
              <div>
                {row.status === 'Perlu tindakan' ? (
                  <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold'>
                    <IconAlertCircle className='w-3 h-3' />
                    Perlu tindakan
                  </span>
                ) : (
                  <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-semibold'>
                    <IconClock className='w-3 h-3' />
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
                <th className='py-3.5 px-5'>Pengajuan / pegawai</th>
                <th className='py-3.5 px-5'>Modul</th>
                <th className='py-3.5 px-5'>Tindak lanjut</th>
                <th className='py-3.5 px-5'>Tenggat</th>
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
                  <td className='py-4 px-5 text-slate-700 font-medium whitespace-nowrap'>
                    {row.modul}
                  </td>
                  <td className='py-4 px-5 space-y-1.5'>
                    <p className='text-slate-800 font-medium'>{row.tindakLanjut}</p>
                    {row.status === 'Perlu tindakan' ? (
                      <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold'>
                        <IconAlertCircle className='w-3 h-3' />
                        Perlu tindakan
                      </span>
                    ) : (
                      <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-semibold'>
                        <IconClock className='w-3 h-3' />
                        {row.status}
                      </span>
                    )}
                  </td>
                  <td className='py-4 px-5 whitespace-nowrap'>
                    <p
                      className={`font-semibold ${row.overdue ? 'text-rose-600' : 'text-slate-800'}`}
                    >
                      {row.tenggat}
                    </p>
                    <p className={`text-xs ${row.overdue ? 'text-rose-500' : 'text-slate-400'}`}>
                      {row.tenggatSub}
                    </p>
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
          Tugas muncul otomatis dari semua modul sesuai mandat Jakarta Barat · data contoh
        </div>
      </div>
    </div>
  );
}
