/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  netlifyIdentity: {
    on: (event: string, callback: (user?: any) => void) => void;
    confirm: (token: string) => void;
    open: (mode: 'signup' | 'login') => void;
  }
}