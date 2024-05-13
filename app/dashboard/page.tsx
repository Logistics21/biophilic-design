import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link'
import { getReports } from '../db';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) redirect('/sign-in')
  const {
    id,
    firstName,
  } = user

  const reports = await getReports(id);

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        <h1 className="text-stone-500">Welcome {firstName}</h1>
        <h3>Spaces you&apos;ve evaluated</h3>
        {reports.length === 0 ? (
          <div>
            <p>Looks like you haven&apos;t evaluated any of your spaces yet. Get started by creating a new report</p>
          </div>
        ): (
          <ul>
          {reports.map((report) => {
            return (
              <li key={report.id}>
                <p>
                  {report.reportName}
                </p>
              </li>
            )
          })}
        </ul>
        )}
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
