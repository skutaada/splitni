"use server";

import { db } from "@/db";
import { usersTable, billsTable } from "@/db/schema";
import { BillBase, BillTypeCreate } from "@/types/bill";

export const getAllUsers = async () => {
  const users = await db.select().from(usersTable);
  return users;
};

export const insertBill = async (formData: FormData) => {
  const validatedFields = BillTypeCreate.parse({
    name: formData.get("name"),
    amount: formData.get("amount"),
    userId: formData.get("userId"),
  });

  const amountInCents = validatedFields.amount * 100;

  await db.insert(billsTable).values({
    ...validatedFields,
    amount: amountInCents,
  });
};
