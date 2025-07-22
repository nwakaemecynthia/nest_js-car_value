import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    // Import other modules if needed, e.g., TypeOrmModule for database integration
    TypeOrmModule.forFeature([User]), // Uncomment and replace User with your actual entity
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
