import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const AdminSettigns = db.define(
  "admin_settings",
  {
    trading_profit: {
      type: DataTypes.DOUBLE,
      defaultValue: "0.95",
    },
    round_time: {
      type: DataTypes.INTEGER(30),
      defaultValue: "30",
    },
    manage_started: {
      type: DataTypes.TINYINT(10),
      defaultValue: "0",
    },
    graph_move: {
      type: DataTypes.TINYINT(10),
      defaultValue: "0",
      comment: "0:default 1:increase 2:decrease",
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default AdminSettigns;
