'use client';

import React, { useEffect, useState } from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import Link from 'next/link';
import { IconSearch } from '@tabler/icons-react';
import { DUMMY_ACCOUNTS, DummyAccount, getActiveAccount } from '@/features/auth/utils/dummy-auth';

export default function Header() {
  const [account, setAccount] = useState<DummyAccount>(DUMMY_ACCOUNTS.sudin);

  useEffect(() => {
    setAccount(getActiveAccount());
    const onAuthChange = () => setAccount(getActiveAccount());
    window.addEventListener('teralur-auth-change', onAuthChange);
    return () => window.removeEventListener('teralur-auth-change', onAuthChange);
  }, []);

  return (
    <header className='bg-white/80 sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-slate-200/60 px-4 sm:px-6 backdrop-blur-md'>
      <div className='flex items-center gap-3'>
        <SidebarTrigger className='-ml-1 text-slate-600 hover:text-slate-900' />

        <nav aria-label='Breadcrumb' className='flex items-center gap-1.5 text-xs sm:text-sm'>
          <Link
            href={account.defaultHome}
            className='text-slate-500 hover:text-slate-800 transition-colors'
          >
            Teralur
          </Link>
          <span className='text-slate-300'>/</span>
          <span className='font-semibold text-slate-800'>Kepegawaian DKI</span>
        </nav>
      </div>

      <div className='flex items-center gap-3'>
        <div className='relative hidden sm:block'>
          <IconSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
          <input
            type='text'
            placeholder={
              account.role === 'sudin'
                ? 'Cari NIP, nama guru, atau nomor registrasi'
                : 'Cari NIP atau nama guru'
            }
            className='w-56 lg:w-72 pl-9 pr-3.5 py-1.5 text-xs text-slate-900 bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060] transition-colors'
          />
        </div>

        <Link
          href='/dashboard/notifikasi'
          className='flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors'
        >
          <span>Notifikasi</span>
          <span className='w-4 h-4 rounded-full bg-[#005060] text-white text-[10px] font-bold flex items-center justify-center'>
            {account.notifCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
