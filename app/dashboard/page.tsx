import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link'
import { getReports, getUser, createUser } from '../db';
import { redirect } from 'next/navigation';

const fetchClerkUser = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in')
  const {
    id,
    firstName = '',
    lastName = '',
    emailAddresses = [],
  } = clerkUser
  
  try {
    const emailAddress = emailAddresses[0].emailAddress
    const user = await getUser(emailAddress)

    if (user.length !== 0) {
      const reports = await getReports(id)

      return {
        firstName,
        reports
      }
    } else if (firstName && lastName && emailAddresses.length !== 0) {
      const createdUser = await createUser({
        email: emailAddress,
        firstName,
        lastName,
        clerkId: id
      })
    }
    console.log(user)
  } catch (error) {
    console.log(error)
  }

  return {
    firstName,
    reports: []
  }
}
export default async function DashboardPage() {
  const userData = await fetchClerkUser()

  const {
    firstName,
    reports
  } = userData

  return (
    <div className="flex h-full bg-white">
      <div className="w-screen h-screen flex flex-col space-y-5 p-5 justify-start items-start text-black">
        <h1 className="text-black text-3xl">Welcome {firstName}</h1>
        <h3>Spaces you&apos;ve evaluated:</h3>
        {reports.length === 0 ? (
          <div className='ml-5'>
            <p>Looks like you haven&apos;t evaluated any of your spaces yet. Get started by creating a new report</p>
          </div>
        ): (
          <ul>
          {reports.map((report) => {
            return (
              <li
                key={report.id}
                className='ml-5'
              >
                <Link
                  href={{
                    pathname: `/view-report/${report.id}`,
                    query: report
                  }}
                  className="text-black px-5 py-2.5 underline hover:text-green-700 transition-all"
                >
                  {report.reportName}
                </Link>
              </li>
            )
          })}
        </ul>
        )}
        <Link
            href="/create-report"
            className="text-white bg-green-700 focus:bg-green-800 rounded-lg px-5 py-2.5 hover:text-stone-200 transition-all"
          >
            Create New Report
          </Link>
      </div>
    </div>
  );
}
