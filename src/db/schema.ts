import { foreignKey, int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const billsTable = sqliteTable("bills_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  amount: int().notNull(),
  userId: int("user_id").references(() => usersTable.id),
});
