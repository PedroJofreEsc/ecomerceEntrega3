import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

const url = process.env.MONGO_URL

export const options = {
    server: {
        port: port,
        url: url
    },

}