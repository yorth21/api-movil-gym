import { z } from 'zod'

const physicalInfoSchema = z.object({
  height: z.number().min(1),
  weight: z.number().min(1),
  weightGoal: z.number().min(1),
  physicalGoal: z.string().min(1),
  physicalLevel: z.string().min(1)
})

export function validatePhysicalInfo (data) {
  return physicalInfoSchema.safeParse(data)
}
