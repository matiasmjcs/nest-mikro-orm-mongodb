import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationEnvironment } from 'src/application-environment/entities/application-environment.entity';
import { Application } from 'src/application/entities/application.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRoot({
      entities: [Application, ApplicationEnvironment],
      entitiesTs: [Application, ApplicationEnvironment],
      type: 'mongo',
      port: 27017,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      dbName: process.env.DB_NAME,
      debug: true,
      persistOnCreate: true,
    }),
  ],
})
export class DatabaseModule {}
