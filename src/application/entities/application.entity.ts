import { Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ApplicationEnvironment } from 'src/application-environment/entities/application-environment.entity';

@Entity()
export class Application {
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  clienId: string;

  @OneToMany(() => ApplicationEnvironment, (a) => a.application, {
    eager: true,
  })
  applicationsEnvironment: ApplicationEnvironment[];
}
