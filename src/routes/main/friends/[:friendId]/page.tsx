import { useParams } from "react-router-dom";

export function Component() {
  const { friendId } = useParams();
  return (
    <div className="flex size-full items-center justify-center bg-gray-200 text-3xl">
      This is friends detail page for id: {friendId}
    </div>
  );
}
