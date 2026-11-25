'use client';

import React from 'react';

interface MobileProgressBarProps {
  currentStep: number;
  totalSteps?: number;
  label: string;
}

export function MobileProgressBar({ currentStep, totalSteps = 5, label }: MobileProgressBarProps) {
  return (
    <div className='lg:hidden bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-2.5'>
      <p className='text-xs text-slate-600'>
        Langkah {currentStep} dari {totalSteps}{' '}
        <span className='font-bold text-slate-900 ml-1'>{label}</span>
      </p>
      <div className='grid grid-cols-5 gap-1.5'>
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full ${idx < currentStep ? 'bg-[#005060]' : 'bg-slate-200'}`}
          />
        ))}
      </div>
    </div>
  );
}
