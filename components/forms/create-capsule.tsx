import { CustomInput } from "@/components/inputs/custom-input";
import { CustomSelect } from "@/components/inputs/custom-select";
import { CustomDatePicker } from "../inputs/date-picker";
import { Formik, Form, FormikHelpers } from "formik";
import { createCapsuleSchema } from "@/app/schemas";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/app/lib/store/hooks";

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Destroyed", value: "destroyed" },
  { label: "Unknown", value: "unknown" },
  { label: "Retired", value: "retired" },
];
const typeOptions = [
  { label: "Dragon 1.0", value: "Dragon 1.0" },
  { label: "Dragon 1.1", value: "Dragon 1.1" },
  { label: "Dragon 2.0", value: "Dragon 2.0" },
  { label: "Dragon 2.1", value: "Dragon 2.1" },
];

export interface Values {
  original_launch: string;
  status: string;
  type: string;
  missions: number;
  capsule_serial: string;
}

export function CreateCapsuleForm({
  onFinish,
  initialValues,
  handleAction,
  action,
}: {
  onFinish: () => void;
  initialValues: Values;
  handleAction: (x: Values) => void;
  action: string;
}) {
  const handleSubmit = (values: Values) => {
    console.log(typeof values.original_launch);
    handleAction(values);
    onFinish();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createCapsuleSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="flex flex-row gap-3 flex-wrap">
          <CustomInput
            label="missions"
            type="number"
            name="missions"
            placeholder="Enter number of missions"
          />
          <CustomSelect
            label="status"
            options={statusOptions}
            name="status"
            placeholder="select status"
          />
          <CustomSelect
            label="type"
            options={typeOptions}
            name="type"
            placeholder="select type"
          />
          <CustomDatePicker
            label="Original Launch Date"
            name="original_launch"
            placeholder="dd/mm/yy"
          />

          <div className="w-full flex items-end gap-4 flex-row">
            <Button type="submit" className="capitalize">
              {action} Capsule
            </Button>
            <Button type="button" variant="outline" onClick={onFinish}>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
