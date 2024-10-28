import { Row } from "@tanstack/react-table";
import { useState } from "react";
import { inter } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CreateCapsuleForm } from "../forms/create-capsule";
import type { Values } from "@/components/forms/create-capsule";
import { Capsule } from "@/app/lib/data";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { updateCapsule } from "@/app/lib/store/capsuleSlice";

export function EditDialog({ row }: { row: Row<Capsule> }) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const capsule = row.original;
  let missions;
  if (typeof capsule.missions === "number") {
    missions = capsule.missions;
  } else {
    missions = capsule.missions.length;
  }
  const initialData: Values = {
    capsule_serial: capsule.capsule_serial,
    status: capsule.status,
    original_launch: capsule.original_launch || "",
    missions,
    type: capsule.type,
  };

  const handleAction = (data: Values) => {
    dispatch(updateCapsule(data as Capsule));
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-lg h-[400px] ${inter.className}`}>
        <DialogHeader>
          <DialogTitle>Edit capsule data</DialogTitle>
          <VisuallyHidden>
            <DialogDescription>
              Edit an existing capsule here. click save when you are done
            </DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center">
          <CreateCapsuleForm
            onFinish={closeDialog}
            initialValues={initialData}
            handleAction={handleAction}
            action="edit"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
