import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const RoundInfos = db.define(
  "round_infos",
  {
    start_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    end_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    open: {
      type: DataTypes.DOUBLE,
      defaultValue: "0",
    },
    close: {
      type: DataTypes.DOUBLE,
      defaultValue: "0",
    },
    high: {
      type: DataTypes.DOUBLE,
      defaultValue: "0",
    },
    low: {
      type: DataTypes.DOUBLE,
      defaultValue: "0",
    },
    volume: {
      type: DataTypes.DOUBLE,
      defaultValue: "0",
    },
    real: {
      type: DataTypes.DOUBLE,
      defaultValue: "0",
    },
    result: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:Buy Won 2:Sell Won",
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default RoundInfos;
