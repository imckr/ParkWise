// import { ClerkMiddleware, ClerkMiddlewareAuthObject, createRouteMatcher } from "@clerk/nextjs/server";
// import { clerkClient } from "@clerk/nextjs";
// import { NextResponse, NextRequest } from "next/server";

// // Define public routes
// const isPublicRoute = createRouteMatcher([
//   "/sign-in(.*)",
//   "/sign-up(.*)",
//   "/",
// ]);

// export default ClerkMiddleware(async (auth:ClerkMiddlewareAuthObject, req:NextRequest) => {
//   const { userId } = auth;

//   // Redirect unauthenticated users trying to access protected routes
//   if (!userId && !isPublicRoute(req)) {
//     return NextResponse.redirect(new URL("/sign-in", req.url));
//   }

//   if (userId) {
//     try {
//       const user = await clerkClient.users.getUser(userId); // ✅ Fixed Clerk API usage
//       const role = user.publicMetadata.role as string | undefined;

//       // Admin role redirection logic
//       if (role === "admin" && req.nextUrl.pathname === "/dashboard") {
//         return NextResponse.redirect(new URL("/admin/dashboard", req.url));
//       }

//       // Prevent non-admin users from accessing admin routes
//       if (role !== "admin" && req.nextUrl.pathname.startsWith("/admin")) {
//         return NextResponse.redirect(new URL("/dashboard", req.url));
//       }

//       // Redirect authenticated users trying to access public routes
//       if (isPublicRoute(req)) {
//         return NextResponse.redirect(
//           new URL(role === "admin" ? "/admin/dashboard" : "/dashboard", req.url)
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching user data from Clerk:", error);
//       return NextResponse.redirect(new URL("/error", req.url));
//     }
//   }
// });

import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
