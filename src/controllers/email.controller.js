import { Resend } from 'resend'
import { sendError, sendSuccess } from '../utils/response.util.js'
import { UserRepository } from '../data/postgres/repositories/user.repository.js'
import bcrypt from 'bcrypt'

const resend = new Resend(process.env.APIKEY_RESEND)

export class EmailController {
  static async sendEmail (req, res) {
    const { email } = req.body

    try {
      const dataUser = await UserRepository.getUserByEmail(email)
      if (!dataUser) {
        return sendError(res, 404, 'User not found')
      }

      const randomPassword = Math.random().toString(36).slice(-8)

      const hashedPassword = await bcrypt.hash(randomPassword, 10)
      dataUser.password = hashedPassword

      await UserRepository.updatePassword(dataUser.id, hashedPassword)

      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['02cuentasecundaria@gmail.com'],
        subject: 'Forgot Password',
        html: `<strong>Tu contraseña es: ${randomPassword}</strong>`
      })

      if (error) {
        sendError(res, 400, error)
      }

      sendSuccess(res, data, 201)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
