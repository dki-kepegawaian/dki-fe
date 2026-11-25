'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconArrowLeft,
  IconSend,
  IconDownload,
  IconFileText,
  IconCalendar,
  IconEye,
  IconCheck,
  IconLoader2
} from '@tabler/icons-react';
import { toast } from 'sonner';
import { MobileProgressBar } from './mobile-progress-bar';

const STEPPER_ITEMS = [
  { id: 1, title: 'Diajukan sekolah', status: 'completed' as const },
  { id: 2, title: 'Verifikasi berkas', status: 'completed' as const },
  {
    id: 3,
    title: 'Kirim usulan ke BKD',
    subtitle: 'Anda · di luar sistem',
    status: 'active' as const
  },
  { id: 4, title: 'BKD terbitkan SK', subtitle: 'Di luar sistem', status: 'pending' as const },
  { id: 5, title: 'Unggah SK · Selesai', status: 'pending' as const }
];

export function PengirimanBkdView() {
  const [nomorSurat, setNomorSurat] = useState('800.1.6.1/2214/SDP.I/XI/2026');
  const [tanggalKirim, setTanggalKirim] = useState('12 November 2026');
  const [caraKirim, setCaraKirim] = useState('Diantar langsung ke BKD');
  const [catatan, setCatatan] = useState('Diterima petugas loket BKD, nomor agenda 4471.');

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Back Link */}
      <div>
        <Link
          href='/dashboard/pensiun/verifikasi'
          className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005060] hover:text-[#003d4a] transition-colors'
        >
          <IconArrowLeft className='w-4 h-4' />
          <span>Kembali ke pengajuan</span>
        </Link>
      </div>

      {/* Page Title & Status */}
      <div>
        <div className='flex flex-wrap items-center gap-3'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Catat pengiriman ke BKD
          </h1>
          <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
            <IconLoader2 className='w-3.5 h-3.5' />
            Terverifikasi
          </span>
        </div>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          PEN-2026-0031 · Ahmad Fauzi, S.Pd.
        </p>
      </div>

      {/* Mobile Compact Progress */}
      <MobileProgressBar currentStep={3} label='Kirim usulan ke BKD' />

      {/* 2-Column Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left Column */}
        <div className='lg:col-span-8 space-y-6'>
          {/* Info Banner */}
          <div className='bg-[#e8f2f5] border border-[#cde2e8] rounded-2xl p-4 flex items-start gap-3'>
            <IconSend className='w-5 h-5 text-[#005060] shrink-0 mt-0.5' />
            <div>
              <p className='text-sm font-bold text-slate-900'>
                Kirim usulan ke BKD di luar sistem, lalu catat di sini
              </p>
              <p className='text-xs text-slate-600 mt-0.5'>
                Kirim 14 berkas dan surat pengantar ke BKD Provinsi DKI Jakarta.
              </p>
            </div>
          </div>

          {/* Card: Berkas yang dikirim */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4'>
            <div>
              <h2 className='text-base font-bold text-slate-900'>Berkas yang dikirim</h2>
              <p className='text-xs text-slate-500 mt-0.5'>14 berkas terverifikasi 6 Nov 2026.</p>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
              <button
                type='button'
                onClick={() => toast.success('Mengunduh 14 berkas (ZIP)...')}
                className='inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors'
              >
                <IconDownload className='w-4 h-4 text-slate-600' />
                <span>Unduh 14 berkas (ZIP)</span>
              </button>
              <button
                type='button'
                onClick={() => toast.info('Mencetak daftar berkas...')}
                className='inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#005060] hover:text-[#003d4a] transition-colors'
              >
                <IconFileText className='w-4 h-4' />
                <span>Cetak daftar berkas</span>
              </button>
            </div>
          </div>

          {/* Card: Data pengiriman */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-5'>
            <h2 className='text-base font-bold text-slate-900'>Data pengiriman</h2>

            <div className='space-y-4'>
              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Nomor surat pengantar <span className='text-rose-500'>*</span>
                </label>
                <input
                  type='text'
                  value={nomorSurat}
                  onChange={(e) => setNomorSurat(e.target.value)}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                    Tanggal kirim <span className='text-rose-500'>*</span>
                  </label>
                  <div className='relative'>
                    <IconCalendar className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
                    <input
                      type='text'
                      value={tanggalKirim}
                      onChange={(e) => setTanggalKirim(e.target.value)}
                      className='w-full pl-10 pr-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                    Cara kirim <span className='text-rose-500'>*</span>
                  </label>
                  <select
                    value={caraKirim}
                    onChange={(e) => setCaraKirim(e.target.value)}
                    className='w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                  >
                    <option value='Diantar langsung ke BKD'>Diantar langsung ke BKD</option>
                    <option value='Kurir / Ekspedisi'>Kurir / Ekspedisi</option>
                    <option value='Pos Tercatat'>Pos Tercatat</option>
                  </select>
                </div>
              </div>

              {/* Uploaded File Box */}
              <div className='flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/60'>
                <div className='flex items-center gap-3 min-w-0'>
                  <div className='w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 shrink-0'>
                    <IconFileText className='w-4 h-4' />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-sm font-semibold text-slate-800 truncate'>
                      Bukti pengiriman (tanda terima BKD)
                    </p>
                    <p className='text-xs text-slate-500 truncate'>
                      Tanda_terima_BKD_12112026.pdf · 310 KB
                    </p>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => toast.info('Pratinjau Tanda_terima_BKD_12112026.pdf')}
                  className='inline-flex items-center gap-1.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a] shrink-0 px-2 py-1'
                >
                  <IconEye className='w-4 h-4' />
                  <span>Lihat</span>
                </button>
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Catatan (opsional)
                </label>
                <textarea
                  rows={2}
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                />
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
                onClick={() => toast.success('Data pengiriman ke BKD berhasil dicatat!')}
                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#005060] hover:bg-[#003d4a] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs'
              >
                <IconSend className='w-4 h-4' />
                <span>Catat pengiriman</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Ringkasan & Progres */}
        <div className='lg:col-span-4 space-y-6'>
          <div className='bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4'>
            <h3 className='text-base font-bold text-slate-900'>Ringkasan</h3>
            <div className='space-y-3'>
              <div>
                <p className='text-xs text-slate-500'>Guru</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>Ahmad Fauzi, S.Pd.</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Pangkat/gol.</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>Pembina, IV/a</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>TMT pensiun</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>1 April 2027</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Terverifikasi</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>6 Nov 2026</p>
              </div>
            </div>
          </div>

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
                      {step.status === 'pending' && (
                        <div className='w-7 h-7 rounded-full bg-slate-100 text-slate-400 border border-slate-200 flex items-center justify-center font-medium text-xs'>
                          {step.id}
                        </div>
                      )}
                    </div>
                    <div className='pt-0.5'>
                      <p
                        className={`text-sm leading-tight ${
                          step.status === 'active'
                            ? 'font-bold text-slate-900'
                            : step.status === 'completed'
                              ? 'font-medium text-slate-800'
                              : 'font-normal text-slate-400'
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
