import { CreateReportForm } from "./create-report-form";
import { redirect } from "next/navigation";
import { createReport } from "app/db";
import { SubmitButton } from "app/submit-button";

export default function CreateReportPage() {
  async function register(formData: FormData) {
    'use server';

    const newReport = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      firstName: formData.get('firstName') as string,
      lastName:  formData.get('lastName') as string
    }
    
    await createReport(newReport);
    redirect('/login');
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-left justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-left sm:px-16">
          <h1 className="text-xl font-semibold">
              Walk around the space you are evaluating and give a score to the following questions.
          </h1>
          <p className="text-sm text-gray-500">
            The score goes from 0 (none), 1 (weak), 2 (moderate), 3 (strong)
          </p>
        </div>
        <CreateReportForm action={register}>
          <SubmitButton>Get Your Results</SubmitButton>
        </CreateReportForm>
      </div>
    </div>
  );
}
