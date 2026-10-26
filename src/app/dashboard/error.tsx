'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import * as Sentry from '@sentry/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  // Defer the refresh until the next render phase so React settles pending states first
  const retry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4 p-4'>
      <Alert variant='destructive' className='max-w-md'>
        <Icons.alertCircle className='h-4 w-4' />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
      <Button variant='outline' onClick={retry} disabled={isPending}>
        {isPending ? (
          <>
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
            Retrying...
          </>
        ) : (
          'Try again'
        )}
      </Button>
    </div>
  );
}
