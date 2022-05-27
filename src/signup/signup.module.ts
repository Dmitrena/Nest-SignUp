import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupSchema } from './schemas/signup.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Signup',
        schema: SignupSchema,
      },
    ]),
  ],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
