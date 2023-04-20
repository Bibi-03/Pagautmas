import { config } from 'dotenv'
config()

export const SECRET = process.env.SECRET
export const SECRETRESET = process.env.SECRETRESET
export const USER_MAILER = process.env.USER_MAILER
export const PASS_MAILER = process.env.PASS_MAILER
export const DOMAIN = process.env.DOMAIN
export const PORT = process.env.PORT
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_DATABASE = process.env.DB_DATABASE
