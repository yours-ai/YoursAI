import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl lg:flex">
        <article className="prose p-10 text-center lg:prose-xl">
          <Image
            src="/logo.png"
            alt="Logo"
            width="300"
            height="300"
            className="mx-auto"
          />
          <h1>YoursAI</h1>
          <p>Simple yet fully customizable character role-playing frontend.</p>
        </article>
      </div>
    </main>
  );
}
