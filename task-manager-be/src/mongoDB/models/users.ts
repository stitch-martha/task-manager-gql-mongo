import { Schema, model } from 'mongoose';

interface User {
  id: string
  name: string
  family_name: string
}

const userSchema = new Schema<User>({
  name: String,
  id: String,
  family_name: String,
});

export const User = model<User>('user', userSchema);