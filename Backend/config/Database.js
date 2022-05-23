import { Sequelize } from "sequelize";

const db = new Sequelize('didi_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;