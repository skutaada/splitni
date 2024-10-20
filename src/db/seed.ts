import { db } from ".";
import { usersTable } from "./schema";
import { UserInsert } from "@/types/user";

async function main() {
  const users: UserInsert[] = [
    {
      name: "John",
      age: 24,
      email: "test1@test.com",
    },
    {
      name: "Maria",
      age: 35,
      email: "test2@test.com",
    },
  ];

  await db.insert(usersTable).values(users);
  console.log("Users inserted");
}

main();
