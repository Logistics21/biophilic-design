import { auth, signOut } from 'app/auth';
import Link from 'next/link'

export default async function DashboardPage() {
  // let session = await auth();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        <h1 className="text-stone-500">Welcome</h1>
        <h3>Spaces you&apos;ve evaluated</h3>
        <ul>
          <li>
            <p>Bedroom</p>
          </li>
          <li>
            <p>Living Room</p>
          </li>
          <li>
            <p>Kitchen</p>
          </li>
        </ul>
        <Link
            href="/create-report"
            className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 hover:text-stone-200 transition-all"
            // className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Create New Report
          </Link>
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      // action={async () => {
      //   'use server';
      //   await signOut();
      // }}
    >
      <button
        className="text-white bg-gray-700 focus:bg-gray-800 rounded-lg px-5 py-2.5 hover:text-stone-200 transition-all"
        type="submit"
        >
          Sign out
        </button>
    </form>
  );
}
