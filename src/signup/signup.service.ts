import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupModel } from './schemas/signup.model';
import * as bcrypt from 'bcrypt';

interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class SignupService {
  constructor(@InjectModel('Signup') private SignupModel: Model<SignupModel>) {}
  async signup(user: User) {
    const newUser = new this.SignupModel({
      username: user.username,
      email: user.email,
      password: await bcrypt.hash(user.password, 10),
    });
    try {
      await newUser.save();
    } catch (error) {
      console.log(error);
    }
  }
}
