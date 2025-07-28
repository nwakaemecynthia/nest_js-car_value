import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/entities/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      // Alternatively, you can use:
      // entities: [User, Report], // if you have specific entities
      // or
      // entities: [__dirname + '/**/*.entity.ts'], // for TypeScript files
      // or
      // If you have multiple entities, you can use:
      // entities: [__dirname + '/**/*.entity.{ts,js}'],
      // This will automatically load all entity files in the directory.
      // Note: Ensure that the path is correct based on your project structure.
      // If you are using TypeScript, you might need to adjust the path accordingly.
      // If you are using JavaScript, you can use:
      // entities: [__dirname + '/**/*.entity.js'],
      // This will load all entity files in the directory.
      entities: [User, Report], // Specify your entities here
      migrations: ['src/migrations/*.ts'],
      autoLoadEntities: true,
      synchronize: true, // TURN OFF IN PRODUCTION
      
      // what is synchronize?
      // synchronize: true means that the database schema will be automatically updated
      // based on the current model definitions. This is useful during development.
      // However, it should be used with caution in production environments.
      // Setting synchronize to true will drop and recreate the database schema
      // whenever the application starts, which can lead to data loss.
      // It is recommended to use migrations for production databases instead of synchronize.
      // Note: Setting synchronize to true is useful for development purposes,
      // but it should be set to false in production to avoid accidental data loss.
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
