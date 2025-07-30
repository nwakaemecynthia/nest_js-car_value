import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';


@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  create(@Body() body: CreateUserDto) {    
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // @UseInterceptors(ClassSerializerInterceptor) // Use this to apply serialization rules
  //The @UseInterceptors decorator is commented out here, but you can uncomment it if you want to apply serialization rules globally for this controller.
  //This will ensure that the password field is excluded from the response when fetching user data.
  // This will not scale if you have many endpoints that need serialization rules.
  //Hence we will use an interceptor globally or at the module level instead.
  
  @UseInterceptors(SerializeInterceptor) // Use the SerializeInterceptor to handle serialization
  //This interceptor will apply serialization rules globally for this controller.
  //It will exclude the password field from the response when fetching user data.
  @Get(':id')
    async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get('/email/:email')
  async findOneByEmail(@Query('email') email: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
