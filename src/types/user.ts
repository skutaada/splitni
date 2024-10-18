interface UserBase {
  name: string;
  age: number;
  email: string;
}

export interface UserGet extends UserBase {
  id: number;
}
