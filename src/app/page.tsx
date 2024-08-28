import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center text-center lg:flex">
        <Image src="/logo.png" alt="Logo" width="300" height="300" />
        <h1 className="">YoursAI</h1>
      </div>
    </main>
  );
}
