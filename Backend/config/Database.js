import { Sequelize } from "sequelize";

const db = new Sequelize("didi_db", "root", "surprising99726", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
