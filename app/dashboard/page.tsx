import { getCapsules } from "@/app/lib/data";
import StoreProvider from "../lib/store/provider";
import { AppCards } from "@/components/app-cards";
import AppTable from "@/components/table/app-table";

export default async function Page() {
  const capsules = await getCapsules();
  const preloadedState = {
    capsules: {
      items: capsules,
      status: "idle" as const,
      filterField: "status" as const,
      nextID: 220,
      pageIndex: 0,
    },
  };

  return (
    <StoreProvider preloadedState={preloadedState}>
      <div className="p-8 flex gap-10 flex-col max-w-screen-xl mx-auto overflow-x-hidden">
        <AppCards />
        <AppTable />
      </div>
    </StoreProvider>
  );
}
