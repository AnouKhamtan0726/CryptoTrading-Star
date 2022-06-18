import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const WalletTransactions = db.define(
  "wallet_transactions",
  {
    user_id: {
      type: DataTypes.INTEGER(30),
      defaultValue: 0,
    },
    type: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment:
        "1:Deposit 2:Withdraw 3:Send_To_Trading_Wallet 4:Send_To_Main_Wallet",
    },
    from_address: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    to_address: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    transaction_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    amount: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.TINYINT(20),
      defaultValue: 0,
      comment: "1:Pending 2:Completed",
    },
    commission: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default WalletTransactions;
