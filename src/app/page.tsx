import { getAllUsers } from "@/server/actions";
import { UserSelect } from "@/types/user";

export default async function Home() {
  const users: UserSelect[] = await getAllUsers();

  return (
    <div>
      {users.map((usr, idx) => (
        <div key={idx}>
          <h1>{usr.name}</h1>
          <p>{usr.id}</p>
          <p>{usr.age}</p>
        </div>
      ))}
    </div>
  );
}
