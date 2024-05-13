import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="flex w-full items-center justify-end border-b p-4 text-xl font-semibold bg-black">
            <div className="flex flex-row items-center gap-4 text-white">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
        </nav>
    )
}
