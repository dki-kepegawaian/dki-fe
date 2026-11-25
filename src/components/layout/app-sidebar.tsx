'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar';
import {
  IconLayoutGrid,
  IconClock,
  IconCalendar,
  IconBuilding,
  IconTrendingUp,
  IconShieldCheck,
  IconChartBar,
  IconSchool,
  IconCheckbox,
  IconUsers,
  IconArchive,
  IconHelpCircle,
  IconListCheck,
  IconFileDescription,
  IconSwitchHorizontal
} from '@tabler/icons-react';
import {
  DUMMY_ACCOUNTS,
  DummyAccount,
  getActiveAccount,
  setActiveRole
} from '@/features/auth/utils/dummy-auth';

interface NavItemData {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  badgeColor?: string;
}

interface NavSectionData {
  label?: string;
  items: NavItemData[];
}

const OPERATOR_SECTIONS: NavSectionData[] = [
  {
    items: [
      { title: 'Beranda', url: '/dashboard', icon: IconLayoutGrid },
      {
        title: 'Notifikasi',
        url: '/dashboard/notifikasi',
        icon: IconClock,
        badge: 2,
        badgeColor: 'bg-amber-100 text-amber-800'
      }
    ]
  },
  {
    label: 'Pengajuan guru',
    items: [
      { title: 'Cuti', url: '/dashboard/cuti', icon: IconCalendar },
      { title: 'Pensiun', url: '/dashboard/pensiun/status', icon: IconBuilding },
      { title: 'Kenaikan Pangkat', url: '/dashboard/kenaikan-pangkat', icon: IconTrendingUp },
      { title: 'Sikap Disiplin', url: '/dashboard/sikap-disiplin', icon: IconShieldCheck }
    ]
  },
  {
    label: 'Layanan sekolah',
    items: [
      { title: 'Analisis Jabatan', url: '/dashboard/analisis-jabatan', icon: IconChartBar },
      { title: 'Layanan Dapodik', url: '/dashboard/layanan-dapodik', icon: IconSchool },
      { title: 'Kinerja P3K PW', url: '/dashboard/kinerja-p3k-pw', icon: IconCheckbox }
    ]
  },
  {
    label: 'Data',
    items: [
      { title: 'Data guru sekolah', url: '/dashboard/data-guru', icon: IconUsers },
      { title: 'Arsip dokumen', url: '/dashboard/arsip-dokumen', icon: IconArchive }
    ]
  }
];

const SUDIN_SECTIONS: NavSectionData[] = [
  {
    items: [
      { title: 'Beranda', url: '/dashboard', icon: IconLayoutGrid },
      {
        title: 'Tugas Saya',
        url: '/dashboard/tugas-saya',
        icon: IconListCheck,
        badge: 7,
        badgeColor: 'bg-amber-100 text-amber-800'
      },
      { title: 'Daftar Pengajuan', url: '/dashboard/pensiun/antrean', icon: IconFileDescription }
    ]
  },
  {
    label: 'Layanan pegawai',
    items: [
      { title: 'Cuti', url: '/dashboard/cuti', icon: IconCalendar },
      { title: 'Pensiun', url: '/dashboard/pensiun/antrean', icon: IconBuilding },
      { title: 'Kenaikan Pangkat', url: '/dashboard/kenaikan-pangkat', icon: IconTrendingUp },
      { title: 'Sikap Disiplin', url: '/dashboard/sikap-disiplin', icon: IconShieldCheck }
    ]
  },
  {
    label: 'Data dan dokumen',
    items: [
      { title: 'Analisis Jabatan', url: '/dashboard/analisis-jabatan', icon: IconChartBar },
      { title: 'Surat & Arsip', url: '/dashboard/arsip-dokumen', icon: IconArchive },
      { title: 'Layanan Dapodik', url: '/dashboard/layanan-dapodik', icon: IconSchool },
      { title: 'Kinerja P3K PW', url: '/dashboard/kinerja-p3k-pw', icon: IconCheckbox },
      { title: 'Data sekolah & guru', url: '/dashboard/data-guru', icon: IconUsers }
    ]
  }
];

