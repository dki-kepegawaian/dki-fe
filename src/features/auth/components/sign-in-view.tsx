'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  IconEye,
  IconEyeOff,
  IconArrowRight,
  IconHelpCircle,
  IconInfoCircle,
  IconCheck
} from '@tabler/icons-react';
import { DUMMY_ACCOUNTS, setActiveRole, UserRole } from '../utils/dummy-auth';
import { toast } from 'sonner';

export default function SignInViewPage() {
  const router = useRouter();
  const [username, setUsername] = useState('bimo.rajendra');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedRole: UserRole =
      username.toLowerCase().includes('dedi') || username.toLowerCase().includes('operator')
        ? 'operator'
        : 'sudin';

    setActiveRole(matchedRole);
    const acc = DUMMY_ACCOUNTS[matchedRole];
    toast.success(`Masuk sebagai ${acc.name} (${acc.roleLabel})`);
    router.push(acc.defaultHome);
  };

  const handleQuickLogin = (role: UserRole) => {
    const acc = DUMMY_ACCOUNTS[role];
    setUsername(acc.username);
    setActiveRole(role);
    toast.success(`Masuk sebagai ${acc.name} (${acc.roleLabel})`);
    router.push(acc.defaultHome);
  };

  return (
    <div className='min-h-screen w-full bg-[#f8fafc] p-3 sm:p-5 lg:p-6 flex'>
      <div className='w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6'>
        {/* Left Panel: Illustration & Brand Card */}
        <div className='lg:col-span-7 bg-[#e7eff2] rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden'>
          {/* Decorative UI Cards Illustration */}
          <div className='relative flex-1 flex items-center justify-center py-8'>
            <div className='relative w-full max-w-[540px] h-[250px]'>
              {/* Back layer cards */}
              <div className='absolute left-24 top-0 w-64 h-36 rounded-2xl bg-[#d6e3e8] opacity-75' />
              <div className='absolute left-12 top-6 w-64 h-40 rounded-2xl bg-[#c2d4dc] opacity-90' />

              {/* Soft shadow under document card */}
              <div className='absolute left-4 bottom-2 w-56 h-3 rounded-full bg-slate-400/20 blur-[1px]' />

              {/* Main document card */}
              <div className='absolute left-0 top-12 w-64 bg-white rounded-2xl p-5 shadow-sm border border-slate-200/60 space-y-3'>
                <div className='h-3 w-24 bg-[#1e4655] rounded-full' />
                <div className='space-y-2'>
                  <div className='h-2 w-full bg-slate-200 rounded-full' />
                  <div className='h-2 w-4/5 bg-slate-200 rounded-full' />
                  <div className='h-2 w-3/5 bg-slate-200 rounded-full' />
                </div>
                <div className='pt-2 flex items-center justify-between'>
                  <div className='h-6 w-20 bg-[#e6f0f3] rounded-full flex items-center gap-1.5 px-2'>
                    <div className='w-2 h-2 rounded-full bg-[#1e4655]' />
                    <div className='h-1.5 w-8 bg-[#1e4655]/60 rounded-full' />
                  </div>
                  {/* Yellow Check Badge inside bottom-right */}
                  <div className='w-10 h-10 rounded-full bg-[#eab308] text-white flex items-center justify-center shadow-xs'>
                    <IconCheck className='w-5 h-5 stroke-[3]' />
                  </div>
                </div>
              </div>

              {/* Soft shadow under ID card */}
              <div className='absolute right-4 bottom-4 w-44 h-2.5 rounded-full bg-slate-400/20 blur-[1px]' />

              {/* ID Card (separated to the right) */}
              <div className='absolute right-0 top-20 w-52 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/60'>
                <div className='h-7 bg-[#1e4655]' />
                <div className='p-4 space-y-3'>
                  <div className='flex items-center gap-3'>
                    <div className='w-11 h-11 rounded-full bg-[#dce7ec] flex items-center justify-center shrink-0 overflow-hidden'>
                      <svg
                        viewBox='0 0 24 24'
                        className='w-7 h-7 text-[#8ba5b2]'
                        fill='currentColor'
                      >
                        <circle cx='12' cy='9' r='4' />
                        <path d='M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6' />
                      </svg>
                    </div>
                    <div className='space-y-2 flex-1'>
                      <div className='h-2.5 w-full bg-[#1e4655] rounded-full' />
                      <div className='h-1.5 w-3/4 bg-slate-200 rounded-full' />
                      <div className='h-1.5 w-1/2 bg-slate-200 rounded-full' />
                    </div>
                  </div>
                  <div className='h-4 w-16 bg-[#e6f0f3] rounded-full flex items-center px-1.5'>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#1e4655]' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Brand Card */}
          <div className='bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200/60 space-y-2.5 relative z-10 max-w-md'>
            <Image
              src='/images/logo-teralur.png'
              alt='Teralur Logo'
              width={32}
              height={32}
              className='w-8 h-8 object-contain'
            />
            <h2 className='text-2xl font-extrabold text-slate-900 tracking-tight'>Teralur</h2>
            <p className='text-sm font-medium text-slate-700'>
              Administrasi tertata. Perkembangan lebih jelas.
            </p>
            <p className='text-xs text-slate-400'>
              Sistem kepegawaian guru · Sudin Pendidikan Wilayah I Jakarta Barat
            </p>
          </div>
        </div>

        {/* Right Panel: Login Form */}
        <div className='lg:col-span-5 bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 flex flex-col justify-between'>
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={() => toast.info('Hubungi Subbag Kepegawaian Sudin Wilayah I Jakarta Barat')}
              className='inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800'
            >
              <IconHelpCircle className='w-4 h-4' />
              <span>Butuh bantuan?</span>
            </button>
          </div>

          <div className='my-auto py-6 space-y-6'>
            <div>
              <h1 className='text-2xl font-extrabold text-slate-900 tracking-tight'>
                Masuk ke Teralur
              </h1>
              <p className='text-xs sm:text-sm text-slate-500 mt-1'>
                Selamat datang kembali. Masuk dengan akun yang diberikan admin Sudin.
              </p>
            </div>

            <form onSubmit={handleLogin} className='space-y-4'>
              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Nama pengguna
                </label>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='bimo.rajendra'
                  className='w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Kata sandi
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full pl-3.5 pr-10 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600'
                  >
                    {showPassword ? (
                      <IconEyeOff className='w-4 h-4' />
                    ) : (
                      <IconEye className='w-4 h-4' />
                    )}
                  </button>
                </div>
              </div>

              <div className='flex items-center justify-between text-xs'>
                <label className='flex items-center gap-2 text-slate-600 cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className='w-4 h-4 rounded border-slate-300 bg-white accent-[#005060] [color-scheme:light] focus:ring-[#005060]'
                  />
                  <span>Ingat saya di perangkat ini</span>
                </label>
                <button
                  type='button'
                  onClick={() => toast.info('Reset kata sandi melalui admin Sudin')}
                  className='font-semibold text-[#005060] hover:underline'
                >
                  Lupa kata sandi?
                </button>
              </div>

              <button
                type='submit'
                className='w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#275162] hover:bg-[#1d3f4d] text-white text-sm font-semibold transition-colors shadow-xs'
              >
                <span>Masuk</span>
                <IconArrowRight className='w-4 h-4' />
              </button>
            </form>

            {/* Quick Dummy Account Switcher */}
            <div className='pt-2 border-t border-slate-100 space-y-2'>
              <p className='text-[11px] font-semibold text-slate-400 uppercase tracking-wider'>
                Seeder Akun Dummy (Preview POV):
              </p>
              <div className='grid grid-cols-2 gap-2'>
                <button
                  type='button'
                  onClick={() => handleQuickLogin('sudin')}
                  className='px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#e6f4f6] hover:border-[#005060]/30 text-left transition-colors'
                >
                  <p className='text-xs font-bold text-slate-900'>Staf Sudin</p>
                  <p className='text-[11px] text-slate-500'>bimo.rajendra</p>
                </button>
                <button
                  type='button'
                  onClick={() => handleQuickLogin('operator')}
                  className='px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#e6f4f6] hover:border-[#005060]/30 text-left transition-colors'
                >
                  <p className='text-xs font-bold text-slate-900'>Operator Sekolah</p>
                  <p className='text-[11px] text-slate-500'>dedi.kurniawan</p>
                </button>
              </div>
            </div>

            <div className='bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 flex items-start gap-2.5'>
              <IconInfoCircle className='w-4 h-4 text-slate-400 shrink-0 mt-0.5' />
              <p className='text-[11px] text-slate-500 leading-relaxed'>
                Akun dibuat oleh admin Sudin. Belum punya akun? Hubungi Subbag Kepegawaian Sudin
                Pendidikan Wilayah I Jakarta Barat.
              </p>
            </div>
          </div>

          <div className='flex items-center justify-between text-[11px] text-slate-400 pt-4'>
            <span>© 2026 Sudin Pendidikan Wilayah I Jakarta Barat</span>
            <span>Versi 1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
