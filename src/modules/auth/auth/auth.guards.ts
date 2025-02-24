import { Injectable, UnauthorizedException } from '@nestjs/common';
//Custom authentication guard for JWT
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class Guard extends AuthGuard('jwt') {
  //AuthGuard('jwt') is a standard NestJS authentication mechanism
  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException('Unauthorized access');
    }
    //Return authenticated user
    return user;
  }
}
