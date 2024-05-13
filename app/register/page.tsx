import Link from 'next/link';
import { Form } from 'app/form';
import { redirect } from 'next/navigation';
import { createUser, getUser } from 'app/db';
import { SubmitButton } from 'app/submit-button';
import { clerkClient } from '@clerk/nextjs/server';

export default function Register() {
  async function register(formData: FormData) {
    'use server';

      const emailAddress = formData.get('email') as string;
      const password = formData.get('password') as string;
      const firstName = formData.get('firstName') as string;
      const lastName =  formData.get('lastName') as string;

    try {
      // const clerkUser = await clerkClient.users.createUser(newUser)
      // const clerkUser = await clerkClient.users.createUser({
      //   emailAddress: ['tom3@test.com'],
      //   password: 'password',
      //   firstName: 'tom3',
      //   lastName: 'test',
      // })
      const clerkUser = await clerkClient.users.createUser({
        emailAddress: [formData.get('email')] as string[],
        password,
        firstName,
        lastName,
      })

      await createUser({
        email: emailAddress,
        password,
        firstName,
        lastName,
        clerkId: clerkUser.id
      })
      // console.log(existingEmailAddress);
      // const existingEmailAddress = await clerkClient.emailAddresses.getEmailAddress(emailAddress);
      // console.log(existingEmailAddress);

    } catch (error: any) {
      console.log(error.errors[0].code);
    }
    // const user = await getUser(newUser.email)

    // if (user.length > 0) {
    //   return 'User already exists'; // TODO: Handle errors with useFormStatus
    // } else {
    //   await createUser(newUser);
    //   redirect('/login');
    // }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-left justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-left sm:px-16">
          <h1 className="text-xl font-semibold">Make your spaces better</h1>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Link href="/login" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {' instead.'}
          </p>
        </Form>
      </div>
    </div>
  );
}
