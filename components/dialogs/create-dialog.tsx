import { useState } from "react";
import { inter } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CreateCapsuleForm, Values } from "../forms/create-capsule";
import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks";
import { addCapsule } from "@/app/lib/store/capsuleSlice";
import { Capsule } from "@/app/lib/data";

export function CreateDialog() {
  const [open, setOpen] = useState(false);
  const nextID = useAppSelector((state) => state.capsules.nextID);
  const dispatch = useAppDispatch();
  const initialData: Values = {
    capsule_serial: `C${nextID}`,
    status: "",
    original_launch: "",
    missions: 0,
    type: "",
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleAction = (data: Values) => {
    dispatch(addCapsule(data as Capsule));
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="aspect-square">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-lg h-[600px] sm:h-[400px] ${inter.className}`}
      >
        <DialogHeader>
          <DialogTitle>Add new capsule</DialogTitle>
          <VisuallyHidden>
            <DialogDescription>
              create a new capsule here. click save when you are done
            </DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center">
          <CreateCapsuleForm
            onFinish={closeDialog}
            initialValues={initialData}
            handleAction={handleAction}
            action="create"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
