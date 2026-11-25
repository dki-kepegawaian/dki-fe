'use client';

import React, { useState } from 'react';
import { IconSearch, IconFileText, IconCalendar, IconChevronRight } from '@tabler/icons-react';
import { toast } from 'sonner';

const ARSIP_LIST = [
  {
    doc: 'Surat izin cuti tahunan',
    kode: '0912/PK.01.02/2026',
    guru: 'Siti Rahmawati, S.Pd.',
    kategori: 'Cuti',
    tgl: '23 Okt 2026'
  },
  {
    doc: 'SK kenaikan pangkat III/c',
    kode: '823.3/1147/BKD/2026',
    guru: 'Siti Rahmawati, S.Pd.',
    kategori: 'SK',
    tgl: '1 Okt 2026'
  },
  {
    doc: 'Surat keterangan masa kerja',
    kode: '0874/PK.01.04/2026',
    guru: 'Ahmad Fauzi, S.Pd.',
    kategori: 'Pensiun',
    tgl: '29 Sep 2026'
  },
  {
    doc: 'Surat izin cuti sakit',
    kode: '0861/PK.01.02/2026',
    guru: 'Dewi Anggraini, S.Pd.Gr.',
    kategori: 'Cuti',
    tgl: '24 Sep 2026'
  },
  {
    doc: 'Penilaian kinerja semester I',
    kode: 'P3K-2026-0031',
    guru: 'Nur Aini Fitriani',
    kategori: 'Kinerja',
    tgl: '15 Sep 2026'
  },
  {
    doc: 'Surat tugas pelatihan Kurikulum Merdeka',
    kode: '0790/TU.03.01/2026',
    guru: 'Ni Made Ayu Kusumawardhani, S.Pd., M.Pd.',
    kategori: 'Surat',
    tgl: '2 Sep 2026'
  },
  {
    doc: 'SK pengangkatan PPPK',
    kode: '800.1.13.3/412/2026',
    guru: 'Yohanes Pratama, S.Pd.',
    kategori: 'SK',
    tgl: '14 Agu 2026'
  },
  {
    doc: 'Surat izin cuti alasan penting',
    kode: '0688/PK.01.02/2026',
    guru: 'Rahmat Hidayat',
    kategori: 'Cuti',
    tgl: '30 Jul 2026'
  }
];

export function ArsipDokumenView() {
  const [kategori, setKategori] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = ARSIP_LIST.filter((a) => {
    const matchKat = kategori === 'Semua' || a.kategori === kategori;
    const matchSearch =
      a.doc.toLowerCase().includes(search.toLowerCase()) ||
      a.guru.toLowerCase().includes(search.toLowerCase()) ||
      a.kode.toLowerCase().includes(search.toLowerCase());
    return matchKat && matchSearch;
  });

  return (
    <div className='w-full max-w-[1360px] mx-auto p-4 sm:p-6 lg:p-8 space-y-6'>
      <div>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
          Arsip dokumen
        </h1>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 font-medium'>
          SMP Negeri 45 Jakarta · 128 dokumen final
        </p>
      </div>

      {/* Search & Filter */}
      <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-3'>
        <div className='flex flex-wrap items-center gap-2 flex-1'>
          <div className='relative w-full sm:w-72'>
            <IconSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Cari nama dokumen, nomor, atau nama guru'
              className='w-full pl-9 pr-3.5 py-2 text-xs text-slate-900 bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005060]/20 focus:border-[#005060]'
            />
          </div>

          {['Semua', 'SK', 'Cuti', 'Pensiun', 'Kinerja', 'Surat'].map((kat) => {
            const active = kategori === kat;
            return (
              <button
                key={kat}
                type='button'
                onClick={() => setKategori(kat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  active
                    ? 'bg-[#e6f4f6] text-[#005060] border-[#005060]/40'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {kat}
              </button>
            );
          })}
        </div>

        <button
          type='button'
          className='inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 self-start lg:self-center'
        >
          <IconCalendar className='w-4 h-4 text-slate-500' />
          <span>2026</span>
        </button>
      </div>

      {/* Mobile Card List (< md) */}
      <div className='md:hidden bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden'>
        {filtered.map((row) => (
          <button
            key={row.kode}
            type='button'
            onClick={() => toast.success(`Mengunduh ${row.doc}`)}
            className='w-full text-left flex items-center justify-between gap-3 p-4 hover:bg-slate-50/60 transition-colors'
          >
            <div className='space-y-1 min-w-0'>
              <p className='text-sm font-bold text-slate-900 truncate'>{row.doc}</p>
              <p className='text-xs text-slate-500 truncate'>
                {row.kode} · {row.guru}
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
                <th className='py-3.5 px-5'>Dokumen</th>
                <th className='py-3.5 px-5'>Guru</th>
                <th className='py-3.5 px-5'>Kategori</th>
                <th className='py-3.5 px-5'>Tanggal</th>
                <th className='py-3.5 px-5 text-right'>Aksi</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100 text-xs sm:text-sm'>
              {filtered.map((row) => (
                <tr key={row.kode} className='hover:bg-slate-50/60 transition-colors'>
                  <td className='py-4 px-5'>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0'>
                        <IconFileText className='w-4 h-4' />
                      </div>
                      <div>
                        <p className='font-bold text-slate-900'>{row.doc}</p>
                        <p className='text-xs text-slate-500 mt-0.5'>{row.kode}</p>
                      </div>
                    </div>
                  </td>
                  <td className='py-4 px-5 text-slate-700 font-medium'>{row.guru}</td>
                  <td className='py-4 px-5 text-slate-600'>{row.kategori}</td>
                  <td className='py-4 px-5 text-slate-600 whitespace-nowrap'>{row.tgl}</td>
                  <td className='py-4 px-5 text-right whitespace-nowrap'>
                    <button
                      type='button'
                      onClick={() => toast.success(`Mengunduh ${row.doc}`)}
                      className='inline-flex items-center gap-0.5 text-xs font-semibold text-[#005060] hover:text-[#003d4a]'
                    >
                      <span>Unduh</span>
                      <IconChevronRight className='w-3.5 h-3.5' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='flex items-center justify-between text-[11px] text-slate-400'>
        <span>
          Menampilkan {filtered.length} dari 128 dokumen · hanya dokumen final yang diarsipkan
        </span>
        <button
          type='button'
          onClick={() => toast.info('Memuat dokumen lainnya...')}
          className='px-4 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50'
        >
          Muat lebih banyak
        </button>
      </div>
    </div>
  );
}
