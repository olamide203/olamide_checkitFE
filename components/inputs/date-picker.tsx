"use client";
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useField } from "formik";

type DatePickerProps = {
  label: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
};

export function CustomDatePicker({
  label,
  name,
  disabled = false,
  placeholder = "Pick a date",
}: DatePickerProps) {
  const [field, meta, helpers] = useField(name);

  // Convert the field value to a Date object if it exists
  const date = field.value ? new Date(field.value) : undefined;

  return (
    <div className="flex flex-col gap-1">
      <Label className="text-sm capitalize">{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
            onClick={() => {
              helpers.setTouched(true);
            }}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              helpers.setValue(newDate?.toISOString());
              helpers.setTouched(true);
            }}
            initialFocus
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
      <span
        className={`h-8 text-destructive text-sm ${
          meta.touched && meta.error === "" ? "visible" : "invisible"
        }`}
      >
        {meta.error}
      </span>
    </div>
  );
}
