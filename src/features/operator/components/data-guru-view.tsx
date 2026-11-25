'use client';

import React, { useState } from 'react';
import { IconDownload, IconAlertCircle, IconSearch, IconChevronRight } from '@tabler/icons-react';
import { toast } from 'sonner';

const GURU_LIST = [
  {
    nama: 'Siti Rahmawati, S.Pd.',
    nip: 'NIP 19870614 201001 2 015',
    status: 'PNS',
    gol: 'III/c',
    pangkat: 'Penata',
    sk: 'SK: IPA',
    riil: 'Riil: IPA',
    incomplete: false
  },
  {
    nama: 'Ahmad Fauzi, S.Pd.',
    nip: 'NIP 19640305 198803 1 007',
    status: 'PNS',
    gol: 'IV/a',
    pangkat: 'Pembina',
    sk: 'SK: Matematika',
    riil: 'Riil: Matematika',
    incomplete: false
  },
  {
    nama: 'Dewi Anggraini, S.Pd.Gr.',
    nip: 'NIP 19900921 201503 2 004',
    status: 'PNS',
    gol: 'III/b',
    pangkat: 'Penata Muda Tk. I',
    sk: 'SK: Bahasa Indonesia',
    riil: 'Riil: Bahasa Indonesia',
    incomplete: false
  },
  {
    nama: 'Rahmat Hidayat',
    nip: 'NIP 19910312 202012 1 008',
    status: 'PNS',
    gol: 'III/a',
    pangkat: 'Penata Muda',
    sk: 'SK: PJOK',
    riil: 'Riil: belum diisi',
    incomplete: true
  },
  {
    nama: 'Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.',
    nip: 'NIP 19800915 200501 2 011',
    status: 'PNS',
    gol: 'IV/a',
    pangkat: 'Pembina',
    sk: 'SK: Bahasa Inggris',
    riil: 'Riil: Bahasa Inggris',
    incomplete: false
  },
  {
    nama: 'Yohanes Pratama, S.Pd.',
    nip: 'NIP 19950718 202321 1 004',
    status: 'PPPK',
    gol: 'IX',
    pangkat: '',
    sk: 'SK: IPS',
    riil: 'Riil: IPS',
    incomplete: false
  },
  {
    nama: 'Fitri Handayani, S.Kom.',
    nip: 'NIP 19930204 202321 2 009',
    status: 'PPPK',
    gol: 'IX',
    pangkat: '',
    sk: 'SK: Informatika',
    riil: 'Riil: Informatika, Prakarya',
    incomplete: false
  },
  {
    nama: 'Nur Aini Fitriani',
    nip: 'Tanpa NIP',
    status: 'PPPK Paruh Waktu',
    gol: '—',
    pangkat: '',
    sk: 'SK: Seni Budaya',
    riil: 'Riil: belum diisi',
    incomplete: true
  }
];

export function DataGuruView() {
  const [filter, setFilter] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = GURU_LIST.filter((g) => {
    const matchStatus = filter === 'Semua' || g.status === filter;
    const matchSearch =
      g.nama.toLowerCase().includes(search.toLowerCase()) ||
      g.nip.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Data guru sekolah
          </h1>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
            SMP Negeri 45 Jakarta · 8 guru
          </p>
        </div>

        <button
          type='button'
          onClick={() => toast.success('Mengunduh daftar guru...')}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 shadow-xs self-start sm:self-center'
        >
          <IconDownload className='w-4 h-4' />
          <span>Unduh daftar</span>
        </button>
      </div>

      {/* Warning Banner */}
      <div className='bg-[#fdf6df] border border-[#f5e3a4] rounded-xl px-4 py-3 flex items-center gap-2.5 text-xs sm:text-sm text-amber-900 font-medium'>
        <IconAlertCircle className='w-4 h-4 text-amber-700 shrink-0' />
        <span>
          2 data perlu dilengkapi · mapel riil Rahmat Hidayat dan Nur Aini Fitriani belum diisi
        </span>
      </div>

      {/* Filter & Search */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
        <div className='flex flex-wrap items-center gap-2'>
          {[
            { label: 'Semua', count: 8 },
            { label: 'PNS', count: 5 },
            { label: 'PPPK', count: 2 },
            { label: 'PPPK Paruh Waktu', count: 1 }
          ].map((tab) => {
            const active = filter === tab.label;
            return (
              <button
                key={tab.label}
                type='button'
                onClick={() => setFilter(tab.label)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  active
                    ? 'bg-[#e6f4f6] text-[#005060] border-[#005060]/40'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            );
          })}
        </div>

        <div className='relative w-full sm:w-64'>
          <IconSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Cari nama atau NIP'
            className='w-full pl-9 pr-3.5 py-1.5 text-xs text-slate-900 bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
          />
        </div>
      </div>

      {/* Mobile Card List (< md) */}
      <div className='md:hidden bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden'>
        {filtered.map((row) => (
          <button
            key={row.nama}
            type='button'
            onClick={() => toast.info(`Membuka profil ${row.nama}`)}
            className='w-full text-left flex items-center justify-between gap-3 p-4 hover:bg-slate-50/60 transition-colors'
          >
            <div className='space-y-1 min-w-0'>
              <p className='text-sm font-bold text-slate-900 truncate'>{row.nama}</p>
              <p className='text-xs text-slate-500 truncate'>
                {row.nip} · {row.status}
              </p>
            </div>
            <IconChevronRight className='w-4 h-4 text-slate-400 shrink-0' />
          </button>
        ))}
      </div>

      {/* Desktop Table (>= md) */}
      <div className='hidden md:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-slate-100 text-[11px] font-semibold text-slate-500 bg-slate-50/50'>
                <th className='py-3.5 px-5'>Guru</th>
                <th className='py-3.5 px-5'>Status kepegawaian</th>
                <th className='py-3.5 px-5'>Golongan</th>
                <th className='py-3.5 px-5'>Mapel SK / riil</th>
                <th className='py-3.5 px-5 text-right'>Aksi</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100 text-xs sm:text-sm'>
              {filtered.map((row) => (
                <tr key={row.nama} className='hover:bg-slate-50/60 transition-colors'>
                  <td className='py-4 px-5'>
                    <p className='font-bold text-slate-900'>{row.nama}</p>
                    <p className='text-xs text-slate-500 mt-0.5'>{row.nip}</p>
                  </td>
                  <td className='py-4 px-5 text-slate-700 whitespace-nowrap'>{row.status}</td>
                  <td className='py-4 px-5 whitespace-nowrap'>
                    <p className='font-medium text-slate-800'>{row.gol}</p>
                    {row.pangkat && <p className='text-xs text-slate-500'>{row.pangkat}</p>}
                  </td>
                  <td className='py-4 px-5'>
                    <p className='text-slate-800 font-medium'>{row.sk}</p>
                    <p
                      className={`text-xs ${row.incomplete ? 'text-amber-600 font-semibold' : 'text-slate-500'}`}
                    >
                      {row.riil}
                    </p>
                  </td>
                  <td className='py-4 px-5 text-right whitespace-nowrap'>
                    <button
                      type='button'
                      onClick={() => toast.info(`Membuka profil ${row.nama}`)}
                      className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a]'
                    >
                      <span>Buka</span>
                      <IconChevronRight className='w-3.5 h-3.5' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400'>
        <span>Perubahan nama, NIP, atau golongan diajukan lewat Sudin.</span>
        <span>Menampilkan {filtered.length} dari 8 guru</span>
      </div>
    </div>
  );
}
