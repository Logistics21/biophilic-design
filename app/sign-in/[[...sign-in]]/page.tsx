import { SignIn } from "@clerk/nextjs";

export default function SingInPage() {
  return (
    <div className="flex h-full bg-white">
      <div className="flex h-screen w-screen items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}
