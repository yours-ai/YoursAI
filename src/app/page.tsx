import Image from "next/image";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 flex w-full max-w-5xl justify-center">
        <article className="prose p-10 text-center lg:prose-xl">
          <Image
            src="/logo.png"
            alt="Logo"
            width="300"
            height="300"
            className="mx-auto"
          />
          <h1>YoursAI</h1>
          <Link href="https://github.com/yours-ai/YoursAI">
            <button className="btn btn-lg">
              <PiGithubLogoFill />
              Github
            </button>
          </Link>
          <p>
            Simple yet fully customizable character role-playing frontend.
            <br />
            Currently a work in progress, aiming for delivery by October 2024.
          </p>
          <p>
            <small>
              Contact us at{" "}
              <a href="mailto:contact@yoursai.app">contact@yoursai.app</a>
            </small>
          </p>
        </article>
      </div>
    </main>
  );
}
