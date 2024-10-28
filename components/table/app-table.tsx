"use client";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { DataTable } from "./data-table";
import { useAppSelector } from "@/app/lib/store/hooks";
import { columns } from "@/app/lib/columns";

export default function AppTable() {
  const data = useAppSelector((state) => state.capsules.items);
  const filterField = useAppSelector((state) => state.capsules.filterField);

  return (
    <ScrollArea className="whitespace-nowrap ">
      <DataTable columns={columns} data={data} filterField={filterField} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
