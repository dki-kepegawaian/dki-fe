'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconArrowLeft,
  IconDownload,
  IconCheck,
  IconX,
  IconChevronRight,
  IconSend,
  IconLoader2
} from '@tabler/icons-react';
import { toast } from 'sonner';
import { MobileProgressBar } from './mobile-progress-bar';

interface VerifikasiItem {
  id: number;
  category: 'Kepegawaian' | 'Identitas & keluarga' | 'Surat pernyataan & pengantar';
  title: string;
  fileName: string;
  status: 'valid' | 'invalid';
  reason?: string;
}

const INITIAL_VERIFIKASI: VerifikasiItem[] = [
  { id: 1, category: 'Kepegawaian', title: 'SK CPNS', fileName: 'SK_CPNS.pdf', status: 'valid' },
  { id: 2, category: 'Kepegawaian', title: 'SK PNS', fileName: 'SK_PNS.pdf', status: 'valid' },
  {
    id: 3,
    category: 'Kepegawaian',
    title: 'SK kenaikan pangkat terakhir',
    fileName: 'SK_KP_GOLRU.pdf',
    status: 'valid'
  },
  {
    id: 4,
    category: 'Kepegawaian',
    title: 'Kartu Pegawai (Karpeg)',
    fileName: 'KARPEG.pdf',
    status: 'valid'
  },
  {
    id: 5,
    category: 'Kepegawaian',
    title: 'SKP 2025',
    fileName: 'SKP 2025.pdf',
    status: 'invalid',
    reason: 'Halaman tanda tangan pejabat penilai belum ada. Unggah SKP 2025 yang lengkap.'
  },
  {
    id: 6,
    category: 'Kepegawaian',
    title: 'DPCP (Data Perorangan Calon Penerima Pensiun)',
    fileName: 'DPCP.pdf',
    status: 'valid'
  },
  { id: 7, category: 'Identitas & keluarga', title: 'KTP', fileName: 'KTP.pdf', status: 'valid' },
  {
    id: 8,
    category: 'Identitas & keluarga',
    title: 'Kartu Keluarga',
    fileName: 'KARTU KELUARGA.pdf',
    status: 'valid'
  },
  {
    id: 9,
    category: 'Identitas & keluarga',
    title: 'Akta nikah',
    fileName: 'AKTA_NIKAH.pdf',
    status: 'valid'
  },
  {
    id: 10,
    category: 'Identitas & keluarga',
    title: 'Karsu / Karis',
    fileName: 'KARSU.pdf',
    status: 'valid'
  },
  {
    id: 11,
    category: 'Identitas & keluarga',
    title: 'NPWP',
    fileName: 'NPWP_PNS.pdf',
    status: 'valid'
  },
  {
    id: 12,
    category: 'Surat pernyataan & pengantar',
    title: 'Surat pernyataan tidak pernah dijatuhi hukuman disiplin',
    fileName: 'SP_HUKDIS.pdf',
    status: 'valid'
  },
  {
    id: 13,
    category: 'Surat pernyataan & pengantar',
    title: 'Surat pernyataan tidak sedang menjalani proses pidana',
    fileName: 'SP_PIDANA.pdf',
    status: 'valid'
  },
  {
    id: 14,
    category: 'Surat pernyataan & pengantar',
    title: 'Surat pengantar SKPD',
    fileName: 'SURAT_PENGANTAR.pdf',
    status: 'valid'
  }
];

const CATEGORIES: VerifikasiItem['category'][] = [
  'Kepegawaian',
  'Identitas & keluarga',
  'Surat pernyataan & pengantar'
];

const STEPPER_ITEMS = [
  { id: 1, title: 'Diajukan sekolah', status: 'completed' as const },
  { id: 2, title: 'Verifikasi 14 berkas', subtitle: 'Anda', status: 'active' as const },
  { id: 3, title: 'Terverifikasi', status: 'pending' as const },
  { id: 4, title: 'Kirim usulan ke BKD', subtitle: 'Di luar sistem', status: 'pending' as const },
  {
    id: 5,
    title: 'SK dari BKD · Selesai',
    subtitle: 'Di instansi lain',
    status: 'pending' as const
  }
];

