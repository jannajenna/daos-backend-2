import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super({
      // Get token from request header.
      //fromAuthHeaderWithScheme(auth_scheme) creates a new extractor that looks for the -->
      // JWT in the authorization header, expecting the scheme to match auth_scheme.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_secret_key', // Use environment variable in production
    });
  }

  async validate(payload: any) {
    // Find user by ID
    const user = await this.userModel.findById(payload.sub); //User got. https://mojoauth.com/glossary/jwt-subject/
    if (!user) {
      throw new UnauthorizedException();
    }
    // Attach user to the request object
    return user;
  }
}
