import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsPostalCode,
} from 'class-validator';
export class CreateUserDto {
  //name
  @IsString()
  @IsNotEmpty()
  name: string;

  //surname
  @IsString()
  @IsNotEmpty()
  surname: string;

  //email
  @IsString()
  @IsEmail()
  email: string;

  //password
  @IsString()
  @MinLength(4, {
    message: 'Password is too short',
  })
  @MaxLength(20, {
    message: 'Password is too long',
  })
  @IsNotEmpty()
  password: string;

  //profile text
  @IsString()
  @IsNotEmpty()
  profileText: string;

  //post number
  @IsString()
  @IsPostalCode('DK')
  @IsNotEmpty()
  postNumber: string;

  //city
  @IsString()
  @IsNotEmpty()
  city: string;

  //telephone
  @IsString()
  @IsNotEmpty()
  phone: string;

  //photo
  @IsString()
  @IsNotEmpty()
  photo: string;
}
