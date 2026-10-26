// ============================================================
// Auth Service — Data Access Layer
// ============================================================
// Talks to the backend (dki-be) directly from the browser.
// Set NEXT_PUBLIC_API_URL to the backend base URL, e.g. http://localhost:8888
// ============================================================

import type { LoginPayload, TokenResponse } from './types';

interface ApiResponse<T> {
  status: boolean;
  message: string;
  data?: T;
  error?: unknown;
}

export async function login(payload: LoginPayload): Promise<TokenResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error('NEXT_PUBLIC_API_URL is not set');

  const res = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const body = (await res.json().catch(() => null)) as ApiResponse<TokenResponse> | null;
  if (!res.ok || !body?.status || !body.data) {
    throw new Error(typeof body?.error === 'string' ? body.error : 'Login failed');
  }

  return body.data;
}
