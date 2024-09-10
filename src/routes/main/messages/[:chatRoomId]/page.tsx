import { useParams } from "react-router-dom";

export function Component() {
  const { chatRoomId } = useParams();
  return (
    <div className="flex size-full items-center justify-center bg-gray-200 text-3xl">
      This is chat detail page for id: {chatRoomId}
    </div>
  );
}
