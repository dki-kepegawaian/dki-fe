import SignInViewPage from '@/features/auth/components/sign-in-view';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in'
};

export default function Page() {
  return <SignInViewPage />;
}
