import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product",
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Nilai default ketika produk dibuat
    },
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Product;

// async function refreshDatabase() {
//   try {
//     // Sinkronisasi model-model dengan database
//     await db.sync({ force: true }); // force: true akan menghapus dan membuat ulang tabel

//     console.log("Database berhasil di-refresh.");
//   } catch (error) {
//     console.error("Terjadi kesalahan saat merefresh database: ", error);
//   }
// }

// // Jalankan fungsi refreshDatabase
// refreshDatabase();
