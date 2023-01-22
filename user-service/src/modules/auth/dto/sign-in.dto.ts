import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignInInput {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
