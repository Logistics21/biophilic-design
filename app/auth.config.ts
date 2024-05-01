import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log('auth', auth)
      // let isLoggedIn = true;
      // // let isLoggedIn = !!auth?.user;
      // let isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // console.log('isOnDashboard', isOnDashboard)
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/dashboard', nextUrl));
      // }

      return true;
    },
  },
} satisfies NextAuthConfig;
