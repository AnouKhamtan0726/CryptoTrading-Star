import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const AdminUsers = db.define(
  "admins",
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
    role: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:Main-Admin 2:Account-Admin 3:Trading-Admin",
    },
    access_setting: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:Admin 2:Users 3:Referral 4:Trading 5:Billing",
    },
    email_verify_code: {
      type: DataTypes.STRING,
    },
    email_verify_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: "0",
    },
    email_sent_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    phone_verify_code: {
      type: DataTypes.STRING,
    },
    phone_verify_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: "0",
    },
    phone_sent_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    current_status: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:Live 2:Blocked(bad-user) 3:Blocked(bad-country) 4:Pedding(unverified)",
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

export default AdminUsers;
