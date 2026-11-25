'use client';

import React from 'react';
import { IconCheck } from '@tabler/icons-react';

interface Step {
  id: number;
  title: string;
  subtitle?: string;
  status: 'completed' | 'active' | 'pending';
}

const STEPS: Step[] = [
  {
    id: 1,
    title: 'Guru siapkan 14 berkas',
    subtitle: 'Di luar sistem',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Pilih guru',
    subtitle: 'Anda',
    status: 'active'
  },
  {
    id: 3,
    title: 'Unggah 14 berkas & ajukan',
    status: 'pending'
  },
  {
    id: 4,
    title: 'Sudin verifikasi berkas',
    status: 'pending'
  },
  {
    id: 5,
    title: 'Usulan ke BKD hingga SK terbit',
    subtitle: 'Di luar sistem',
    status: 'pending'
  }
];

export function PensiunStepper() {
  return (
    <div className='bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs'>
      <h3 className='text-base font-bold text-slate-900 mb-6'>Progres</h3>

      <div className='relative'>
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1;

          return (
            <div key={step.id} className='relative flex items-start gap-3.5 pb-7 last:pb-0'>
              {/* Connector line */}
              {!isLast && (
                <div
                  className={`absolute left-[13px] top-[26px] bottom-0 w-[2px] ${
                    step.status === 'completed' ? 'bg-emerald-200' : 'bg-slate-200'
                  }`}
                />
              )}

              {/* Step indicator circle */}
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

              {/* Step text info */}
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
                  <p
                    className={`text-xs mt-0.5 ${
                      step.status === 'pending' ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {step.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
