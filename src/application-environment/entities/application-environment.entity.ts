import {
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ApplicationDeployment } from 'src/application-deployment/entities/application-deployment.entity';
import { Application } from 'src/application/entities/application.entity';
import { Credential } from 'src/credential/entities/credential.entity';

@Entity()
export class ApplicationEnvironment {
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToOne(() => Application)
  application: Application;

  @OneToMany(() => Credential, (c) => c.applicationEnvironment, {
    eager: true,
  })
  credential: Credential[];

  @OneToMany(() => ApplicationDeployment, (a) => a.applicationEnvironment, {
    eager: true,
  })
  applicationDeployment: ApplicationDeployment[];
}
