import { Sequelize } from "sequelize";

const db = new Sequelize('learn_mern_template', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

export default db;