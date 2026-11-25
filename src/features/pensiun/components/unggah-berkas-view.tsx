'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconArrowLeft,
  IconFileText,
  IconEye,
  IconUpload,
  IconLoader2,
  IconAlertCircle,
  IconSend,
  IconCheck
} from '@tabler/icons-react';
import { toast } from 'sonner';

interface BerkasUploadItem {
  id: number;
  category: 'Kepegawaian' | 'Identitas & keluarga' | 'Surat pernyataan & pengantar';
  title: string;
  fileName?: string;
  status: 'uploaded' | 'uploading' | 'empty';
  progress?: number;
}

const INITIAL_BERKAS: BerkasUploadItem[] = [
  // Kepegawaian (6)
  {
    id: 1,
    category: 'Kepegawaian',
    title: 'SK CPNS',
    fileName: 'SK_CPNS.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 2,
    category: 'Kepegawaian',
    title: 'SK PNS',
    fileName: 'SK_PNS.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 3,
    category: 'Kepegawaian',
    title: 'SK kenaikan pangkat terakhir',
    fileName: 'SK_KP_GOLRU.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 4,
    category: 'Kepegawaian',
    title: 'Kartu Pegawai (Karpeg)',
    fileName: 'KARPEG.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 5,
    category: 'Kepegawaian',
    title: 'SKP 2025',
    fileName: 'SKP 2025.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 6,
    category: 'Kepegawaian',
    title: 'DPCP (Data Perorangan Calon Penerima Pensiun)',
    fileName: 'DPCP.pdf · PDF',
    status: 'uploaded'
  },
  // Identitas & keluarga (5)
  {
    id: 7,
    category: 'Identitas & keluarga',
    title: 'KTP',
    fileName: 'KTP.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 8,
    category: 'Identitas & keluarga',
    title: 'Kartu Keluarga',
    fileName: 'KARTU KELUARGA.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 9,
    category: 'Identitas & keluarga',
    title: 'Akta nikah',
    fileName: 'AKTA_NIKAH.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 10,
    category: 'Identitas & keluarga',
    title: 'Karsu / Karis',
    fileName: 'KARSU.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 11,
    category: 'Identitas & keluarga',
    title: 'NPWP',
    fileName: 'NPWP_PNS.pdf · PDF',
    status: 'uploaded'
  },
  // Surat pernyataan & pengantar (3)
  {
    id: 12,
    category: 'Surat pernyataan & pengantar',
    title: 'Surat pernyataan tidak pernah dijatuhi hukuman disiplin',
    fileName: 'SP TIDAK PERNAH HUKDIS.pdf · PDF',
    status: 'uploaded'
  },
  {
    id: 13,
    category: 'Surat pernyataan & pengantar',
    title: 'Surat pernyataan tidak sedang menjalani proses pidana',
    fileName: 'SP TIDAK SEDANG PIDANA.pdf',
    status: 'uploading',
    progress: 64
  },
  {
    id: 14,
    category: 'Surat pernyataan & pengantar',
    title: 'Surat pengantar SKPD',
    status: 'empty'
  }
];

const CATEGORIES: Array<{ name: BerkasUploadItem['category']; countLabel: string }> = [
  { name: 'Kepegawaian', countLabel: '6 berkas' },
  { name: 'Identitas & keluarga', countLabel: '5 berkas' },
  { name: 'Surat pernyataan & pengantar', countLabel: '3 berkas' }
];

const STEPPER_ITEMS = [
  { id: 1, title: 'Pilih guru', status: 'completed' as const },
  { id: 2, title: 'Unggah 14 berkas & ajukan', subtitle: 'Anda', status: 'active' as const },
  { id: 3, title: 'Sudin verifikasi berkas', status: 'pending' as const },
  { id: 4, title: 'Usulan ke BKD', subtitle: 'Di luar sistem', status: 'pending' as const },
  { id: 5, title: 'SK terbit · Selesai', status: 'pending' as const }
];

