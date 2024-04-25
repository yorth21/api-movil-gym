import { z } from 'zod'

const foodDiarySchema = z.object({
  iduser: z.number().int().min(1),
  idfood: z.number().int().min(1)
})

export function validateFoodDiary (data) {
  return foodDiarySchema.safeParse(data)
}
