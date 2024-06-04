import { SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import officeImg from "public/images/office.jpeg"
import Link from 'next/link';

export default async function Page() {
  return (
    <div className="flex h-full bg-white">
      <div className="w-screen h-screen flex flex-col justify-center items-center p-6">
        <div className="flex text-left gap-x-8 py-8">
          <Image
            src={officeImg}
            alt="open plan office with plants and ivy on columns"
            sizes='100vw'
          />
          <h1 className="text-black text-4xl">
            A design tool to help you evaluate and improve your living spaces based on scientific research.
          </h1>
        </div>
        <div className="flex w-full justify-between max-w-screen-sm mb-10">
          <Link
            href="/dashboard"
            className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 underline hover:text-stone-200 transition-all"
          >
            Get Your Report
          </Link>
          <SignedOut>
            <Link
              href="/sign-up"
              className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 underline hover:text-stone-200 transition-all"
            >
              Create Your Account
            </Link>
          </SignedOut>
          <Link
            href="/about"
            className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 underline hover:text-stone-200 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
