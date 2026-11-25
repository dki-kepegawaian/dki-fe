import KBar from '@/components/kbar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Teralur - Kepegawaian DKI',
  description: 'Sistem Informasi Manajemen Kepegawaian DKI Jakarta',
  robots: {
    index: false,
    follow: false
  }
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value !== 'false';

  return (
    <KBar>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset
          id='main-content'
          tabIndex={-1}
          className='scroll-mt-16 bg-[#f8fafc] min-h-screen'
        >
          <Header />
          <main className='flex-1 pb-20 md:pb-0'>{children}</main>
          <MobileBottomNav />
        </SidebarInset>
      </SidebarProvider>
    </KBar>
  );
}
