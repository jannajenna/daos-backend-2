import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
  IsPostalCode,
} from 'class-validator';
export class UpdateUserDto {
  //name
  @IsString()
  @IsOptional()
  name?: string;

  //surname
  @IsString()
  @IsOptional()
  surname?: string;

  //email
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  //password
  @IsString()
  @MinLength(4, {
    message: 'Password is too short',
  })
  @MaxLength(8, {
    message: 'Password is too long',
  })
  @IsOptional()
  password?: string;

  //profile text
  @IsString()
  @IsOptional()
  profileText?: string;

  //post number
  @IsString()
  @IsPostalCode('DK')
  @IsOptional()
  postNumber?: string;

  //city
  @IsString()
  @IsOptional()
  city?: string;

  //telephone
  @IsString()
  @IsOptional()
  phone?: string;

  //photo
  @IsString()
  @IsOptional()
  photo?: string;
}
