import { Document } from 'mongoose';

export interface IUserModel extends Document{
  name: string;
  email: string;
  age: number;
  address: string;
  phone: number;
}