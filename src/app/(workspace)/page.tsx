import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <UserButton user={user} />
    </main>
  );
}
