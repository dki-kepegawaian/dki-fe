'use client';

import React, { useEffect, useState } from 'react';
import { DUMMY_ACCOUNTS, DummyAccount, getActiveAccount } from '@/features/auth/utils/dummy-auth';
import { BerandaSekolahView } from '@/features/operator/components/beranda-sekolah-view';
import { TugasSayaView } from '@/features/sudin/components/tugas-saya-view';

export default function DashboardHomePage() {
  const [account, setAccount] = useState<DummyAccount>(DUMMY_ACCOUNTS.sudin);

  useEffect(() => {
    setAccount(getActiveAccount());
    const onAuthChange = () => setAccount(getActiveAccount());
    window.addEventListener('teralur-auth-change', onAuthChange);
    return () => window.removeEventListener('teralur-auth-change', onAuthChange);
  }, []);

  if (account.role === 'operator') {
    return <BerandaSekolahView />;
  }

  return <TugasSayaView />;
}
