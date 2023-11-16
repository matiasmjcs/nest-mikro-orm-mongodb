import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ApplicationEnvironment } from 'src/application-environment/entities/application-environment.entity';
import { Application } from 'src/application/entities/application.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [Application, ApplicationEnvironment],
      entitiesTs: [Application, ApplicationEnvironment],
      type: 'mongo',
      port: 27017,
      user: 'root',
      password: 'example',
      dbName: 'nest-app',
      debug: true,
      persistOnCreate: true,
    }),
  ],
})
export class DatabaseModule {}
