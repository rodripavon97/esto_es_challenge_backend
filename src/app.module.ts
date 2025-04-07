import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from './project/project.model';
import { User } from './user/user.model';
import { ProjectUser } from './project/project-user.model';
import { ProjectsModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get('POSTGRES_HOST'),
        port: parseInt(config.get('POSTGRES_PORT') || '5432'),
        username: config.get('POSTGRES_USER'),
        password: config.get('POSTGRES_PASSWORD'),
        database: config.get('POSTGRES_DB'),
        models: [Project, User, ProjectUser],
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    ProjectsModule,
    UserModule,
    SeedModule,
  ],
})
export class AppModule {}
