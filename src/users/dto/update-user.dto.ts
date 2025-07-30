// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNumber, IsOptional, IsString, } from "class-validator";


export class UpdateUserDto {
// export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    username: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()       
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;
}
