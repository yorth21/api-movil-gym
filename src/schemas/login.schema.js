import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().min(3).max(255),
  password: z.string().min(6).max(255)
})

export function validateLogin (data) {
  return loginSchema.safeParse(data)
}
