import { CreateReportForm } from "./create-report-form";
import { redirect } from "next/navigation";
import { createReport } from "app/db";
import { SubmitButton } from "app/submit-button";
import { currentUser } from "@clerk/nextjs/server";

export default function CreateReportPage() {
  async function submitReport(formData: FormData) {
    'use server';

    const user = await currentUser();
    console.log(user)
    console.log(formData)
    if (user) {
      const newReport = {
        clerkUserId: user.id,
        reportName: formData.get('reportName') as string,
        airScore: parseInt(formData.get('airScore') as string, 10),
        // animalsScore: parseInt(formData.get('animalsScore') as string, 10),
        // fireScore: parseInt(formData.get('fireScore') as string, 10),
        // insideOutsideScore: parseInt(formData.get('insideOutsideScore') as string, 10),
        // naturaLightScore: parseInt(formData.get('naturaLightScore') as string, 10),
        // naturalMaterialsScore: parseInt(formData.get('naturalMaterialsScore') as string, 10),
        // plantsScore: parseInt(formData.get('plantsScore') as string, 10),
        // viewsVistasScore: parseInt(formData.get('viewsVistasScore') as string, 10),
        // waterScore: parseInt(formData.get('waterScore') as string, 10),
      }
      
      await createReport(newReport);
      redirect('/dashboard');
    }
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
        <CreateReportForm action={submitReport}>
          <SubmitButton>Get Your Results</SubmitButton>
        </CreateReportForm>
      </div>
    </div>
  );
}
