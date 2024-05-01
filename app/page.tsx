import Link from 'next/link';

export default function Page() {
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
          <Link
            href="/register"
            className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 underline hover:text-stone-200 transition-all"
            // className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Create Your Account
          </Link>
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
