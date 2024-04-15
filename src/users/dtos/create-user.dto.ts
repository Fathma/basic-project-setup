import { IsEmail, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ required: true })
    email: string

  @IsString()
  @ApiProperty({ required: true })
    password: string
}
