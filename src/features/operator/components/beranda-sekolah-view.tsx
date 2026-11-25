'use client';

import React from 'react';
import Link from 'next/link';
import { TeralurIllustration } from '@/components/teralur-illustration';
import {
  IconChevronRight,
  IconAlertCircle,
  IconCalendar,
  IconBuilding,
  IconTrendingUp,
  IconSchool,
  IconClock,
  IconLoader2,
  IconSend
} from '@tabler/icons-react';
import { toast } from 'sonner';

const PERLU_TINDAKAN = [
  {
    nama: 'Dewi Anggraini, S.Pd.Gr.',
    kode: 'CUT-2026-0128 · Cuti sakit',
    status: 'Perlu Perbaikan',
    langkah: 'Unggah ulang surat keterangan dokter',
    aksi: 'Perbaiki',
    href: '/dashboard/cuti'
  },
  {
    nama: 'Ahmad Fauzi, S.Pd.',
    kode: 'PEN-2026-0031 · Pensiun',
    status: '2 berkas tidak valid',
    langkah: 'Ganti SK pangkat terakhir dan kartu keluarga',
    aksi: 'Perbaiki',
    href: '/dashboard/pensiun/unggah'
  },
  {
    nama: 'Rahmat Hidayat',
    kode: 'DPD-2026-0057 · Layanan Dapodik',
    status: 'Perlu Info Tambahan',
    langkah: 'Kirim tangkapan layar galat sinkronisasi',
    aksi: 'Buka',
    href: '/dashboard/layanan-dapodik'
  }
];

const PENGAJUAN_BERJALAN = [
  {
    nama: 'Siti Rahmawati, S.Pd.',
    kode: 'CUT-2026-0142 · Cuti',
    status: 'Menunggu Surat Fisik',
    tgl: '26 Okt 2026',
    href: '/dashboard/cuti'
  },
  {
    nama: 'Rahmat Hidayat',
    kode: 'CUT-2026-0119 · Cuti',
    status: 'Diajukan',
    tgl: '25 Okt 2026',
    href: '/dashboard/cuti'
  },
  {
    nama: 'Nur Aini Fitriani',
    kode: 'P3K-2026-0045 · Kinerja P3K PW',
    status: 'Menunggu TTD',
    tgl: '22 Okt 2026',
    href: '/dashboard/kinerja-p3k-pw'
  },
  {
    nama: 'Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.',
    kode: 'KP-2026-0018 · Kenaikan Pangkat',
    status: 'Diusulkan ke BKD',
    tgl: '21 Okt 2026',
    href: '/dashboard/kenaikan-pangkat'
  },
  {
    nama: 'Dewi Anggraini, S.Pd.Gr.',
    kode: 'KP-2026-0021 · Kenaikan Pangkat',
    status: 'Terverifikasi',
    tgl: '19 Okt 2026',
    href: '/dashboard/kenaikan-pangkat'
  }
];

