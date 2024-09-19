import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link, useParams } from "react-router-dom";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";

export function Component() {
  const { chatRoomId } = useParams();
  useRightPrimaryPage();

  return (
    <div className="size-full">
      <div className="flex size-96 items-center justify-center bg-gray-200 text-3xl">
        This is chatroom page for id: {chatRoomId}
      </div>
      <Link to="../">Back</Link>
    </div>
  );
}

Component.displayName = "ChatroomPage";

export const ErrorBoundary = DefaultErrorBoundary;
