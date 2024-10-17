import {
  PiGithubLogoFill,
  PiNotePencilFill,
  PiRssSimpleBold,
} from "react-icons/pi";
import "./waitlist-page.css";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useQuery } from "@tanstack/react-query";
import GhostContentAPI from "@tryghost/content-api";
import { parseISO } from "date-fns";
import { useFormatAutoLocale } from "@/contrib/date-fns/format.ts";
import { Trans, useTranslation } from "react-i18next";

export function Component() {
  const { data } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: () => {
      const api = new GhostContentAPI({
        url: import.meta.env.VITE_GHOST_API_URL,
        key: import.meta.env.VITE_GHOST_API_KEY,
        version: "v5.0",
      });

      return api.posts.browse({
        limit: 5,
        include: ["tags", "authors"],
        filter: "tag:-history",
      });
    },
  });
  const formatAutoLocale = useFormatAutoLocale();
  const { t } = useTranslation("pages/waitlist");
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
                  {t("blog")}
                </button>
              </a>
              <a href="https://form.yoursai.app/waitlist">
                <button className="btn btn-lg">
                  <PiNotePencilFill />
                  {t("waitlist")}
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
              {t("description")}
              <br />
              {t("status")}
            </p>
            <h2>{t("latestBlogPosts")}</h2>
            <div className="not-prose flex flex-col items-center gap-2">
              {data &&
                data.map((post) => (
                  <a
                    href={post.url}
                    target="_blank"
                    className="card max-w-[700px] bg-base-100 shadow-xl lg:card-side"
                    key={post.id}
                  >
                    <figure className="max-h-[150px] w-full items-stretch lg:max-h-none lg:w-2/6">
                      {post.feature_image ? (
                        <img
                          src={post.feature_image}
                          alt="featured image"
                          className="h-full object-cover"
                        />
                      ) : (
                        <div className="size-full bg-gray-300" />
                      )}
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{post.title}</h2>
                      <p className="text-left text-sm">{post.excerpt}</p>
                      <p className="text-left text-sm text-gray-500">
                        {post.created_at &&
                          formatAutoLocale(
                            parseISO(post.created_at),
                            "MMMM dd, yyyy",
                          )}
                        &nbsp;&middot;&nbsp;
                        {post.authors?.[0]?.name}
                        &nbsp;&middot;&nbsp;
                        {post.tags?.map((tag) => (
                          <div
                            className="badge"
                            style={{
                              backgroundColor: tag.accent_color ?? undefined,
                            }}
                          >
                            {tag.name}
                          </div>
                        ))}
                      </p>
                    </div>
                  </a>
                ))}
            </div>
            <hr />
            <p>
              <small className="leading-3">
                <Trans t={t} i18nKey="maintainedBy">
                  Maintained by
                  <a href="https://www.pygmalion.team">Pygmalion team</a>,
                  Korea.
                </Trans>
                <br />
                <Trans t={t} i18nKey="contactUs">
                  Contact us at
                  <a href="mailto:contact@yoursai.app">contact@yoursai.app</a>
                </Trans>
              </small>
              <div className="h-10" />
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}

Component.displayName = "WaitListPage";

export const ErrorBoundary = DefaultErrorBoundary;
