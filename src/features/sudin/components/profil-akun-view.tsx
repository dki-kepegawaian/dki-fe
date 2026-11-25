'use client';

import React, { useEffect, useState } from 'react';
import {
  IconLock,
  IconEye,
  IconEyeOff,
  IconDeviceFloppy,
  IconArrowRight,
  IconChevronRight
} from '@tabler/icons-react';
import { DUMMY_ACCOUNTS, DummyAccount, getActiveAccount } from '@/features/auth/utils/dummy-auth';
import { toast } from 'sonner';

const SESSIONS = [
  { time: 'Hari ini, 07.41', device: 'Chrome · Windows · Kantor Sudin', current: true },
  { time: 'Senin, 26 Okt · 07.38', device: 'Chrome · Windows · Kantor Sudin', current: false },
  { time: 'Sabtu, 24 Okt · 19.12', device: 'Safari · iPhone · Jakarta', current: false },
  { time: 'Jumat, 23 Okt · 07.45', device: 'Chrome · Windows · Kantor Sudin', current: false }
];

export function ProfilAkunView() {
  const [account, setAccount] = useState<DummyAccount>(DUMMY_ACCOUNTS.sudin);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setAccount(getActiveAccount());
    const onAuthChange = () => setAccount(getActiveAccount());
    window.addEventListener('teralur-auth-change', onAuthChange);
    return () => window.removeEventListener('teralur-auth-change', onAuthChange);
  }, []);

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
          Kelola Profil Akun
        </h1>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          Data akun dikelola admin Sudin · kata sandi bisa Anda ubah sendiri
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left Column */}
        <div className='lg:col-span-8 space-y-6'>
          {/* Data akun */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-5'>
            <div className='flex items-center justify-between'>
              <h2 className='text-base font-bold text-slate-900'>Data akun</h2>
              <span className='inline-flex items-center gap-1 text-xs text-slate-500'>
                <IconLock className='w-3.5 h-3.5' />
                Hanya-baca
              </span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Nama lengkap
                </label>
                <input
                  type='text'
                  readOnly
                  value={account.name}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>NIP</label>
                <input
                  type='text'
                  readOnly
                  value={account.nip}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Unit kerja
                </label>
                <input
                  type='text'
                  readOnly
                  value={account.unitKerja}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>Peran</label>
                <input
                  type='text'
                  readOnly
                  value={account.roleLabel}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Mandat wilayah
                </label>
                <input
                  type='text'
                  readOnly
                  value={account.mandatWilayah}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Nama pengguna
                </label>
                <input
                  type='text'
                  readOnly
                  value={account.username}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Email dinas
                </label>
                <input
                  type='text'
                  readOnly
                  value={account.email}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Akun dibuat
                </label>
                <input
                  type='text'
                  readOnly
                  value={account.akunDibuat}
                  className='w-full px-3.5 py-2.5 text-sm text-slate-700 bg-[#f1f5f7] border border-slate-200 rounded-xl'
                />
              </div>
            </div>

            <p className='text-[11px] text-slate-400'>
              Ada data yang salah? Hubungi admin Sudin di Subbag Kepegawaian untuk perbaikan.
            </p>
          </div>

          {/* Ubah kata sandi */}
          <div className='bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4'>
            <h2 className='text-base font-bold text-slate-900'>Ubah kata sandi</h2>

            <div className='space-y-4'>
              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                  Kata sandi saat ini <span className='text-rose-500'>*</span>
                </label>
                <div className='relative'>
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    defaultValue='password123'
                    className='w-full pl-3.5 pr-10 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                  />
                  <button
                    type='button'
                    onClick={() => setShowCurrent(!showCurrent)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400'
                  >
                    {showCurrent ? (
                      <IconEyeOff className='w-4 h-4' />
                    ) : (
                      <IconEye className='w-4 h-4' />
                    )}
                  </button>
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                    Kata sandi baru <span className='text-rose-500'>*</span>
                  </label>
                  <div className='relative'>
                    <input
                      type={showNew ? 'text' : 'password'}
                      placeholder='Minimal 8 karakter'
                      className='w-full pl-3.5 pr-10 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                    />
                    <button
                      type='button'
                      onClick={() => setShowNew(!showNew)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400'
                    >
                      {showNew ? (
                        <IconEyeOff className='w-4 h-4' />
                      ) : (
                        <IconEye className='w-4 h-4' />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
                    Ulangi kata sandi baru <span className='text-rose-500'>*</span>
                  </label>
                  <div className='relative'>
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      placeholder='Ketik ulang kata sandi baru'
                      className='w-full pl-3.5 pr-10 py-2.5 text-sm text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
                    />
                    <button
                      type='button'
                      onClick={() => setShowConfirm(!showConfirm)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400'
                    >
                      {showConfirm ? (
                        <IconEyeOff className='w-4 h-4' />
                      ) : (
                        <IconEye className='w-4 h-4' />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <p className='text-[11px] text-slate-400'>
                Gabungan huruf dan angka, beda dari kata sandi lama.
              </p>

              <div className='flex justify-end'>
                <button
                  type='button'
                  onClick={() => toast.success('Kata sandi berhasil diperbarui')}
                  className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#275162] hover:bg-[#1d3f4d] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs'
                >
                  <IconDeviceFloppy className='w-4 h-4' />
                  <span>Simpan kata sandi</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Riwayat masuk */}
        <div className='lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4'>
          <div>
            <h3 className='text-base font-bold text-slate-900'>Riwayat masuk</h3>
            <p className='text-xs text-slate-500 mt-0.5'>4 sesi terakhir</p>
          </div>

          <div className='space-y-4'>
            {SESSIONS.map((s) => (
              <div key={s.time} className='flex items-start justify-between gap-2'>
                <div className='flex items-start gap-2.5'>
                  <div className='w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5'>
                    <IconArrowRight className='w-3.5 h-3.5' />
                  </div>
                  <div>
                    <p className='text-xs font-bold text-slate-800'>{s.time}</p>
                    <p className='text-[11px] text-slate-500'>{s.device}</p>
                  </div>
                </div>
                {s.current && (
                  <span className='px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold shrink-0'>
                    Sesi ini
                  </span>
                )}
              </div>
            ))}
          </div>

          <button
            type='button'
            onClick={() => toast.info('Semua sesi lain telah dikeluarkan')}
            className='inline-flex items-center gap-1 text-xs font-semibold text-[#005060] hover:underline pt-2'
          >
            <span>Bukan Anda? Keluarkan semua sesi lain</span>
            <IconChevronRight className='w-3.5 h-3.5' />
          </button>
        </div>
      </div>
    </div>
  );
}
