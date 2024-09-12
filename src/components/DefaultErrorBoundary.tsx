import ErrorText from "@/components/ErrorText.tsx";
import { useRouteError } from "react-router-dom";

export default function DefaultErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="flex size-full items-center justify-center bg-gray-200">
      <div className="min-h-60 min-w-60">
        <ErrorText error={error as Error} />
      </div>
    </div>
  );
}
