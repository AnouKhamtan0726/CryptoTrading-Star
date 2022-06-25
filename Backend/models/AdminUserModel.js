import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const AdminUsers = db.define(
  "admins",
  {
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    first_name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    last_name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    refresh_token: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    role: {
      type: DataTypes.TEXT,
      defaultValue: 0,
      comment: "1:Main-Admin 2:Account-Admin 3:Trading-Admin",
    },
    access_setting: {
      type: DataTypes.TEXT,
      defaultValue: "",
      comment: "1:Admin 2:Users 3:Referral 4:Trading 5:Billing",
    },
    email_verify_code: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    email_verify_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: "0",
    },
    email_sent_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    phone_verify_code: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phone_verify_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: "0",
    },
    phone_sent_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    current_status: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment:
        "1:Live 2:Blocked(bad-user) 3:Blocked(bad-country) 4:Pedding(unverified)",
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
