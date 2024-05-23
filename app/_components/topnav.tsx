import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export async function TopNav() {
    const user = await currentUser()
    let firstName;

    if (user) {
      firstName = user.firstName;
    }

    return (
        <nav className="flex w-full items-center justify-end border-b p-4 text-xl font-semibold bg-black">
            <div className="flex flex-row items-center gap-4 text-white">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {firstName}
          <UserButton />
        </SignedIn>
      </div>
        </nav>
    )
}
