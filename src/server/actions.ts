"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const getAllUsers = async () => {
  const users = await db.select().from(usersTable);
  return users;
};
