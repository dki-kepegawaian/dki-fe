// Access token lives in a cookie so the proxy (src/proxy.ts) can gate /dashboard.
// Lifetime matches the backend access token (15 minutes). There is no refresh flow yet.

export const ACCESS_TOKEN_COOKIE = 'access_token';

const ACCESS_TOKEN_MAX_AGE = 60 * 15;

export function saveAccessToken(token: string): void {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${ACCESS_TOKEN_COOKIE}=${encodeURIComponent(token)}; Path=/; Max-Age=${ACCESS_TOKEN_MAX_AGE}; SameSite=Lax${secure}`;
}

export function clearAccessToken(): void {
  document.cookie = `${ACCESS_TOKEN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}
