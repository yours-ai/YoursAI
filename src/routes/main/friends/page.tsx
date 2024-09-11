import { Link, Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";

export function Component() {
  useLeftPrimaryPage("/main/friends");
  const outletContext = useOutletContext();

  return (
    <SplitViewPage
      leftPane={
        <div>
          <div className="mt-10 pl-4 text-2xl font-bold">친구</div>
          <Link to="/main/friends/1">친구 1</Link>
        </div>
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "FriendsPage";
