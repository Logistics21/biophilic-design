import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import leafIcon from "public/images/leaf.svg"

export async function TopNav() {
    const user = await currentUser()
    let firstName;

    if (user) {
      firstName = user.firstName;
    }

    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold bg-white">
        <div className="flex flow-row items-center gap-x-4">
          <Image
            src={leafIcon}
            width={32}
            height={32}
            alt="a green leaf with little bubbles"
          />
          <h1>Biophilic Design</h1>
        </div>
        <div className="flex flex-row items-center gap-4 text-black">
          <Link
            href="/about"
          >
            Learn More
          </Link>
          <SignedOut>
            <SignUpButton />
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
