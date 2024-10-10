import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Component() {
  const globalConfig = useLiveQuery(
    makeGlobalConfigRepository(useDb()).getGlobalConfig,
  );
  const navigate = useNavigate();

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    window.promptEvent = event;
  });

  useEffect(() => {
    if (globalConfig?.hasDoneSetup != null) {
      if (!globalConfig.hasDoneSetup) {
        navigate("/setup");
      } else {
        navigate("/main");
      }
    }
  }, [globalConfig, navigate]);

  return <></>;
}

export const ErrorBoundary = DefaultErrorBoundary;

Component.displayName = "IndexPage";
