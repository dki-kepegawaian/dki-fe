'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconLayoutGrid,
  IconListCheck,
  IconFiles,
  IconChartBar,
  IconClock,
  IconAdjustmentsHorizontal
} from '@tabler/icons-react';
import { DUMMY_ACCOUNTS, DummyAccount, getActiveAccount } from '@/features/auth/utils/dummy-auth';
import { useSidebar } from '@/components/ui/sidebar';

export function MobileBottomNav() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();
  const [account, setAccount] = useState<DummyAccount>(DUMMY_ACCOUNTS.sudin);

  useEffect(() => {
    setAccount(getActiveAccount());
    const onAuthChange = () => setAccount(getActiveAccount());
    window.addEventListener('teralur-auth-change', onAuthChange);
    return () => window.removeEventListener('teralur-auth-change', onAuthChange);
  }, []);

  const items =
    account.role === 'sudin'
      ? [
          { label: 'Beranda', href: '/dashboard', icon: IconLayoutGrid },
          { label: 'Tugas', href: '/dashboard/tugas-saya', icon: IconListCheck },
          { label: 'Pengajuan', href: '/dashboard/pensiun/antrean', icon: IconFiles },
          { label: 'Menu', href: '/dashboard/profil', icon: IconChartBar }
        ]
      : [
          { label: 'Beranda', href: '/dashboard', icon: IconLayoutGrid },
          { label: 'Pengajuan', href: '/dashboard/pensiun/status', icon: IconFiles },
          { label: 'Notifikasi', href: '/dashboard/notifikasi', icon: IconClock },
          { label: 'Akun', href: '/dashboard/profil', icon: IconAdjustmentsHorizontal }
        ];

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200/80 flex items-center justify-around py-2 px-2 md:hidden'>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href || (item.label === 'Pengajuan' && pathname.includes('/pensiun'));

        if (item.label === 'Menu') {
          return (
            <button
              key={item.label}
              type='button'
              onClick={() => setOpenMobile(true)}
              className='flex flex-col items-center gap-1 px-3 py-1 rounded-xl text-[11px] font-semibold text-slate-500 hover:text-[#005060] transition-colors'
            >
              <Icon className='w-5 h-5' />
              <span>{item.label}</span>
            </button>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl text-[11px] font-semibold transition-colors ${
              isActive ? 'text-[#005060]' : 'text-slate-500'
            }`}
          >
            <Icon className='w-5 h-5' />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
