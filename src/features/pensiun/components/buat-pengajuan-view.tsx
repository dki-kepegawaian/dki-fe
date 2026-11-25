'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconArrowLeft } from '@tabler/icons-react';
import { GuruDetailCard } from './guru-detail-card';
import { PensiunStepper } from './pensiun-stepper';
import { MobileProgressBar } from './mobile-progress-bar';
import { toast } from 'sonner';

export function BuatPengajuanPensiunView() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/dashboard/pensiun/unggah');
  };

  const handleCancel = () => {
    toast.info('Pengajuan dibatalkan');
  };

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      {/* Back Link */}
      <div>
        <Link
          href='/dashboard/pensiun'
          className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005060] hover:text-[#003d4a] transition-colors'
        >
          <IconArrowLeft className='w-4 h-4' />
          <span>Kembali ke daftar pensiun</span>
        </Link>
      </div>

      {/* Page Title & Subtitle */}
      <div>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
          Buat pengajuan pensiun
        </h1>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          Langkah 1 dari 2 · Pilih guru yang akan pensiun
        </p>
      </div>

      {/* Mobile Compact Progress */}
      <MobileProgressBar currentStep={2} label='Pilih guru' />

      {/* 2-Column Content Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left Form: Guru yang diajukan */}
        <div className='lg:col-span-8'>
          <GuruDetailCard onNext={handleNext} onCancel={handleCancel} />
        </div>

        {/* Right Stepper: Progres */}
        <div className='lg:col-span-4'>
          <PensiunStepper />
        </div>
      </div>
    </div>
  );
}
