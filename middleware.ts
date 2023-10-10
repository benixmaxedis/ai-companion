// import { authMiddleware } from '@clerk/nextjs';

// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
// export default authMiddleware({ publicRoutes: ['/api/webhook'] });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

import { authMiddleware } from '@clerk/nextjs';

// Update the authMiddleware configuration
export default authMiddleware({
  publicRoutes: ['/', '/api/webhook'], // Add the public routes you want to allow access to
  ignoredRoutes: ['/api', '/trpc'], // Specify routes that should be ignored by Clerk authentication
});

export const config = {
  // Update the matcher to include public and ignored routes
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/api/webhook', // Add the public routes here as well
    '/api(.*)', // Ignore the /api route and its subroutes
    '/trpc(.*)', // Ignore the /trpc route and its subroutes
  ],
};

// import { authMiddleware } from '@clerk/nextjs';

// // Update the authMiddleware configuration
// export default authMiddleware({
//   publicRoutes: ['/api/webhook'], // Add the public routes you want to allow access to
//   ignoredRoutes: ['/api', '/trpc'], // Specify routes that should be ignored by Clerk authentication
// });

// export const config = {
//   // Update the matcher to include public and ignored routes
//   matcher: [
//     '/((?!.+\\.[\\w]+$|_next).*)',
//     '/api/webhook', // Add the public routes here as well
//     '/api(.*)', // Ignore the /api route and its subroutes
//     '/trpc(.*)', // Ignore the /trpc route and its subroutes
//   ],
// };
