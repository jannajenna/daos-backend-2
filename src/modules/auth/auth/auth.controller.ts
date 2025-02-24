import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Guard } from './auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async singIn(@Body() body) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }

  // Only authenticated users can update profile
  @UseGuards(Guard)
  @Patch('update-profile')
  async updateProfile(@Request() req, @Body() body) {
    return this.authService.updateProfile(req.user._id, body);
  }
}
