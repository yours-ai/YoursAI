import { createContext, ReactNode, useEffect, useState } from "react";

export interface PromptInstallContextType {
  promptEvent: BeforeInstallPromptEvent | null;
}

export const PwaInstallContext = createContext<PromptInstallContextType>({
  promptEvent: null,
});

export const PwaInstallProvider = ({ children }: { children: ReactNode }) => {
  const [promptEvent, setPromptEvent] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setPromptEvent(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);
  return (
    <PwaInstallContext.Provider value={{ promptEvent }}>
      {children}
    </PwaInstallContext.Provider>
  );
};