export function UnggahBerkasView() {
  const [berkasList, setBerkasList] = useState<BerkasUploadItem[]>(INITIAL_BERKAS);
  const [isChecked, setIsChecked] = useState(false);

  const uploadedCount = berkasList.filter((b) => b.status === 'uploaded').length;
  const progressPercent = Math.round((uploadedCount / 14) * 100);
  const canSubmit = uploadedCount === 14 && isChecked;

  const handleUploadMock = (id: number) => {
    setBerkasList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: 'uploaded',
              fileName: `${item.title.toUpperCase().replace(/\s+/g, '_')}.pdf · PDF`,
              progress: 100
            }
          : item
      )
    );
    toast.success('Berkas berhasil diunggah');
  };

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Back Link */}
      <div>
        <Link
          href='/dashboard/pensiun/buat'
          className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005060] hover:text-[#003d4a] transition-colors'
        >
          <IconArrowLeft className='w-4 h-4' />
          <span>Kembali ke data guru</span>
        </Link>
      </div>

      {/* Page Title & Subtitle */}
      <div>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
          Unggah 14 berkas pensiun
        </h1>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          Langkah 2 dari 2 · Ahmad Fauzi, S.Pd.
        </p>
      </div>

      {/* 2-Column Content Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left Column: Berkas pengajuan */}
        <div className='lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs space-y-6'>
          {/* Card Header + Progress */}
          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <h2 className='text-base font-bold text-slate-900'>Berkas pengajuan</h2>
              <span className='px-3 py-1 rounded-full bg-[#e6f4f6] text-[#005060] text-xs font-bold'>
                {uploadedCount} dari 14 berkas
              </span>
            </div>
            <div className='w-full h-1.5 bg-slate-100 rounded-full overflow-hidden'>
              <div
                className='h-full bg-[#005060] rounded-full transition-all duration-300'
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Document Groups */}
          <div className='space-y-6'>
            {CATEGORIES.map((cat) => {
              const items = berkasList.filter((b) => b.category === cat.name);
              return (
                <div key={cat.name} className='space-y-2.5'>
                  <div className='flex items-center gap-2 text-xs'>
                    <span className='font-semibold text-slate-700'>{cat.name}</span>
                    <span className='text-slate-400'>{cat.countLabel}</span>
                  </div>

                  <div className='space-y-2.5'>
                    {items.map((item) => {
                      if (item.status === 'empty') {
                        return (
                          <div
                            key={item.id}
                            className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-dashed border-slate-300 bg-slate-50/70'
                          >
                            <div className='flex items-center gap-3'>
                              <div className='w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-slate-400 shrink-0'>
                                <IconUpload className='w-4 h-4' />
                              </div>
                              <div>
                                <p className='text-sm font-semibold text-slate-800'>{item.title}</p>
                                <p className='text-xs text-slate-500'>
                                  PDF, maks. 2 MB · seret file atau pilih
                                </p>
                              </div>
                            </div>
                            <button
                              type='button'
                              onClick={() => handleUploadMock(item.id)}
                              className='px-4 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors self-start sm:self-center'
                            >
                              Pilih file
                            </button>
                          </div>
                        );
                      }

                      if (item.status === 'uploading') {
                        return (
                          <div
                            key={item.id}
                            className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-[#005060]/40 bg-[#f4f9fa]'
                          >
                            <div className='flex items-center gap-3'>
                              <div className='w-9 h-9 rounded-lg bg-[#e6f4f6] flex items-center justify-center text-[#005060] shrink-0'>
                                <IconFileText className='w-4 h-4' />
                              </div>
                              <div>
                                <p className='text-sm font-semibold text-slate-800'>{item.title}</p>
                                <p className='text-xs text-slate-500'>{item.fileName}</p>
                              </div>
                            </div>
                            <button
                              type='button'
                              onClick={() => handleUploadMock(item.id)}
                              className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f4f6] text-[#005060] text-xs font-semibold self-start sm:self-center'
                            >
                              <IconLoader2 className='w-3.5 h-3.5 animate-spin' />
                              <span>Mengunggah {item.progress}%</span>
                            </button>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.id}
                          className='flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 transition-colors'
                        >
                          <div className='flex items-center gap-3 min-w-0'>
                            <div className='w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0'>
                              <IconFileText className='w-4 h-4' />
                            </div>
                            <div className='min-w-0'>
                              <p className='text-sm font-semibold text-slate-800 truncate'>
                                {item.title}
                              </p>
                              <p className='text-xs text-slate-500 truncate'>{item.fileName}</p>
                            </div>
                          </div>
                          <button
                            type='button'
                            onClick={() => toast.info(`Pratinjau ${item.fileName}`)}
                            className='inline-flex items-center gap-1.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a] shrink-0 px-2 py-1 rounded-lg hover:bg-slate-50'
                          >
                            <IconEye className='w-4 h-4' />
                            <span>Lihat</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Declaration Checkbox & Submit Footer */}
          <div className='pt-4 border-t border-slate-200/80 space-y-4'>
            <label className='flex items-start gap-3 cursor-pointer'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className='mt-0.5 w-4 h-4 rounded border-slate-300 text-[#005060] focus:ring-[#005060]'
              />
              <div>
                <p className='text-xs sm:text-sm font-semibold text-slate-800'>
                  Saya sudah memeriksa isi setiap berkas
                </p>
                <p className='text-xs text-slate-500 mt-0.5'>
                  Nama, NIP, dan tanggal pada dokumen sesuai data guru. Sistem tidak membaca isi
                  berkas.
                </p>
              </div>
            </label>

            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2'>
              <div className='flex items-center gap-2 text-xs text-amber-700 font-medium'>
                <IconAlertCircle className='w-4 h-4 shrink-0 text-amber-600' />
                <span>Lengkapi 14 berkas dan centang pernyataan untuk mengajukan.</span>
              </div>

              <button
                type='button'
                disabled={!canSubmit}
                onClick={() => toast.success('Pengajuan pensiun berhasil dikirim ke Sudin!')}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  canSubmit
                    ? 'bg-[#005060] hover:bg-[#003d4a] text-white shadow-xs'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <IconSend className='w-4 h-4' />
                <span>Ajukan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Ringkasan & Progres */}
        <div className='lg:col-span-4 space-y-6'>
          {/* Card Ringkasan */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4'>
            <h3 className='text-base font-bold text-slate-900'>Ringkasan</h3>
            <div className='space-y-3'>
              <div>
                <p className='text-xs text-slate-500'>Nama</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>Ahmad Fauzi, S.Pd.</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Pangkat/gol.</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>Pembina, IV/a</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>TMT pensiun</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>
                  1 April 2027 (BUP 60 tahun)
                </p>
              </div>
            </div>
          </div>

          {/* Card Progres */}
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
