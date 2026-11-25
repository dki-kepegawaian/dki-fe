export type UserRole = 'sudin' | 'operator';

export interface DummyAccount {
  role: UserRole;
  roleLabel: string;
  subLabel: string;
  footerSubLabel: string;
  username: string;
  name: string;
  initials: string;
  nip: string;
  unitKerja: string;
  mandatWilayah: string;
  email: string;
  akunDibuat: string;
  notifCount: number;
  defaultHome: string;
}

export const DUMMY_ACCOUNTS: Record<UserRole, DummyAccount> = {
  sudin: {
    role: 'sudin',
    roleLabel: 'Staf Sudin',
    subLabel: 'Jakarta Barat',
    footerSubLabel: 'Akses sesuai mandat Sudin',
    username: 'bimo.rajendra',
    name: 'Bimo Rajendra',
    initials: 'BR',
    nip: '19920817 201902 1 003',
    unitKerja: 'Subbag Kepegawaian · Sudin Pendidikan Wilayah I Jakarta Barat',
    mandatWilayah: 'Jakarta Barat',
    email: 'bimo.rajendra@example.com',
    akunDibuat: '12 Agustus 2026 oleh admin Sudin',
    notifCount: 4,
    defaultHome: '/dashboard/tugas-saya'
  },
  operator: {
    role: 'operator',
    roleLabel: 'Operator Sekolah',
    subLabel: 'SMP Negeri 45 Jakarta',
    footerSubLabel: 'Operator SMP Negeri 45',
    username: 'dedi.kurniawan',
    name: 'Dedi Kurniawan',
    initials: 'DK',
    nip: '19850412 201001 1 005',
    unitKerja: 'SMP Negeri 45 Jakarta',
    mandatWilayah: 'Jakarta Barat',
    email: 'dedi.kurniawan@example.com',
    akunDibuat: '10 Agustus 2026 oleh admin Sudin',
    notifCount: 2,
    defaultHome: '/dashboard'
  }
};

const STORAGE_KEY = 'teralur_dummy_role';

export function getActiveRole(): UserRole {
  if (typeof window === 'undefined') return 'sudin';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'operator' ? 'operator' : 'sudin';
}

export function getActiveAccount(): DummyAccount {
  return DUMMY_ACCOUNTS[getActiveRole()];
}

export function setActiveRole(role: UserRole) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, role);
  window.dispatchEvent(new Event('teralur-auth-change'));
}
