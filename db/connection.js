import mongoose from 'mongoose'
import chalk from 'chalk'

mongoose.set("returnOriginal", false)

const MONGODB_URI = process.env.MONGODB_PROD ||
'mongodb://localhost:27017/Broadway_Shows'

mongoose.connect(MONGODB_URI).catch((err) => {
    console.error(chalk.bold("Database error", err))
})

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log(chalk.bold("Disconnected from database")))
mongoose.connection.on('error', error => console.error(chalk.bold("Database error", error)))

export default mongoose.connection
