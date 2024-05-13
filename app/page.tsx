import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { auth, currentUser, clerkClient } from '@clerk/nextjs/server';

import Link from 'next/link';

export default async function Page() {
  // console.log(clerkClient.users.createUser)
  // const user = await currentUser();
  // const authObj = auth();

  // console.log(user)
  // console.log(authObj)

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-left max-w-screen-sm mb-10">
          <h1 className="text-stone-200 text-4xl">
            A design tool to help you evaluate and improve your living spaces based on scientific research.
          </h1>
        </div>
        <div className="flex space-x-10 max-w-screen-sm mb-10">
          <Link
            href="/dashboard"
            className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 underline hover:text-stone-200 transition-all"
            // className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Get Your Report
          </Link>
          <SignedOut>
            <Link
              href="/sign-up"
              className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 underline hover:text-stone-200 transition-all"
              // className="text-stone-400 underline hover:text-stone-200 transition-all"
            >
              Create Your Account
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link
            href="/about"
            className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 underline hover:text-stone-200 transition-all"
            // className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
