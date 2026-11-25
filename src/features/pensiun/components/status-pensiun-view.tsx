'use client';

import React from 'react';
import Link from 'next/link';
import {
  IconPlus,
  IconAlertCircle,
  IconX,
  IconEye,
  IconUpload,
  IconCheck,
  IconFileText,
  IconDownload,
  IconChevronRight,
  IconSend,
  IconLoader2
} from '@tabler/icons-react';
import { toast } from 'sonner';

const TIMELINE_STEPS = ['Diajukan', 'Terverifikasi', 'Diusulkan ke BKD', 'SK terbit', 'Selesai'];

const TABLE_ROWS = [
  {
    nomor: 'PEN-2026-0035',
    nama: 'Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.',
    nip: '19800915 200501 2 011',
    tmt: '1 Jan 2027 (atas permintaan sendiri)',
    status: 'Perlu Perbaikan' as const,
    actionLabel: 'Perbaiki',
    href: '/dashboard/pensiun/unggah'
  },
  {
    nomor: 'PEN-2026-0038',
    nama: 'Drs. Bambang Sutrisno',
    nip: '19670812 199103 1 004',
    tmt: '1 Sep 2027',
    status: 'Diusulkan ke BKD' as const,
    actionLabel: 'Buka',
    href: '/dashboard/pensiun/pengiriman-bkd'
  },
  {
    nomor: 'PEN-2026-0041',
    nama: 'Sri Wahyuni, S.Pd.',
    nip: '19670420 199203 2 006',
    tmt: '1 Mei 2027',
    status: 'Diajukan' as const,
    actionLabel: 'Buka',
    href: '/dashboard/pensiun/verifikasi'
  },
  {
    nomor: 'PEN-2026-0031',
    nama: 'Ahmad Fauzi, S.Pd.',
    nip: '19670305 199003 1 007',
    tmt: '1 Apr 2027',
    status: 'Selesai' as const,
    actionLabel: 'Unduh SK',
    href: '/dashboard/pensiun/unggah-sk'
  }
];

