import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // repository: Repository<User>;

  // constructor(
  //   repo: Repository<User>,
  // ) {
  //   this.repository = repo;
  // }

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}  


  create(body: CreateUserDto) {
    const user = this.userRepository.create(body);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
