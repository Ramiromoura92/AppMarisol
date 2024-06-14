import {enablePromise,openDatabase} from "react-native-sqlite-storage"
  
  // Enable promise for SQLite
  enablePromise(true)
  
  export const connectToDatabase = async () => {
    return openDatabase(
      { name: "marisol.db", location: "default" },
      () => {},
      (error) => {
        console.error(error)
        throw Error("Could not connect to database")
      }
    )
  }
  const db = await connectToDatabase()

  export const createTable = async (db: SQLiteDatabase) => {
    const users = `
      CREATE TABLE IF NOT EXISTS User (
          user_id INTEGER AUTOINCREMENT NOT NULL,
          name TEXT,
          registration TEXT,
          senha TEXT,
          PRIMARY KEY(id)
      )
    `
    const products = `
     CREATE TABLE IF NOT EXISTS Products (
        products_id INTEGER PRIMARY KEY AUTOINCREMENT,
        productName TEXT,
        amount TEXT,
        entryDate TEXT
        productPhoto TEXT
        FOREIGN KEY (user_id) REFERENCES User(user_id)
     )
    `
    try {
      await db.executeSql(users)
      await db.executeSql(products)
    } catch (error) {
      console.error(error)
      throw Error(`Failed to create tables`)
    }
  }