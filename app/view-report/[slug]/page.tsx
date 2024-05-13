import { CreateReportForm } from "app/create-report/create-report-form";

export default async function ViewReportPage(props: any) {
    const { searchParams: report } = props

  return (
    <div className="flex h-fit w-screen items-center justify-center bg-gray-50 py-5">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-left justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-left sm:px-16">
          <h1 className="text-xl font-semibold">
              Here&apos;s how you evaluated your {report.reportName} space
          </h1>
          <p className="text-sm text-gray-500">
            {"(Remember: scores goes from 0 (none), 1 (weak), 2 (moderate), 3 (strong))"}
          </p>
        </div>
        <CreateReportForm
          disabled
          action={async () => {
            'use server'
          }}
          initialValues={report}
        >
          {null}
        </CreateReportForm>
      </div>
    </div>
  );
}
