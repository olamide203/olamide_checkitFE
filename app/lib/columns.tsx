import { ColumnDef } from "@tanstack/react-table";
import type { Capsule } from "./data";
import { Button } from "@/components/ui/button";
import { EditDialog } from "@/components/dialogs/edit-dialog";
import { DeleteDialog } from "@/components/dialogs/delete-dialog";

export const columns: ColumnDef<Capsule>[] = [
  {
    accessorKey: "capsule_serial",
    header: "Capsule ID",
  },

  {
    accessorKey: "original_launch",
    header: "Original launch date",
    filterFn: (row, id, filterValue: string) => {
      const value = row.getValue<string | null>("original_launch");

      // Handle null/undefined values
      if (!value) return false;

      try {
        const date = new Date(value);

        // Check if date is valid
        if (isNaN(date.getTime())) return false;

        const options: Intl.DateTimeFormatOptions = {
          timeZone: "UTC",
          day: "numeric",
          month: "short",
          year: "numeric",
        };

        const formattedDate = date.toLocaleString("en-US", options);

        // Case-insensitive search
        return formattedDate.toLowerCase().includes(filterValue.toLowerCase());
      } catch (error) {
        return false;
      }
    },
    cell: ({ row }) => {
      const value: string = row.getValue("original_launch");
      if (value) {
        const date = new Date(value);

        const options: Intl.DateTimeFormatOptions = {
          timeZone: "UTC",
          day: "numeric",
          month: "short",
          year: "numeric",
        };

        const formattedDate = date.toLocaleString("en-US", options);
        return <div className="text-left font-medium">{formattedDate}</div>;
      }
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "no_of_missions",
    accessorFn: (row) => {
      if (typeof row.missions === "number") {
        return row.missions;
      } else {
        return row.missions.length;
      }
    },
    header: () => <div className="text-center">No of Missions</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">{row.getValue("no_of_missions")}</div>
      );
    },
  },
  {
    id: "edit",
    cell: EditDialog,
  },
  {
    id: "delete",
    cell: DeleteDialog,
  },
];
