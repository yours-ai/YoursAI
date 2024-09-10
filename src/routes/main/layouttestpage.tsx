import SplitView from "@/routes/main/SplitView.tsx";

export function Component() {
  return (
    <SplitView
      primary="left"
      leftNav={
        <div className="flex h-[58px] border-t-2">
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-green-600" />
          <div className="flex-1 bg-amber-600" />
        </div>
      }
      leftPane={Array.from(Array(300).keys()).map((i) =>
        i % 3 == 0 ? (
          <div key={`red-${i}`} className="h-10 w-[100px] bg-red-600" />
        ) : i % 3 == 1 ? (
          <div key={`blue-${i}`} className="h-10 w-full bg-blue-600" />
        ) : (
          <div key={`yellow-${i}`} className="h-10 w-full bg-yellow-600" />
        ),
      )}
      rightPane={Array.from(Array(300).keys()).map((i) =>
        i % 3 == 0 ? (
          <div key={`amber-${i}`} className="h-10 w-[100px] bg-amber-600" />
        ) : i % 3 == 1 ? (
          <div key={`gray-${i}`} className="h-10 w-full bg-gray-600" />
        ) : (
          <div key={`green-${i}`} className="h-10 w-full bg-green-600" />
        ),
      )}
    />
  );
}

Component.displayName = "MainPage";
