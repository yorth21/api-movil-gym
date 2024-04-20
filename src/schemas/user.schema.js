import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(3).max(50),
  lastname: z.string().min(3).max(50),
  age: z.number().int().min(1).max(150),
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(255)
})

export function validateUser (data) {
  return userSchema.safeParse(data)
}
