import db from "../db/connection.js"
import Show from "../models/Show.js"
import showData from "./shows.json" assert { type: 'json' }
import chalk from "chalk"

const insertData = async () => {
    await db.dropDatabase()

    await Show.create(showData)

    console.log(chalk.blue("Shows added"))

    await db.close()
}

insertData()