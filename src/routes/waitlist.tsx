import {
  PiGithubLogoFill,
  PiNotePencilFill,
  PiRssSimpleBold,
} from "react-icons/pi";
import "./waitlist-page.css";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";

export function Component() {
  return (
    <div className="relative font-sans">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 flex w-full max-w-5xl justify-center lg:pt-20">
          <article className="prose px-10 text-center lg:prose-xl">
            <img src="/logo.png" alt="Logo" className="mx-auto size-52" />
            <h1>YoursAI</h1>
            <div className="flex justify-center gap-2">
              <a href="https://blog.yoursai.app/">
                <button className="btn btn-lg">
                  <PiRssSimpleBold />
                  Blog
                </button>
              </a>
              <a href="https://form.yoursai.app/waitlist">
                <button className="btn btn-lg">
                  <PiNotePencilFill />
                  Waitlist
                </button>
              </a>
              <a href="https://github.com/yours-ai/YoursAI">
                <button className="btn btn-lg">
                  <PiGithubLogoFill />
                  Github
                </button>
              </a>
            </div>
            <p>
              Customizable AI companion frontend for enthusiasts.
              <br />
              Currently a work in progress, aiming for delivery by November
              2024.
            </p>
            <hr />
            <p>
              <small>
                Contact us at{" "}
                <a href="mailto:contact@yoursai.app">contact@yoursai.app</a>
              </small>
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}

Component.displayName = "WaitListPage";

export const ErrorBoundary = DefaultErrorBoundary;
