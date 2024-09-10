import { useParams } from "react-router-dom";

export function Component() {
  const { settingsId } = useParams();
  return (
    <div className="flex size-full items-center justify-center bg-gray-200 text-3xl">
      This is settings detail page for id: {settingsId}
    </div>
  );
}
