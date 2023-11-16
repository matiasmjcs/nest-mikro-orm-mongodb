import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities/application.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/mongodb';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly appRepository: EntityRepository<Application>,
    private readonly em: EntityManager,
  ) {}

  async create(createApplicationDto: CreateApplicationDto) {
    try {
      const created = this.appRepository.create(createApplicationDto);
      await this.em.persist(created).flush();
      return {
        msg: 'Successfully created',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async findAll() {
    try {
      return await this.appRepository.findAll();
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.appRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async update(id: string, updateApplicationDto: UpdateApplicationDto) {
    try {
      await this.appRepository.nativeUpdate(id, {
        description: updateApplicationDto.description,
        name: updateApplicationDto.name,
        clienId: updateApplicationDto.clientId,
      });
      return this.appRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.appRepository.nativeDelete(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
