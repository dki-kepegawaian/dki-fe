'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconCheck,
  IconAlertCircle,
  IconLoader2,
  IconClock,
  IconCalendar,
  IconChevronRight
} from '@tabler/icons-react';
import { toast } from 'sonner';

interface NotifItem {
  id: number;
  group: 'Hari ini' | 'Kemarin' | 'Minggu ini';
  title: string;
  time: string;
  unread: boolean;
  type: 'warning' | 'info' | 'clock' | 'success' | 'calendar';
  href: string;
}

const INITIAL_NOTIFS: NotifItem[] = [
  {
    id: 1,
    group: 'Hari ini',
    title: 'Tenggat pemeriksaan CUT-2026-0142 (Siti Rahmawati, S.Pd.) terlewat 1 hari.',
    time: '08.00',
    unread: true,
    type: 'warning',
    href: '/dashboard/cuti'
  },
  {
    id: 2,
    group: 'Hari ini',
    title:
      'SMP Negeri 45 Jakarta mengajukan cuti tahunan untuk Siti Rahmawati, S.Pd. Berkas digital siap diperiksa.',
    time: '07.52',
    unread: true,
    type: 'info',
    href: '/dashboard/cuti'
  },
  {
    id: 3,
    group: 'Hari ini',
    title:
      'SD Negeri Rawa Buaya 09 mengirim usulan kenaikan pangkat Rahmat Hidayat (KP-2027-0031).',
    time: '07.45',
    unread: true,
    type: 'info',
    href: '/dashboard/kenaikan-pangkat'
  },
  {
    id: 4,
    group: 'Hari ini',
    title:
      'Surat 0187/PK.01.02/2027 menunggu tanda tangan basah Kepala Sudin. Unggah pindaian setelah ditandatangani.',
    time: '07.30',
    unread: true,
    type: 'clock',
    href: '/dashboard/tugas-saya'
  },
  {
    id: 5,
    group: 'Kemarin',
    title: 'SK pensiun Suharti, S.Pd. (PEN-2026-0016) diterima dari BKD dan sudah diarsipkan.',
    time: '16.20',
    unread: false,
    type: 'success',
    href: '/dashboard/pensiun/antrean'
  },
  {
    id: 6,
    group: 'Kemarin',
    title: 'SMK Negeri 13 Jakarta mengunggah ulang 1 berkas perbaikan untuk PEN-2026-0022.',
    time: '14.05',
    unread: false,
    type: 'info',
    href: '/dashboard/pensiun/verifikasi'
  },
  {
    id: 7,
    group: 'Kemarin',
    title: 'SMA Negeri 16 Jakarta menjadwalkan antar surat fisik CUT-2026-0140 pada 28 Oktober.',
    time: '10.30',
    unread: false,
    type: 'clock',
    href: '/dashboard/cuti'
  },
  {
    id: 8,
    group: 'Minggu ini',
    title:
      'Usulan KP-2027-0028 (Dewi Anggraini, S.Pd.Gr.) dikembalikan ke sekolah: SKP 2025 belum ditandatangani.',
    time: 'Sab, 24 Okt',
    unread: false,
    type: 'warning',
    href: '/dashboard/kenaikan-pangkat'
  },
  {
    id: 9,
    group: 'Minggu ini',
    title:
      'Cuti Rahmat Hidayat (CUT-2026-0124) disetujui pejabat dan surat keputusan dikirim ke sekolah.',
    time: 'Jum, 23 Okt',
    unread: false,
    type: 'success',
    href: '/dashboard/cuti'
  },
  {
    id: 10,
    group: 'Minggu ini',
    title: 'Masa pembaruan Analisis Jabatan 2027 dibuka hingga 30 November 2026.',
    time: 'Kam, 22 Okt',
    unread: false,
    type: 'calendar',
    href: '/dashboard/tugas-saya'
  }
];

export function NotifikasiView() {
  const [notifs, setNotifs] = useState<NotifItem[]>(INITIAL_NOTIFS);
  const unreadCount = notifs.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, unread: false })));
    toast.success('Semua notifikasi ditandai sudah dibaca');
  };

  const groups: Array<NotifItem['group']> = ['Hari ini', 'Kemarin', 'Minggu ini'];

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Notifikasi
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
            {unreadCount} belum dibaca · disimpan 30 hari
          </p>
        </div>

        <button
          type='button'
          onClick={markAllRead}
          className='inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 shadow-xs self-start sm:self-center'
        >
          <IconCheck className='w-4 h-4 text-slate-600' />
          <span>Tandai semua dibaca</span>
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left List */}
        <div className='lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-6'>
          {groups.map((grp) => {
            const list = notifs.filter((n) => n.group === grp);
            return (
              <div key={grp} className='space-y-2'>
                <p className='text-xs font-semibold text-slate-400'>{grp}</p>
                <div className='divide-y divide-slate-100'>
                  {list.map((item) => (
                    <div key={item.id} className='py-3.5 flex items-start justify-between gap-4'>
                      <div className='flex items-start gap-3 min-w-0'>
                        <div className='pt-2 w-2 shrink-0'>
                          {item.unread && (
                            <span className='block w-1.5 h-1.5 rounded-full bg-[#005060]' />
                          )}
                        </div>
                        <div className='shrink-0 mt-0.5'>
                          {item.type === 'warning' && (
                            <div className='w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center'>
                              <IconAlertCircle className='w-4 h-4' />
                            </div>
                          )}
                          {item.type === 'info' && (
                            <div className='w-7 h-7 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center'>
                              <IconLoader2 className='w-4 h-4' />
                            </div>
                          )}
                          {item.type === 'clock' && (
                            <div className='w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center'>
                              <IconClock className='w-4 h-4' />
                            </div>
                          )}
                          {item.type === 'success' && (
                            <div className='w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center'>
                              <IconCheck className='w-4 h-4' />
                            </div>
                          )}
                          {item.type === 'calendar' && (
                            <div className='w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center'>
                              <IconCalendar className='w-4 h-4' />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className='text-xs sm:text-sm font-medium text-slate-800 leading-snug'>
                            {item.title}
                          </p>
                          <p className='text-[11px] text-slate-400 mt-1'>{item.time}</p>
                        </div>
                      </div>

                      <Link
                        href={item.href}
                        className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a] shrink-0 pt-1'
                      >
                        <span>Buka</span>
                        <IconChevronRight className='w-3.5 h-3.5' />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Summary Card */}
        <div className='lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4'>
          <h3 className='text-base font-bold text-slate-900'>Belum dibaca</h3>
          <div className='space-y-2.5 text-xs sm:text-sm'>
            <div className='flex items-center justify-between text-slate-700'>
              <span>Cuti</span>
              <span className='font-bold text-slate-900'>2</span>
            </div>
            <div className='flex items-center justify-between text-slate-700'>
              <span>Kenaikan Pangkat</span>
              <span className='font-bold text-slate-900'>1</span>
            </div>
            <div className='flex items-center justify-between text-slate-700'>
              <span>Surat & Arsip</span>
              <span className='font-bold text-slate-900'>1</span>
            </div>
          </div>
          <p className='text-[11px] text-slate-400 pt-2 border-t border-slate-100 leading-relaxed'>
            Notifikasi dikirim sesuai mandat wilayah Jakarta Barat. Salinan juga dikirim ke email
            dinas.
          </p>
        </div>
      </div>
    </div>
  );
}
