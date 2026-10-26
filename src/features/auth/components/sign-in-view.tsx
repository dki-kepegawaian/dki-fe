'use client';

import { FieldGroup } from '@/components/ui/field';
import { LoadingButton } from '@/components/ui/loading-button';
import { cn } from '@/lib/utils';
import { useAppForm } from '@/lib/form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import * as z from 'zod';
import { login } from '../api/service';
import { saveAccessToken } from '../utils/session';
import { InteractiveGridPattern } from './interactive-grid';

const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string().min(1, { message: 'Enter your password' })
});

export default function SignInViewPage() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: ({ access_token }) => {
      saveAccessToken(access_token);
      router.replace('/dashboard/users');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const form = useAppForm({
    defaultValues: {
      email: '',
      password: ''
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: ({ value }) => {
      mutation.mutate(value);
    }
  });

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col p-10 lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-sidebar' />
        <div className='text-sidebar-foreground relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          Logo
        </div>
        <InteractiveGridPattern
          className={cn(
            'mask-[radial-gradient(400px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[0%] h-full skew-y-12'
          )}
        />
        <div className='text-sidebar-foreground relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;This starter template has saved me countless hours of work and helped me
              deliver projects to my clients faster than ever before.&rdquo;
            </p>
            <footer className='text-sidebar-foreground/70 text-sm'>Random Dude</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Sign in</h1>
            <p className='text-muted-foreground text-sm'>
              Enter your email and password to continue
            </p>
          </div>
          <form
            className='w-full space-y-2'
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.AppField
                name='email'
                children={(field) => (
                  <field.TextField
                    label='Email'
                    type='email'
                    placeholder='Enter your email...'
                    disabled={mutation.isPending}
                  />
                )}
              />
              <form.AppField
                name='password'
                children={(field) => (
                  <field.TextField
                    label='Password'
                    type='password'
                    placeholder='Enter your password...'
                    disabled={mutation.isPending}
                  />
                )}
              />
            </FieldGroup>
            <LoadingButton
              loading={mutation.isPending}
              type='submit'
              className='mt-2 ml-auto w-full'
            >
              Sign in
            </LoadingButton>
          </form>
        </div>
      </div>
    </div>
  );
}
