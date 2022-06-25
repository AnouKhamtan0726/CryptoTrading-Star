import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Countrys = db.define(
  "countrys",
  {
    iso: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    nicename: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    iso3: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    numcode: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phonecode: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => {
  await db.sync();
})();

export default Countrys;
