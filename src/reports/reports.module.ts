import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Report } from './entities/report.entity';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Report]), // Import the Report entity for database operations
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
