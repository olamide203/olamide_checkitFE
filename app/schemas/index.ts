import * as yup from "yup";

export const createCapsuleSchema = yup.object().shape({
  status: yup
    .string()
    .oneOf(["active", "unknown", "retired", "destroyed"])
    .required("Required"),
  type: yup
    .string()
    .oneOf(["Dragon 1.0", "Dragon 1.1", "Dragon 2.0", "Dragon 2.1"])
    .required("Required"),
  missions: yup
    .number()
    .min(0, "Missions can not be less than 0")
    .required("Required"),
  original_launch: yup.string().required("Required"),
});
