import { z } from "zod";

export interface BillBase {
  name: string;
  amount: number;
  userId: number;
}

export interface BillGet extends BillBase {
  id: number;
}

export const BillType = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.coerce.number(),
  userId: z.coerce.number(),
});

export const BillTypeCreate = BillType.omit({ id: true });
