"use client"
import { currentUser } from "@clerk/nextjs/dist/types/server";
import { FormPageOne } from "./_components/form-page-1";
import { FormPageTwo } from "./_components/form-page-2";
import { FormPageThree } from "./_components/form-page-3";
import { FunctionComponent, useState } from "react";

type PageDictionaryType = {
  [key: number]: React.ComponentType<any>;
};

const PageDictionary: PageDictionaryType = {
  0: FormPageOne,
  1: FormPageTwo,
  2: FormPageThree
}
export function CreateReportForm({
  action,
  children,
  disabled = false,
  initialValues
}: {
  action: any;
  children: React.ReactNode;
  disabled: boolean;
  initialValues: {
    [key: string]: string
  } | undefined;
}) {
    const [currentPageNumber, setCurrentPageNumber] = useState(0)
    const handlePreviousPage = () => {
      setCurrentPageNumber(currentPageNumber - 1)
    }
    const handleNextPage = () => {
      setCurrentPageNumber(currentPageNumber + 1)
    }
    const defaultValue = 0;

    const CurrentPage = PageDictionary[currentPageNumber]
    return (
      <form
        action={action}
        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      >
        <div>
          <label
            htmlFor="reportName"
            className="block text-xs text-gray-600 uppercase"
            >
              Enter the name of the room for this report
          </label>
          <input
            type="text"
            id="reportName"
            name="reportName"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <CurrentPage
          disabled={disabled}
          initialValues={initialValues}
        />
        {children}
        <button
          type="button"
          disabled={currentPageNumber < 1}
          onClick={handlePreviousPage}
          className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Previous Page
          </button>
        <button
          type="button"
          disabled={currentPageNumber >= 2}
          onClick={handleNextPage}
          className="cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Next Page
          </button>
      </form>
    );
  }