export default function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [account, setAccount] = useState<DummyAccount>(DUMMY_ACCOUNTS.sudin);

  useEffect(() => {
    setAccount(getActiveAccount());
    const onAuthChange = () => setAccount(getActiveAccount());
    window.addEventListener('teralur-auth-change', onAuthChange);
    return () => window.removeEventListener('teralur-auth-change', onAuthChange);
  }, []);

  const sections = account.role === 'sudin' ? SUDIN_SECTIONS : OPERATOR_SECTIONS;

  const handleSwitchRole = () => {
    const nextRole = account.role === 'sudin' ? 'operator' : 'sudin';
    setActiveRole(nextRole);
    router.push(DUMMY_ACCOUNTS[nextRole].defaultHome);
  };

  return (
    <Sidebar className='border-r border-slate-200/80 bg-white [&_[data-slot=sidebar-inner]]:bg-white'>
      <SidebarHeader className='p-4 pb-3 space-y-4 bg-white'>
        <Link href={account.defaultHome} className='flex items-center gap-3 px-1'>
          <Image
            src='/images/logo-teralur.png'
            alt='Teralur Logo'
            width={36}
            height={36}
            className='w-9 h-9 object-contain shrink-0'
            priority
          />
          <div>
            <span className='block text-base font-extrabold text-slate-900 tracking-tight leading-none'>
              Teralur
            </span>
            <span className='block text-[11px] font-medium text-slate-500 mt-1 leading-none'>
              Kepegawaian DKI
            </span>
          </div>
        </Link>

        {/* Role & Unit Card + Quick Switch */}
        <div className='bg-[#f4f7f8] rounded-xl px-3.5 py-2.5 border border-slate-200/60 flex items-center justify-between gap-2'>
          <div className='min-w-0'>
            <p className='text-[10px] font-semibold text-slate-400 tracking-wider'>
              {account.roleLabel}
            </p>
            <p className='text-xs font-bold text-slate-800 mt-0.5 leading-snug truncate'>
              {account.subLabel}
            </p>
          </div>
          <button
            type='button'
            onClick={handleSwitchRole}
            title={`Ganti ke POV ${account.role === 'sudin' ? 'Operator Sekolah' : 'Staf Sudin'}`}
            className='p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-[#005060] hover:border-[#005060]/40 transition-colors shrink-0'
          >
            <IconSwitchHorizontal className='w-3.5 h-3.5' />
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent className='px-3 py-1 space-y-5 overflow-y-auto bg-white'>
        {sections.map((section, idx) => (
          <div key={section.label || `section-${idx}`} className='space-y-1'>
            {section.label && (
              <p className='px-3 text-[11px] font-semibold text-slate-400 tracking-wider mb-1'>
                {section.label}
              </p>
            )}
            <div className='space-y-0.5'>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.url ||
                  (item.title === 'Pensiun' && pathname.includes('/pensiun')) ||
                  (item.title === 'Cuti' && pathname.includes('/cuti')) ||
                  (item.title === 'Kenaikan Pangkat' && pathname.includes('/kenaikan-pangkat'));

                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`relative flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all group ${
                      isActive
                        ? 'bg-[#e6f4f6] text-[#005060]'
                        : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <span className='absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#005060] rounded-r-md' />
                    )}

                    <div className='flex items-center gap-3'>
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive ? 'text-[#005060]' : 'text-slate-500 group-hover:text-slate-800'
                        }`}
                      />
                      <span>{item.title}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span
                        className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full ${
                          item.badgeColor || 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </SidebarContent>

      <SidebarFooter className='p-3 pt-2 border-t border-slate-100 space-y-2 bg-white'>
        <Link
          href='/auth/sign-in'
          className='flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100/70 transition-colors'
        >
          <IconHelpCircle className='w-4 h-4 text-slate-500' />
          <span>Bantuan & kontak Sudin</span>
        </Link>

        <Link
          href='/dashboard/profil'
          className='flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors'
        >
          <div className='w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200/60'>
            {account.initials}
          </div>
          <div className='min-w-0 flex-1'>
            <p className='text-xs font-bold text-slate-900 truncate'>{account.name}</p>
            <p className='text-[10px] text-slate-500 truncate'>{account.footerSubLabel}</p>
          </div>
        </Link>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
