import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link, useParams } from "react-router-dom";

export function Component() {
  const { friendId } = useParams();
  useRightPrimaryPage();

  return (
    <div className="size-full">
      <div className="flex size-96 items-center justify-center bg-gray-200 text-3xl">
        This is friends detail page for id: {friendId}
      </div>
      <Link to="../">Back</Link>
    </div>
  );
}

Component.displayName = "FriendsDetailPage";