export function VerifikasiBerkasView() {
  const [items, setItems] = useState<VerifikasiItem[]>(INITIAL_VERIFIKASI);
  const [activeDocId, setActiveDocId] = useState<number>(5);

  const activeDoc = items.find((i) => i.id === activeDocId) || items[4];
  const validCount = items.filter((i) => i.status === 'valid').length;
  const invalidCount = items.filter((i) => i.status === 'invalid').length;

  const setStatus = (id: number, status: 'valid' | 'invalid') => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  const setReason = (id: number, reason: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, reason } : item)));
  };

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Back Link */}
      <div>
        <Link
          href='/dashboard/pensiun/antrean'
          className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005060] hover:text-[#003d4a] transition-colors'
        >
          <IconArrowLeft className='w-4 h-4' />
          <span>Kembali ke antrean pensiun</span>
        </Link>
      </div>

      {/* Page Title & Status Pill */}
      <div>
        <div className='flex flex-wrap items-center gap-3'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Verifikasi berkas pensiun
          </h1>
          <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold'>
            <IconLoader2 className='w-3.5 h-3.5' />
            Diajukan
          </span>
        </div>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          PEN-2026-0031 · Ahmad Fauzi, S.Pd.
        </p>
      </div>

      {/* Mobile Compact Progress */}
      <MobileProgressBar currentStep={2} label='Verifikasi 14 berkas' />

      {/* 2-Column Content Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left Column: Preview + Penilaian 14 berkas */}
        <div className='lg:col-span-8 space-y-6'>
          {/* Top Card: Document Preview */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
              <p className='text-sm font-bold text-slate-900'>
                {activeDoc.id}. {activeDoc.title} · {activeDoc.fileName}
              </p>
              <div className='flex items-center gap-3'>
                <span className='text-xs text-slate-500'>Halaman 1 dari 4</span>
                <button
                  type='button'
                  onClick={() => toast.info(`Mengunduh ${activeDoc.fileName}`)}
                  className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors'
                >
                  <IconDownload className='w-3.5 h-3.5' />
                  <span>Unduh</span>
                </button>
              </div>
            </div>

            {/* Mock Document Preview Area */}
            <div className='bg-[#f1f5f7] rounded-xl h-56 sm:h-64 flex items-center justify-center border border-slate-200/60 p-6'>
              <div className='w-40 sm:w-48 h-full bg-white rounded-lg shadow-xs border border-slate-200/80 p-4 flex flex-col gap-2.5'>
                <div className='h-2.5 w-3/4 bg-slate-200 rounded' />
                <div className='h-2 w-full bg-slate-100 rounded' />
                <div className='h-2 w-5/6 bg-slate-100 rounded' />
                <div className='h-2 w-full bg-slate-100 rounded' />
                <div className='h-2 w-4/5 bg-slate-100 rounded' />
                <div className='h-2 w-2/3 bg-slate-100 rounded' />
                <div className='mt-auto flex justify-end'>
                  <div className='h-6 w-14 bg-slate-100 rounded' />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card: Penilaian 14 berkas */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-5'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
              <h2 className='text-base font-bold text-slate-900'>Penilaian 14 berkas</h2>
              <div className='flex items-center gap-2'>
                <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold'>
                  <IconCheck className='w-3.5 h-3.5' />
                  {validCount} valid
                </span>
                <span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold'>
                  <IconX className='w-3.5 h-3.5' />
                  {invalidCount} tidak valid
                </span>
              </div>
            </div>

            {/* Categories List */}
            <div className='space-y-5'>
              {CATEGORIES.map((category) => {
                const catItems = items.filter((i) => i.category === category);
                return (
                  <div key={category} className='space-y-2'>
                    <p className='text-xs font-semibold text-slate-500'>{category}</p>
                    <div className='divide-y divide-slate-100 border-t border-b border-slate-100'>
                      {catItems.map((item) => {
                        const isInvalid = item.status === 'invalid';
                        const isActive = item.id === activeDocId;

                        return (
                          <div
                            key={item.id}
                            className={`py-3 px-3 -mx-3 rounded-xl transition-colors ${
                              isActive || isInvalid ? 'bg-[#eaf3f6]' : 'hover:bg-slate-50/70'
                            }`}
                          >
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                              <div className='flex items-center gap-3 min-w-0'>
                                <span className='text-xs font-semibold text-slate-400 w-5 shrink-0'>
                                  {item.id}
                                </span>
                                <span className='text-xs sm:text-sm font-semibold text-slate-800 truncate'>
                                  {item.title}
                                </span>
                              </div>

                              <div className='flex items-center gap-2 self-end sm:self-center shrink-0'>
                                <button
                                  type='button'
                                  onClick={() => setStatus(item.id, 'valid')}
                                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors ${
                                    item.status === 'valid'
                                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                      : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                                  }`}
                                >
                                  <span
                                    className={`w-2 h-2 rounded-full ${
                                      item.status === 'valid' ? 'bg-emerald-600' : 'bg-slate-300'
                                    }`}
                                  />
                                  Valid
                                </button>

                                <button
                                  type='button'
                                  onClick={() => {
                                    setStatus(item.id, 'invalid');
                                    setActiveDocId(item.id);
                                  }}
                                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors ${
                                    item.status === 'invalid'
                                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                                      : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                                  }`}
                                >
                                  <span
                                    className={`w-2 h-2 rounded-full ${
                                      item.status === 'invalid' ? 'bg-rose-600' : 'bg-slate-300'
                                    }`}
                                  />
                                  Tidak valid
                                </button>

                                <button
                                  type='button'
                                  onClick={() => setActiveDocId(item.id)}
                                  className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a] ml-1'
                                >
                                  <span>Buka</span>
                                  <IconChevronRight className='w-3.5 h-3.5' />
                                </button>
                              </div>
                            </div>

                            {/* Expanded Reason Input when Invalid */}
                            {isInvalid && (
                              <div className='mt-3 pl-8 space-y-1.5'>
                                <label className='block text-xs font-semibold text-slate-700'>
                                  Alasan tidak valid <span className='text-rose-500'>*</span>
                                </label>
                                <input
                                  type='text'
                                  value={item.reason || ''}
                                  onChange={(e) => setReason(item.id, e.target.value)}
                                  placeholder='Tuliskan alasan berkas tidak valid...'
                                  className='w-full px-3.5 py-2 text-xs sm:text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Action Bar */}
            <div className='pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
              <p className='text-xs text-slate-500'>
                {invalidCount > 0
                  ? `${invalidCount} berkas tidak valid. Kembalikan ke sekolah untuk perbaikan.`
                  : 'Semua berkas valid. Siap ditandai terverifikasi.'}
              </p>

              <div className='flex flex-wrap items-center gap-2.5'>
                <button
                  type='button'
                  disabled={invalidCount > 0}
                  onClick={() => toast.success('Pengajuan ditandai terverifikasi')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                    invalidCount === 0
                      ? 'border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <IconCheck className='w-3.5 h-3.5' />
                  <span>Tandai terverifikasi</span>
                </button>

                <button
                  type='button'
                  disabled={invalidCount === 0}
                  onClick={() => toast.info('Berkas dikembalikan ke sekolah untuk perbaikan')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    invalidCount > 0
                      ? 'bg-[#005060] hover:bg-[#003d4a] text-white shadow-xs'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <IconSend className='w-3.5 h-3.5' />
                  <span>Kembalikan untuk perbaikan</span>
                </button>
              </div>
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
