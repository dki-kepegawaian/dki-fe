'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconArrowLeft,
  IconSend,
  IconCalendar,
  IconFileText,
  IconEye,
  IconCircleCheck,
  IconCheck
} from '@tabler/icons-react';
import { toast } from 'sonner';
import { MobileProgressBar } from './mobile-progress-bar';

const STEPPER_ITEMS = [
  { id: 1, title: 'Diajukan sekolah', status: 'completed' as const },
  { id: 2, title: 'Verifikasi berkas', status: 'completed' as const },
  {
    id: 3,
    title: 'Kirim usulan ke BKD',
    subtitle: 'Di luar sistem · 12 Nov',
    status: 'completed' as const
  },
  { id: 4, title: 'BKD terbitkan SK', status: 'completed' as const },
  { id: 5, title: 'Unggah SK', subtitle: 'Anda', status: 'active' as const }
];

export function UnggahSkView() {
  const [nomorSk, setNomorSk] = useState('882/3215/BKD/2026');
  const [tanggalSk, setTanggalSk] = useState('19 November 2026');
  const [tmtPensiun, setTmtPensiun] = useState('1 April 2027');

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Back Link */}
      <div>
        <Link
          href='/dashboard/pensiun/pengiriman-bkd'
          className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005060] hover:text-[#003d4a] transition-colors'
        >
          <IconArrowLeft className='w-4 h-4' />
          <span>Kembali ke pengajuan</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
          Unggah SK pensiun
        </h1>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          Catat SK dari BKD untuk menyelesaikan pengajuan.
        </p>
      </div>

      {/* Mobile Compact Progress */}
      <MobileProgressBar currentStep={5} label='Unggah SK' />

      {/* 2-Column Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left Column */}
        <div className='lg:col-span-8 space-y-6'>
          {/* Teacher Info Card */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
              <div>
                <h2 className='text-base font-bold text-slate-900'>Ahmad Fauzi, S.Pd.</h2>
                <p className='text-xs text-slate-500 mt-0.5'>
                  PEN-2026-0031 · SMP Negeri 45 Jakarta · NIP 19670305 199003 1 007
                </p>
              </div>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold self-start sm:self-center'>
                <IconSend className='w-3.5 h-3.5' />
                Diusulkan ke BKD
              </span>
            </div>

            <div className='bg-[#f1f5f7] rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <p className='text-xs text-slate-500'>Diusulkan ke BKD sejak</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>12 Nov 2026 · 7 hari</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Surat pengantar</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>
                  800.1.6.1/2214/SDP.I/XI/2026
                </p>
              </div>
            </div>
          </div>

          {/* Data SK dari BKD */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-5'>
            <h2 className='text-base font-bold text-slate-900'>Data SK dari BKD</h2>

            <div className='space-y-4'>
              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Nomor SK <span className='text-rose-500'>*</span>
                </label>
                <input
                  type='text'
                  value={nomorSk}
                  onChange={(e) => setNomorSk(e.target.value)}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                    Tanggal SK <span className='text-rose-500'>*</span>
                  </label>
                  <div className='relative'>
                    <IconCalendar className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
                    <input
                      type='text'
                      value={tanggalSk}
                      onChange={(e) => setTanggalSk(e.target.value)}
                      className='w-full pl-10 pr-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                    TMT pensiun <span className='text-rose-500'>*</span>
                  </label>
                  <div className='relative'>
                    <IconCalendar className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
                    <input
                      type='text'
                      value={tmtPensiun}
                      onChange={(e) => setTmtPensiun(e.target.value)}
                      className='w-full pl-10 pr-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                    />
                  </div>
                </div>
              </div>

              {/* Uploaded SK File */}
              <div className='flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/60'>
                <div className='flex items-center gap-3 min-w-0'>
                  <div className='w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 shrink-0'>
                    <IconFileText className='w-4 h-4' />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-sm font-semibold text-slate-800 truncate'>
                      SK pensiun (hasil pindai)
                    </p>
                    <p className='text-xs text-slate-500 truncate'>
                      SK_Pensiun_Ahmad_Fauzi.pdf · 1,1 MB · 2 halaman
                    </p>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => toast.info('Pratinjau SK_Pensiun_Ahmad_Fauzi.pdf')}
                  className='inline-flex items-center gap-1.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a] shrink-0 px-2 py-1'
                >
                  <IconEye className='w-4 h-4' />
                  <span>Lihat</span>
                </button>
              </div>

              {/* Success Notice */}
              <div className='bg-[#e8f7ef] border border-[#bde8d0] rounded-xl p-4 flex items-start gap-3'>
                <IconCircleCheck className='w-5 h-5 text-[#15803d] shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs sm:text-sm font-bold text-[#14532d]'>Setelah disimpan</p>
                  <p className='text-xs text-[#166534] mt-0.5'>
                    Status menjadi Selesai, SK diarsipkan, dan operator SMP Negeri 45 Jakarta dapat
                    mengunduhnya.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-end gap-3 pt-2'>
              <button
                type='button'
                onClick={() => toast.info('Dibatalkan')}
                className='px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 transition-colors'
              >
                Batal
              </button>
              <button
                type='button'
                onClick={() => toast.success('SK Pensiun berhasil disimpan & pengajuan selesai!')}
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#005060] hover:bg-[#003d4a] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs'
              >
                <IconCheck className='w-4 h-4' />
                <span>Simpan SK & selesaikan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Progres */}
        <div className='lg:col-span-4'>
          <div className='bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs'>
            <h3 className='text-base font-bold text-slate-900 mb-6'>Progres</h3>
            <div className='relative'>
              {STEPPER_ITEMS.map((step, index) => {
                const isLast = index === STEPPER_ITEMS.length - 1;
                return (
                  <div key={step.id} className='relative flex items-start gap-3.5 pb-6 last:pb-0'>
                    {!isLast && (
                      <div
                        className={`absolute left-[13px] top-[26px] bottom-0 w-[2px] ${
                          step.status === 'completed' ? 'bg-emerald-200' : 'bg-slate-200'
                        }`}
                      />
                    )}
                    <div className='relative z-10 shrink-0'>
                      {step.status === 'completed' && (
                        <div className='w-7 h-7 rounded-full bg-[#d5f3e4] text-[#128054] flex items-center justify-center font-bold'>
                          <IconCheck className='w-4 h-4 stroke-[3]' />
                        </div>
                      )}
                      {step.status === 'active' && (
                        <div className='w-7 h-7 rounded-full bg-[#005060] text-white flex items-center justify-center font-bold text-xs shadow-xs'>
                          {step.id}
                        </div>
                      )}
                    </div>
                    <div className='pt-0.5'>
                      <p
                        className={`text-sm leading-tight ${
                          step.status === 'active'
                            ? 'font-bold text-slate-900'
                            : 'font-medium text-slate-800'
                        }`}
                      >
                        {step.title}
                      </p>
                      {step.subtitle && (
                        <p className='text-xs mt-0.5 text-slate-400'>{step.subtitle}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
