import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from '../../user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    //Injetion of User model & JwtSrvice
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    // Check if the email is already registered
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new UnauthorizedException('Email is already taken');
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with only email and hashed password
    const user = new this.userModel({
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Save the user in the database
    await user.save();

    return { message: 'User registered successfully' };
  }

  //Validates user credentials by comparing the entered password with the stored hash
  async validateUser(email: string, password: string) {
    // Find the user by email
    const user = await this.userModel.findOne({ email });
    if (!user) throw new UnauthorizedException('Invalid email or password');

    // Compare the entered password with the hashed password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Invalid password');

    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id }; // Store email and user ID in the token
    return { access_token: this.jwtService.sign(payload) };
  }

  //Allows user to update their profile
  async updateProfile(userId: string, updateData: Partial<User>) {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Update only the provided fields
    Object.assign(user, updateData);

    await user.save();
    return { user };
  }
}
