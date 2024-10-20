import { UserSelect } from "@/types/user";
import {
  CurrencyEuroIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../button";
import { insertBill } from "@/server/actions";

export default function Form({ users }: { users: UserSelect[] }) {
  return (
    <form action={insertBill}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name for the bill
          </label>
          <div className="relative">
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Spar bill"
              className="block w-full rounded-md border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Amount
          </label>
          <div className="relative">
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter EUR amount"
              step="0.01"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div>
          <label htmlFor="customer" className="block text-sm font-medium">
            Choose user who paid
          </label>
          <div className="relative">
            <select
              name="userId"
              id="userId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a user
              </option>
              {users.map((usr) => (
                <option value={usr.id} key={usr.id}>
                  {usr.name}
                </option>
              ))}
            </select>
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button variant="default" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
