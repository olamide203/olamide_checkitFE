import axios, { AxiosError } from "axios";
import { z } from "zod";

const missionSchema = z.object({
  name: z.string(),
  flight: z.number(),
});

const capsuleSchema = z.object({
  capsule_serial: z.string(),
  capsule_id: z.string().nullable(),
  status: z.string(),
  original_launch: z.string().nullable(),
  original_launch_unix: z.number().nullable(),
  missions: z.union([z.array(missionSchema), z.number()]),
  landings: z.number().nullable(),
  type: z.string(),
  details: z.string().nullable(),
  reuse_count: z.number().nullable(),
});

export type Mission = z.infer<typeof missionSchema>;
export type Capsule = z.infer<typeof capsuleSchema>;

export async function getCapsules() {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/capsules");
    const { data } = response;
    const capsulesArraySchema = z.array(capsuleSchema);
    capsulesArraySchema.parse(data);
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.error(
        `Error fetching capsules from "https://api.spacexdata.com/v3/capsules": ${err.message}`,
      );
      throw new Error(
        `Error fetching capsules from "https://api.spacexdata.com/v3/capsules": ${err.message}`,
      );
    } else if (err instanceof z.ZodError) {
      console.error(`Error validating capsules data: ${err.message}`);
      throw new Error(`Error validating capsules data: ${err.message}`);
    } else {
      console.error(
        "Unexpected error occurred while fetching capsules from 'https://api.spacexdata.com/v3/capsules'",
      );
      throw new Error(
        "Unexpected error occurred while fetching capsules from 'https://api.spacexdata.com/v3/capsules'",
      );
    }
  }
}
