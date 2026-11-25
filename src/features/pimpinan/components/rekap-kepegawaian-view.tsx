'use client';

import React, { useState } from 'react';
import { IconDownload } from '@tabler/icons-react';
import { toast } from 'sonner';

const LAYANAN_LIST = [
  { name: 'Cuti', total: 28, unit: 'pengajuan', done: 20 },
  { name: 'Pensiun', total: 9, unit: 'pengajuan', done: 5 },
  { name: 'Kenaikan Pangkat', total: 14, unit: 'pengajuan', done: 6 },
  { name: 'Analisis Jabatan', total: 42, unit: 'sekolah', done: 38 },
  { name: 'Layanan Dapodik', total: 10, unit: 'tiket', done: 9 },
  { name: 'Kinerja P3K PW', total: 23, unit: 'penilaian', done: 15 },
  { name: 'Sikap Disiplin', total: 3, unit: 'kasus', done: 1 }
];

export function RekapKepegawaianView() {
  const [periode, setPeriode] = useState('Oktober 2026');

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Rekap kepegawaian
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
            Sudin Pendidikan Wilayah I Jakarta Barat · per 27 Oktober 2026
          </p>
        </div>

        <div className='flex items-center gap-2.5 self-start sm:self-center'>
          <select
            value={periode}
            onChange={(e) => setPeriode(e.target.value)}
            className='px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-800 focus:outline-none'
          >
            <option value='Oktober 2026'>Oktober 2026</option>
            <option value='September 2026'>September 2026</option>
            <option value='Agustus 2026'>Agustus 2026</option>
          </select>

          <button
            type='button'
            onClick={() => toast.success(`Mengunduh rekap ${periode} (PDF)...`)}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#275162] hover:bg-[#1d3f4d] text-white text-xs font-semibold transition-colors shadow-xs'
          >
            <IconDownload className='w-4 h-4' />
            <span className='hidden sm:inline'>Unduh rekap (PDF)</span>
          </button>
        </div>
      </div>

      {/* Summary Card: Semua pengajuan */}
      <div className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2.5'>
        <div className='flex items-center justify-between'>
          <p className='text-sm font-bold text-slate-900'>Semua pengajuan</p>
          <span className='text-xs text-slate-500'>Rata-rata 6 hari</span>
        </div>
        <div className='flex items-baseline gap-2'>
          <span className='text-3xl font-extrabold text-slate-900'>64</span>
          <span className='text-xs text-slate-500'>bulan ini</span>
        </div>
        <div className='w-full h-1.5 bg-slate-100 rounded-full overflow-hidden'>
          <div className='h-full bg-[#275162] rounded-full' style={{ width: '64%' }} />
        </div>
        <p className='text-xs text-slate-500'>Selesai 41 dari 64 pengajuan</p>
      </div>

      {/* Per layanan */}
      <div className='space-y-3'>
        <h2 className='text-base font-bold text-slate-900'>Per layanan</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {LAYANAN_LIST.map((item) => {
            const pct = Math.round((item.done / item.total) * 100);
            return (
              <div
                key={item.name}
                className='bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2.5'
              >
                <div className='flex items-center justify-between gap-2'>
                  <p className='text-sm font-bold text-slate-900'>{item.name}</p>
                  <span className='text-xs text-slate-500'>
                    {item.total} {item.unit}
                  </span>
                </div>
                <div className='w-full h-1.5 bg-slate-100 rounded-full overflow-hidden'>
                  <div className='h-full bg-[#15803d] rounded-full' style={{ width: `${pct}%` }} />
                </div>
                <p className='text-xs text-slate-500'>
                  Selesai {item.done} dari {item.total}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
