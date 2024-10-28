import { Label } from "@/components/ui/label";
import { Field, useField, FieldHookConfig } from "formik";

type CustomInputProps = {
  label: string;
} & FieldHookConfig<string>;

export function CustomInput({ label, ...props }: CustomInputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1">
      <Label className="text-sm capitalize">{label}</Label>
      <Field
        {...field}
        {...props}
        className={`flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${meta.error && meta.touched ? "border-destructive focus-visible:ring-destructive" : "border-input"}`}
      />
      <span
        className={`h-2 text-destructive text-sm ${meta.error && meta.touched ? "visible" : "invisible"}`}
      >
        {meta.error}
      </span>
    </div>
  );
}
