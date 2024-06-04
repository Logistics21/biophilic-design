import { CreateReportForm } from "./create-report-form";
import { redirect } from "next/navigation";
import { createReport } from "app/db";
import { SubmitButton } from "app/submit-button";

export default function CreateReportPage() {
  async function submitReport(formData: FormData) {
    'use server';

    await createReport(formData);
    redirect('/dashboard');
  }

  return (
    <div className="flex h-fit w-screen items-center justify-center bg-gray-50 py-5">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-left justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-left sm:px-16">
          <h1 className="text-xl font-semibold">
              Walk around the space you are evaluating and give a score to the following questions.
          </h1>
          <p className="text-sm text-gray-500">
            The score goes from 0 (none), 1 (weak), 2 (moderate), 3 (strong)
          </p>
        </div>
        <CreateReportForm
          disabled={false}
          action={submitReport}
          initialValues={undefined}
        >
          <SubmitButton>Get Your Results</SubmitButton>
        </CreateReportForm>
      </div>
    </div>
  );
}
