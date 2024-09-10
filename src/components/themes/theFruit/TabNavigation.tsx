import { Link } from "react-router-dom";

export default function TabNavigation() {
  return (
    <div className="flex h-[58px] border-t-2">
      <Link className="flex-1 bg-blue-600" to="/main/friends" />
      <Link className="flex-1 bg-green-600" to="/main/messages" />
      <Link className="flex-1 bg-amber-600" to="/main/settings" />
    </div>
  );
}
