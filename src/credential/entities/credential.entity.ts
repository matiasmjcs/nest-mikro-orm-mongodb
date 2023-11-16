import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ApplicationEnvironment } from 'src/application-environment/entities/application-environment.entity';

@Entity()
export class Credential {
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToOne(() => ApplicationEnvironment)
  applicationEnvironment: ApplicationEnvironment;
}
