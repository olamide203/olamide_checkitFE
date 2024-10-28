import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useField } from "formik";

type CustomSelectProps = {
  label: string;
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  placeholder?: string;
};

export function CustomSelect({
  label,
  name,
  options,
  placeholder = "Select an option",
}: CustomSelectProps) {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="flex flex-col gap-1">
      <Label className="text-sm capitalize">{label}</Label>
      <Select
        value={field.value}
        onValueChange={(value) => {
          helpers.setValue(value);
          helpers.setTouched(true);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent onCloseAutoFocus={() => helpers.setTouched(true)}>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <span
        className={`h-8 text-destructive text-sm ${
          meta.error && meta.touched ? "visible" : "invisible"
        }`}
      >
        {meta.error}
      </span>
    </div>
  );
}
