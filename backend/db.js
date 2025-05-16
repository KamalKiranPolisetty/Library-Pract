const { MongoClient } = require('mongodb');
require("dotenv").config();

const url = process.env.DATABASE_CONNECTION_STRING_URL;
const DB_NAME = "Library";
let db = null;

const client = new MongoClient(url);

module.exports = {
  connectToDb: async () => {
    try {
      await client.connect();
      console.log("DataBase connected successfully!");
      db = client.db(DB_NAME); // got the library db
    } catch (error) {
      console.log("Error in connecting to database", error);
    }
  },

  getDb: () => {
    if (!db) {
      console.log("No database found!");
    }
    return db;
  },
};
