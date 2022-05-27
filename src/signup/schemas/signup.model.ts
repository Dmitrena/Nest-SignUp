import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Signup {
  @Prop({ unique: true })
  username: String;
  @Prop({ unique: true })
  email: String;
  @Prop({ unique: true })
  password: String;
}

export type SignupModel = Signup & Document;
export const SignupSchema = SchemaFactory.createForClass(Signup);
