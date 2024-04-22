import { z } from 'zod'

const foodDiarySchema = z.object({
  iduser: z.string().min(3).max(255),
  idfood: z.string().min(3).max(255)
})

export function validateFoodDiary (data) {
  return foodDiarySchema.safeParse(data)
}
