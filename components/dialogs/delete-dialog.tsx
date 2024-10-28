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
  DialogClose,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Capsule } from "@/app/lib/data";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { deleteCapsule } from "@/app/lib/store/capsuleSlice";

export function DeleteDialog({ row }: { row: Row<Capsule> }) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const capsule = row.original;

  const handleAction = () => {
    dispatch(deleteCapsule(capsule.capsule_serial));
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Delete</Button>
      </DialogTrigger>
      <DialogContent className={`w-[400px] h-[250px] ${inter.className}`}>
        <DialogHeader>
          <DialogTitle className="text-center">Delete capsule</DialogTitle>
          <VisuallyHidden>
            <DialogDescription>
              Delete an existing capsule here. This is irreversible
            </DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center justify-center">
          <p className="text-center">
            Are you sure you want to delete capsule {capsule.capsule_serial}?
            once this is done, it cannot be reversed.
          </p>
          <div className="flex flex-row gap-4 items-center justify-center">
            <DialogClose asChild>
              <Button>close</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleAction}>
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
