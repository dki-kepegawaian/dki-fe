'use client';

import React, { useState } from 'react';
import {
  IconSearch,
  IconCheck,
  IconCalendar,
  IconFileText,
  IconChevronRight
} from '@tabler/icons-react';
import { MOCK_GURU_PENSIUN, GuruPensiun } from '../types';
import { BerkasModal } from './berkas-modal';
import Link from 'next/link';

interface GuruDetailCardProps {
  onNext?: () => void;
  onCancel?: () => void;
}

export function GuruDetailCard({ onNext, onCancel }: GuruDetailCardProps) {
  const [nip, setNip] = useState<string>('19670305 199003 1 007');
  const [guruData, setGuruData] = useState<GuruPensiun | null>(MOCK_GURU_PENSIUN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setNip(val);
    // Simple mock search behavior
    if (val.replace(/\s/g, '').length >= 18) {
      setGuruData(MOCK_GURU_PENSIUN);
    } else if (val.trim() === '') {
      setGuruData(null);
    }
  };

  return (
    <>
      <div className='bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs'>
        <h2 className='text-base font-bold text-slate-900 mb-5'>Guru yang diajukan</h2>

        {/* NIP Input Field */}
        <div className='space-y-2 mb-6'>
          <label htmlFor='nip' className='block text-xs font-semibold text-slate-700'>
            NIP guru <span className='text-rose-500'>*</span>
          </label>
          <div className='relative'>
            <IconSearch className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
            <input
              id='nip'
              type='text'
              value={nip}
              onChange={handleNipChange}
              placeholder='Masukkan 18 digit NIP'
              className='w-full pl-10 pr-4 py-2.5 text-sm font-medium text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060] transition-colors placeholder:text-slate-400'
            />
          </div>
          <p className='text-xs text-slate-500'>Masukkan 18 digit NIP.</p>
        </div>

        {/* Found Teacher Detail Card */}
        {guruData && (
          <div className='bg-[#edf3f5] rounded-2xl p-5 border border-slate-200/60 mb-6'>
            {/* Header: Avatar, Name, School & Status Badge */}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/60'>
              <div className='flex items-center gap-3.5'>
                <div className='w-11 h-11 rounded-full bg-[#cbe3ea] text-[#004f5e] font-bold text-sm flex items-center justify-center shrink-0'>
                  AF
                </div>
                <div>
                  <h3 className='text-base font-bold text-slate-900 leading-snug'>
                    {guruData.nama}, {guruData.gelar}
                  </h3>
                  <p className='text-xs text-slate-600 mt-0.5'>
                    {guruData.jabatan} · {guruData.sekolah}
                  </p>
                </div>
              </div>

              <div className='self-start sm:self-center'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f7ee] text-[#15803d] border border-[#bbf7d0] text-xs font-semibold'>
                  <IconCheck className='w-3.5 h-3.5 stroke-[3]' />
                  Data ditemukan
                </span>
              </div>
            </div>

            {/* Middle Grid: Pangkat/gol, Tanggal lahir, Masa kerja */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-4'>
              <div>
                <p className='text-xs text-slate-500'>Pangkat/gol.</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>{guruData.pangkatGol}</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Tanggal lahir</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>{guruData.tanggalLahir}</p>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Masa kerja</p>
                <p className='text-sm font-bold text-slate-900 mt-0.5'>{guruData.masaKerja}</p>
              </div>
            </div>

            {/* Bottom Alert/Pill Box: TMT Pensiun */}
            <div className='bg-white rounded-xl px-4 py-3 flex items-center gap-2.5 border border-slate-200/80 shadow-xs'>
              <div className='text-[#005060]'>
                <IconCalendar className='w-4 h-4' />
              </div>
              <p className='text-xs sm:text-sm font-bold text-slate-900'>
                TMT pensiun {guruData.tmtPensiun} (batas usia {guruData.batasUsia} tahun)
              </p>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 pt-2'>
          <button
            type='button'
            onClick={() => setIsModalOpen(true)}
            className='inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#005060] hover:text-[#003d4a] hover:underline transition-all'
          >
            <IconFileText className='w-4 h-4' />
            <span>Lihat 14 berkas yang dibutuhkan</span>
          </button>

          <div className='flex items-center gap-3 w-full sm:w-auto justify-end'>
            <button
              type='button'
              onClick={onCancel}
              className='px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors'
            >
              Batal
            </button>
            <button
              type='button'
              onClick={onNext}
              className='inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-[#005060] hover:bg-[#003d4a] text-white transition-colors shadow-xs'
            >
              <span>Lanjut unggah berkas</span>
              <IconChevronRight className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>

      {/* Modal 14 Berkas */}
      <BerkasModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
