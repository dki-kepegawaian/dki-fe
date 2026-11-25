'use client';

import React from 'react';
import { IconCheck } from '@tabler/icons-react';

export function TeralurIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-[290px] h-[155px] select-none ${className}`}>
      {/* Back layer cards */}
      <div className='absolute left-12 top-0 w-36 h-20 rounded-xl bg-[#dce6eb] opacity-70' />
      <div className='absolute left-6 top-3.5 w-36 h-24 rounded-xl bg-[#c2d4dc] opacity-85' />

      {/* Soft shadow under document card */}
      <div className='absolute left-3 bottom-1 w-32 h-2 rounded-full bg-slate-400/20 blur-[1px]' />

      {/* Main document card */}
      <div className='absolute left-0 top-7 w-36 bg-white rounded-xl p-3 shadow-xs border border-slate-200/60 space-y-2'>
        <div className='h-2 w-14 bg-[#7f9aa6] rounded-full' />
        <div className='space-y-1.5'>
          <div className='h-1.5 w-full bg-slate-200/80 rounded-full' />
          <div className='h-1.5 w-5/6 bg-slate-200/80 rounded-full' />
          <div className='h-1.5 w-2/3 bg-slate-200/80 rounded-full' />
        </div>
        <div className='pt-1 flex items-center justify-between'>
          <div className='h-4 w-12 bg-[#e6f0f3] rounded-full flex items-center gap-1 px-1.5'>
            <div className='w-1.5 h-1.5 rounded-full bg-[#7f9aa6]' />
            <div className='h-1 w-5 bg-[#7f9aa6]/70 rounded-full' />
          </div>
          <div className='w-6 h-6 rounded-full bg-[#eab308] text-white flex items-center justify-center shadow-xs'>
            <IconCheck className='w-3.5 h-3.5 stroke-[3]' />
          </div>
        </div>
      </div>

      {/* Soft shadow under ID card */}
      <div className='absolute right-2 bottom-2 w-24 h-2 rounded-full bg-slate-400/20 blur-[1px]' />

      {/* ID Card */}
      <div className='absolute right-0 top-12 w-28 bg-white rounded-xl overflow-hidden shadow-xs border border-slate-200/60'>
        <div className='h-4 bg-[#275162]' />
        <div className='p-2.5 space-y-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full bg-[#dce7ec] flex items-center justify-center shrink-0 overflow-hidden'>
              <svg viewBox='0 0 24 24' className='w-5 h-5 text-[#8ba5b2]' fill='currentColor'>
                <circle cx='12' cy='9' r='4' />
                <path d='M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6' />
              </svg>
            </div>
            <div className='space-y-1 flex-1'>
              <div className='h-1.5 w-full bg-[#275162] rounded-full' />
              <div className='h-1 w-3/4 bg-slate-200 rounded-full' />
              <div className='h-1 w-1/2 bg-slate-200 rounded-full' />
            </div>
          </div>
          <div className='h-2.5 w-10 bg-[#e6f0f3] rounded-full flex items-center px-1'>
            <div className='w-1 h-1 rounded-full bg-[#275162]' />
          </div>
        </div>
      </div>
    </div>
  );
}
