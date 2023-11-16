import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ApplicationDeployment } from 'src/application-deployment/entities/application-deployment.entity';

@Entity()
export class Integration {
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToOne(() => ApplicationDeployment)
  applicationDeployment: ApplicationDeployment;
}
