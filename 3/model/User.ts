import { Schema, model } from 'mongoose';
import { IUserModel } from '../interface/User';

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  }
},
{
  timestamps: true
});

export default model<IUserModel>("User", UserSchema);