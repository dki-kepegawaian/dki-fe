'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { DAFTAR_14_BERKAS } from '../types';
import { IconFileText, IconCheck, IconAlertCircle } from '@tabler/icons-react';

interface BerkasModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BerkasModal({ open, onOpenChange }: BerkasModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6'>
        <DialogHeader className='pb-4 border-b border-slate-100'>
          <div className='flex items-center gap-2.5 text-[#005060]'>
            <div className='p-2 rounded-xl bg-[#e6f4f6]'>
              <IconFileText className='w-5 h-5 text-[#005060]' />
            </div>
            <div>
              <DialogTitle className='text-lg font-bold text-slate-900'>
                14 Berkas Persyaratan Pensiun
              </DialogTitle>
              <DialogDescription className='text-xs text-slate-500 mt-0.5'>
                Dokumen yang perlu disiapkan oleh guru sebelum berkas diunggah pada tahap
                berikutnya.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className='space-y-2.5 py-4'>
          {DAFTAR_14_BERKAS.map((berkas) => (
            <div
              key={berkas.id}
              className='flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors'
            >
              <div className='w-6 h-6 rounded-full bg-[#e6f4f6] text-[#005060] flex items-center justify-center shrink-0 font-semibold text-xs mt-0.5'>
                {berkas.id}
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 leading-snug'>{berkas.nama}</p>
              </div>
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
                  berkas.wajib
                    ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {berkas.wajib ? 'Wajib' : 'Jika Ada'}
              </span>
            </div>
          ))}
        </div>

        <div className='pt-3 border-t border-slate-100 flex items-center justify-between'>
          <div className='flex items-center gap-1.5 text-xs text-slate-500'>
            <IconAlertCircle className='w-4 h-4 text-[#005060]' />
            <span>Format unggahan yang didukung: PDF & JPG maks 5MB per file</span>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className='px-4 py-2 text-xs font-semibold rounded-xl bg-[#005060] text-white hover:bg-[#003d4a] transition-colors'
          >
            Tutup
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
