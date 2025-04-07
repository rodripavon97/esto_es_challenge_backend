import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { ProjectUser } from './project-user.model';
import { ProjectsController } from './project.controller';
import { Project } from './project.model';
import { ProjectsService } from './project.service';
import { SeedModule } from '../seed/seed.module';

@Module({
  imports: [
    SeedModule,
    SequelizeModule.forFeature([Project, ProjectUser, User]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