export function BerandaSekolahView() {
  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Hero Banner */}
      <div className='bg-gradient-to-r from-white via-white to-[#e7eff2] rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6'>
        <div className='space-y-2'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Selamat pagi, Dedi
          </h1>
          <p className='text-xs sm:text-sm text-slate-600 max-w-md'>
            2 pengajuan perlu Anda perbaiki. Unggah ulang berkas sesuai catatan Sudin.
          </p>
          <p className='text-xs text-slate-400'>Selasa, 27 Oktober 2026 · SMP Negeri 45 Jakarta</p>
          <div className='pt-2'>
            <Link
              href='/dashboard/pensiun/status'
              className='inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#275162] hover:bg-[#1d3f4d] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs'
            >
              <span>Lihat yang perlu diperbaiki</span>
              <IconChevronRight className='w-4 h-4' />
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className='hidden md:block shrink-0'>
          <TeralurIllustration />
        </div>
      </div>

      {/* Perlu tindakan */}
      <div className='bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden'>
        <div className='px-5 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between'>
          <h2 className='text-base font-bold text-slate-900'>Perlu tindakan</h2>
          <span className='text-xs text-slate-400 font-medium'>3 pengajuan</span>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-slate-100 text-[11px] font-semibold text-slate-500 bg-slate-50/50'>
                <th className='py-3 px-5'>Pengajuan / guru</th>
                <th className='py-3 px-5'>Status</th>
                <th className='py-3 px-5'>Langkah berikutnya</th>
                <th className='py-3 px-5 text-right'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100 text-xs sm:text-sm'>
              {PERLU_TINDAKAN.map((row) => (
                <tr key={row.kode} className='hover:bg-slate-50/60 transition-colors'>
                  <td className='py-3.5 px-5'>
                    <p className='font-bold text-slate-900'>{row.nama}</p>
                    <p className='text-xs text-slate-500 mt-0.5'>{row.kode}</p>
                  </td>
                  <td className='py-3.5 px-5 whitespace-nowrap'>
                    <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold'>
                      <IconAlertCircle className='w-3.5 h-3.5' />
                      {row.status}
                    </span>
                  </td>
                  <td className='py-3.5 px-5 text-slate-700'>{row.langkah}</td>
                  <td className='py-3.5 px-5 text-right whitespace-nowrap'>
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
      </div>

      {/* 4 Quick Action Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {[
          {
            title: 'Ajukan cuti',
            sub: 'Cuti tahunan, sakit, alasan penting',
            icon: IconCalendar,
            href: '/dashboard/cuti'
          },
          {
            title: 'Ajukan pensiun',
            sub: 'Batas usia atau atas permintaan',
            icon: IconBuilding,
            href: '/dashboard/pensiun/buat'
          },
          {
            title: 'Kenaikan pangkat',
            sub: 'Usulan periode April dan Oktober',
            icon: IconTrendingUp,
            href: '/dashboard/kenaikan-pangkat'
          },
          {
            title: 'Layanan Dapodik',
            sub: 'Laporkan kendala data guru',
            icon: IconSchool,
            href: '/dashboard/layanan-dapodik'
          }
        ].map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className='bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs hover:border-[#005060]/40 transition-colors flex items-center justify-between gap-3 group'
            >
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 rounded-xl bg-[#f4f7f8] text-slate-600 group-hover:text-[#005060] flex items-center justify-center shrink-0'>
                  <Icon className='w-4 h-4' />
                </div>
                <div>
                  <p className='text-xs sm:text-sm font-bold text-slate-900'>{card.title}</p>
                  <p className='text-[11px] text-slate-500 mt-0.5'>{card.sub}</p>
                </div>
              </div>
              <IconChevronRight className='w-4 h-4 text-slate-400 group-hover:text-[#005060] shrink-0' />
            </Link>
          );
        })}
      </div>

      {/* Bottom 2-Column: Pengajuan berjalan + Masa pembaruan Anjab */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        <div className='lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden'>
          <div className='px-5 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between'>
            <h2 className='text-base font-bold text-slate-900'>Pengajuan berjalan</h2>
            <Link
              href='/dashboard/pensiun/status'
              className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:underline'
            >
              <span>Lihat semua</span>
              <IconChevronRight className='w-3.5 h-3.5' />
            </Link>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='border-b border-slate-100 text-[11px] font-semibold text-slate-500 bg-slate-50/50'>
                  <th className='py-3 px-5'>Pengajuan / guru</th>
                  <th className='py-3 px-5'>Status</th>
                  <th className='py-3 px-5'>Diperbarui</th>
                  <th className='py-3 px-5 text-right'></th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100 text-xs sm:text-sm'>
                {PENGAJUAN_BERJALAN.map((row) => (
                  <tr key={row.kode} className='hover:bg-slate-50/60 transition-colors'>
                    <td className='py-3.5 px-5'>
                      <p className='font-bold text-slate-900'>{row.nama}</p>
                      <p className='text-xs text-slate-500 mt-0.5'>{row.kode}</p>
                    </td>
                    <td className='py-3.5 px-5 whitespace-nowrap'>
                      {row.status === 'Menunggu Surat Fisik' || row.status === 'Menunggu TTD' ? (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold'>
                          <IconClock className='w-3.5 h-3.5' />
                          {row.status}
                        </span>
                      ) : row.status === 'Diusulkan ke BKD' ? (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                          <IconSend className='w-3.5 h-3.5' />
                          {row.status}
                        </span>
                      ) : (
                        <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
                          <IconLoader2 className='w-3.5 h-3.5' />
                          {row.status}
                        </span>
                      )}
                    </td>
                    <td className='py-3.5 px-5 text-slate-600 whitespace-nowrap'>{row.tgl}</td>
                    <td className='py-3.5 px-5 text-right whitespace-nowrap'>
                      <Link
                        href={row.href}
                        className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a]'
                      >
                        <span>Buka</span>
                        <IconChevronRight className='w-3.5 h-3.5' />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Card: Masa pembaruan Anjab */}
        <div className='lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm sm:text-base font-bold text-slate-900'>Masa pembaruan Anjab</h3>
            <span className='px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold'>
              Draf
            </span>
          </div>
          <p className='text-xs text-slate-500 leading-relaxed'>
            Perbarui data analisis jabatan SMP Negeri 45 sebelum tenggat.
          </p>
          <div className='grid grid-cols-2 gap-3 pt-1'>
            <div>
              <p className='text-[11px] text-slate-400'>Tenggat</p>
              <p className='text-xs sm:text-sm font-bold text-slate-900 mt-0.5'>5 Des 2026</p>
            </div>
            <div>
              <p className='text-[11px] text-slate-400'>Sisa waktu</p>
              <p className='text-xs sm:text-sm font-bold text-slate-900 mt-0.5'>39 hari</p>
            </div>
          </div>
          <div className='flex justify-end pt-2'>
            <button
              type='button'
              onClick={() => toast.info('Membuka formulir Analisis Jabatan')}
              className='px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors'
            >
              Perbarui data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
