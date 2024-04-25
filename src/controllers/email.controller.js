import { sendError, sendSuccess } from '../utils/response.util.js'
import { UserRepository } from '../data/postgres/repositories/user.repository.js'
import bcrypt from 'bcrypt'
import { transporter } from '../data/emails/sendEmail.js'

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

      const propsEmail = {
        from: '',
        to: email,
        subject: 'Password reset',
        text: `Your new password is: ${randomPassword}`,
        html: `<p>Your new password is: ${randomPassword}</p>`
      }

      transporter.sendMail(propsEmail, (error, info) => {
        if (error) {
          console.log(error)
          throw new Error(error)
        }
        console.log('Email sent')
      })

      sendSuccess(res, 'Email sent', 201)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
