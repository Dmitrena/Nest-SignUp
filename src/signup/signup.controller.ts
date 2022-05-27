import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}
  @Post()
  signup(@Body() signupDto: SignupDto) {
    return this.signupService.signup(signupDto);
  }
}