export function StatusPensiunView() {
  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Header Row */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Status pensiun sekolah
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
            SMP Negeri 45 Jakarta · 3 pengajuan aktif tahun 2026
          </p>
        </div>

        <Link
          href='/dashboard/pensiun/buat'
          className='inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs transition-colors self-start sm:self-center'
        >
          <IconPlus className='w-4 h-4' />
          <span>Buat pengajuan</span>
        </Link>
      </div>

      {/* Card 1: Perlu Perbaikan */}
      <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4'>
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
          <div>
            <h2 className='text-base font-bold text-slate-900'>
              Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.
            </h2>
            <p className='text-xs text-slate-500 mt-0.5'>
              PEN-2026-0035 · NIP 19800915 200501 2 011 · diajukan 5 Nov 2026
            </p>
          </div>
          <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold self-start sm:self-center'>
            <IconAlertCircle className='w-3.5 h-3.5' />
            Perlu Perbaikan
          </span>
        </div>

        {/* Warning Box */}
        <div className='bg-[#fdf6df] border border-[#f5e3a4] rounded-xl p-4 space-y-3'>
          <p className='text-xs sm:text-sm font-bold text-amber-900'>
            2 berkas tidak valid menurut Sudin (dinilai 10 Nov 2026)
          </p>
          <div className='space-y-2.5'>
            <div className='flex items-start gap-2.5'>
              <IconX className='w-4 h-4 text-rose-600 shrink-0 mt-0.5' />
              <div>
                <p className='text-xs sm:text-sm font-semibold text-slate-900'>
                  SK kenaikan pangkat terakhir
                </p>
                <p className='text-xs text-slate-600'>
                  Yang diunggah SK pangkat III/d, bukan SK IV/a terakhir.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-2.5'>
              <IconX className='w-4 h-4 text-rose-600 shrink-0 mt-0.5' />
              <div>
                <p className='text-xs sm:text-sm font-semibold text-slate-900'>Karsu / Karis</p>
                <p className='text-xs text-slate-600'>Karsu belum dilegalisir instansi.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          <Link
            href='/dashboard/pensiun/verifikasi'
            className='inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors'
          >
            <IconEye className='w-4 h-4 text-slate-600' />
            <span>Lihat detail</span>
          </Link>
          <Link
            href='/dashboard/pensiun/unggah'
            className='inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#005060] hover:bg-[#003d4a] text-white text-xs font-semibold transition-colors shadow-xs'
          >
            <IconUpload className='w-4 h-4' />
            <span>Unggah ulang 2 berkas</span>
          </Link>
        </div>
      </div>

      {/* Section: Selesai dan berjalan */}
      <div className='space-y-4'>
        <h2 className='text-base font-bold text-slate-900'>Selesai dan berjalan</h2>

        {/* Highlight Card: Selesai */}
        <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-5'>
          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
            <div>
              <h3 className='text-base font-bold text-slate-900'>Ahmad Fauzi, S.Pd.</h3>
              <p className='text-xs text-slate-500 mt-0.5'>
                PEN-2026-0031 · NIP 19670305 199003 1 007 · Pembina, IV/a
              </p>
            </div>
            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold self-start sm:self-center'>
              <IconCheck className='w-3.5 h-3.5 stroke-[3]' />
              Selesai
            </span>
          </div>

          {/* Horizontal Timeline */}
          <div className='hidden sm:flex items-center justify-between relative px-2 pt-1'>
            <div className='absolute left-6 right-6 top-3.5 h-[2px] bg-emerald-500/70' />
            {TIMELINE_STEPS.map((label) => (
              <div key={label} className='relative z-10 flex flex-col items-center gap-1.5'>
                <div className='w-6 h-6 rounded-full bg-[#d5f3e4] text-[#128054] flex items-center justify-center'>
                  <IconCheck className='w-3.5 h-3.5 stroke-[3]' />
                </div>
                <span className='text-xs font-semibold text-slate-700'>{label}</span>
              </div>
            ))}
          </div>

          {/* SK Download Banner */}
          <div className='bg-[#f1f5f7] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
            <div className='flex items-center gap-3'>
              <div className='w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0'>
                <IconFileText className='w-4 h-4' />
              </div>
              <div>
                <p className='text-sm font-bold text-slate-900'>SK pensiun No. 882/3215/BKD/2026</p>
                <p className='text-xs text-slate-500'>TMT pensiun 1 April 2027</p>
              </div>
            </div>
            <button
              type='button'
              onClick={() => toast.success('Mengunduh SK_Pensiun_Ahmad_Fauzi.pdf...')}
              className='inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#005060] hover:bg-[#003d4a] text-white text-xs font-semibold transition-colors shadow-xs self-start sm:self-center'
            >
              <IconDownload className='w-4 h-4' />
              <span>Unduh SK pensiun</span>
            </button>
          </div>
        </div>

        {/* Mobile Card List (< md) */}
        <div className='md:hidden bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden'>
          {TABLE_ROWS.map((row) => (
            <Link
              key={row.nomor}
              href={row.href}
              className='flex items-center justify-between gap-3 p-4 hover:bg-slate-50/60 transition-colors'
            >
              <div className='space-y-1.5 min-w-0'>
                <p className='text-xs font-bold text-slate-900'>{row.nomor}</p>
                <p className='text-xs text-slate-600 truncate'>
                  {row.nama} · {row.nip}
                </p>
                <div>
                  {row.status === 'Perlu Perbaikan' && (
                    <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold'>
                      <IconAlertCircle className='w-3 h-3' />
                      Perlu Perbaikan
                    </span>
                  )}
                  {row.status === 'Diusulkan ke BKD' && (
                    <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-semibold'>
                      <IconSend className='w-3 h-3' />
                      Diusulkan ke BKD
                    </span>
                  )}
                  {row.status === 'Diajukan' && (
                    <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-semibold'>
                      <IconLoader2 className='w-3 h-3' />
                      Diajukan
                    </span>
                  )}
                  {row.status === 'Selesai' && (
                    <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold'>
                      <IconCheck className='w-3 h-3' />
                      Selesai
                    </span>
                  )}
                </div>
              </div>
              <IconChevronRight className='w-4 h-4 text-slate-400 shrink-0' />
            </Link>
          ))}
        </div>

        {/* Desktop Table Card (>= md) */}
        <div className='hidden md:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='border-b border-slate-100 text-[11px] font-semibold text-slate-500 bg-slate-50/50'>
                  <th className='py-3.5 px-5'>Nomor</th>
                  <th className='py-3.5 px-5'>Guru</th>
                  <th className='py-3.5 px-5'>TMT pensiun</th>
                  <th className='py-3.5 px-5'>Status</th>
                  <th className='py-3.5 px-5 text-right'>Aksi</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100 text-xs sm:text-sm'>
                {TABLE_ROWS.map((row) => (
                  <tr key={row.nomor} className='hover:bg-slate-50/60 transition-colors'>
                    <td className='py-4 px-5 font-medium text-slate-700 whitespace-nowrap'>
                      {row.nomor}
                    </td>
                    <td className='py-4 px-5'>
                      <p className='font-bold text-slate-900'>{row.nama}</p>
                      <p className='text-xs text-slate-500 mt-0.5'>{row.nip}</p>
                    </td>
                    <td className='py-4 px-5 text-slate-700'>{row.tmt}</td>
                    <td className='py-4 px-5 whitespace-nowrap'>
                      {row.status === 'Perlu Perbaikan' && (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold'>
                          <IconAlertCircle className='w-3.5 h-3.5' />
                          Perlu Perbaikan
                        </span>
                      )}
                      {row.status === 'Diusulkan ke BKD' && (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                          <IconSend className='w-3.5 h-3.5' />
                          Diusulkan ke BKD
                        </span>
                      )}
                      {row.status === 'Diajukan' && (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                          <IconLoader2 className='w-3.5 h-3.5' />
                          Diajukan
                        </span>
                      )}
                      {row.status === 'Selesai' && (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold'>
                          <IconCheck className='w-3.5 h-3.5' />
                          Selesai
                        </span>
                      )}
                    </td>
                    <td className='py-4 px-5 text-right whitespace-nowrap'>
                      <Link
                        href={row.href}
                        className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a]'
                      >
                        <span>{row.actionLabel}</span>
                        <IconChevronRight className='w-3.5 h-3.5' />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
