import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        return isLoggedIn; // bloqueia dashboard se não estiver logado
      }

      return true;
    },
  },

  // adicionamos providers vazio APENAS para satisfazer o TS
  providers: [], // será substituído no auth.ts

} satisfies NextAuthConfig;
