import { z } from 'zod'

const regDiarySchema = z.object({
  weight: z.number().int().min(1).max(500),
  iduser: z.number().int().min(1)
})

export function validateRegDiary (data) {
  return regDiarySchema.safeParse(data)
}
