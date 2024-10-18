import Form from "@/components/ui/bills/create-form";
import { getAllUsers } from "@/server/actions";

export default async function BillsCreate() {
  const users = await getAllUsers();

  return <Form users={users} />;
}
