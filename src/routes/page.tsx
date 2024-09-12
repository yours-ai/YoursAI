import DefaultErrorBoundary from "@/components/DefaultErrorBoundary.tsx";

export function Component() {
  // TODO: redirect to setup if not setup, else redirect to main
  return <div>hello this is index page</div>;
}

export const ErrorBoundary = DefaultErrorBoundary;

Component.displayName = "IndexPage";
