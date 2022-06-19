import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transactions = db.define(
  "transactions",
  {
    user_id: {
      type: DataTypes.INTEGER(30),
    },
    round_id: {
      type: DataTypes.INTEGER(30),
    },
    bet_to: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:To Buy 2:To Sell",
    },
    is_live: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:Live 2:Demo",
    },
    bet_amount: {
      type: DataTypes.DOUBLE,
      defaultValue: "0",
    },
    bet_result: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:Earn 2:Lost 3:Failed",
    },
    is_claimed: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "0:Not Claimed 1:Claimed",
    },
    bet_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Transactions;
