export interface Person {
  id?: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address?: string;
  city?: string;
  country?: string;
  sex?: string;
  photo?: string;
  rate?: number;
  birthday: Date;
}
