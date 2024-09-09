import { PiGithubLogoFill } from "react-icons/pi";
import "@/index-page.css";
import Layout from "@/components/Layout";

export function Component() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 flex w-full max-w-5xl justify-center lg:pt-20">
          <article className="prose px-10 text-center lg:prose-xl">
            <img src="/logo.png" alt="Logo" className="mx-auto size-52" />
            <h1>YoursAI</h1>
            <a href="https://github.com/yours-ai/YoursAI">
              <button className="btn btn-lg">
                <PiGithubLogoFill />
                Github
              </button>
            </a>
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
    </Layout>
  );
}

Component.displayName = "IndexPage";
