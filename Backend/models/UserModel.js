import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    real_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER(30),
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
    email_verify_code: {
      type: DataTypes.STRING,
    },
    email_verify_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: "0",
    },
    email_sent_at: {
      type: 'TIMESTAMP',
    },
    phone_verify_code: {
      type: DataTypes.STRING,
    },
    phone_verify_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: "0",
    },
    phone_sent_at: {
      type: 'TIMESTAMP',
    },
    current_status: {
      type: DataTypes.TINYINT(20),
      defaultValue: "0",
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: "0",
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Users;
